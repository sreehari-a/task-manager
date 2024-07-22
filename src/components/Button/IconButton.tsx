import React from "react";
import { IButton } from "./styled";


interface Props {
  color?: string;
  bgcolor?: string;
  padding?: string;
  borderradius?: string;
  border?: string;
  margin?: string;
  hoverColor?: string;
  onClick: () => void;
  children: any;
  disabled?: boolean;
  fontSize?: string;
  title?: string;
}

const IconButton: React.FC<Props> = ({
  color = "black",
  padding = "5px 8px",
  margin = "0",
  hoverColor,
  onClick,
  children,
  disabled,
  bgcolor="white",
  borderradius="5px",
  fontSize="16px",
  border="none",
  title
}: Props) => {
  return (
    <IButton
      color={color}
      bgcolor={bgcolor}
      padding={padding}
      margin={margin}
      hoverColor={hoverColor||""}
      onClick={onClick}
      disabled={disabled}
      borderradius={borderradius}
      border={border}
      fontSize={fontSize}
      title={title}
    >
      {children}
    </IButton>
  );
};

export default IconButton;
