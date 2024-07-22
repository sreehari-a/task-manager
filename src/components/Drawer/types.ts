export type DrawerProps = {
  open: boolean;
  header?: string;
  onClose?: () => void;
  children?: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
};
