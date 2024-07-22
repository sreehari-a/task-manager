import { ReactNode } from "react";
import { ButtonIcon, ButtonText, NormalButton } from "./styled";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
  disabled?: boolean;
  borderradius?: string;
  border?: string;
  color: string;
  bgcolor: string;
  fontSize?: string;
  padding?: string;
  icon?: ReactNode;
};

const Button = ({
  onClick,
  buttonText,
  disabled = false,
  borderradius = "0.75rem",
  border="1px solid transparent",
  color,
  bgcolor,
  icon,
  padding,
  fontSize= "0.75rem"
}: Props) => {
  return (
    <NormalButton
      color={color}
      bgcolor={bgcolor}
      radius={borderradius}
      fontSize={fontSize}
      disabled={disabled}
      onClick={onClick}
      border={border}
      padding={padding}
    >
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {buttonText && <ButtonText>{buttonText}</ButtonText>}
    </NormalButton>
  );
};
export default Button;
