import { useEffect, useState } from "react";
import { ComponentPropInterface, FieldErrorType } from "./types";
import { Error } from "./styled";

function FieldError<ComponentProps extends ComponentPropInterface>(
  WrappedComponent: (props: ComponentProps & FieldErrorType) => JSX.Element
) {
  return function HOC(props: ComponentProps & FieldErrorType) {
    const { validate, onValidationError, ...componentProps } = props;

    const [error, setError] = useState("");

    useEffect(() => {
      if (validate) {
        const error = validate<typeof componentProps.value>(
          componentProps.value
        );
        setError(error);
        onValidationError?.(props.id, !!error);
      }
    }, [componentProps?.value]);
    return (
      <div>
        <WrappedComponent {...props} />
        {error && <Error>{error}</Error>}
      </div>
    );
  };
}

export default FieldError;
