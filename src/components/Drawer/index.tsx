import {
  CloseIcon,
  DrawerComponent,
  DrawerFooter,
  DrawerHeader,
  DrawerHidden,
} from "./styled";
import { DrawerProps } from "./types";

const Drawer = (props: DrawerProps) => {
  const { open, header, onClose, children,footer } = props;

  return (
    <>
      <DrawerHidden open={open} onClick={onClose} aria-hidden="true" />
      <DrawerComponent open={open} tabIndex={-1}>
        {header && (
          <DrawerHeader>
            {header}
            <CloseIcon onClick={onClose}>&#10006;</CloseIcon>
          </DrawerHeader>
        )}
        {children}
       {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerComponent>
    </>
  );
};
export default Drawer;
