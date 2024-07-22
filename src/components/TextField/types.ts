export type CommonProps = {
  id: string;
  value: string;
  onChangeValue?: (id: string, value: string) => void;
  onBlur?: (id: string, value: string) => void;
};

export type TextAreaProp = {
  textarea: true;
};
export type TextFieldProp = {
  textarea?: false;
};

export type TextFieldProps =
  | (CommonProps & TextFieldProp & React.InputHTMLAttributes<HTMLInputElement>)
  | (CommonProps &
      TextAreaProp &
      React.InputHTMLAttributes<HTMLTextAreaElement>);

export type SearchBarProps = {
  text: string;
  onSearch: (value: string) => void;
}
