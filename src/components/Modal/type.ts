import { ReactNode } from "react"


type ModalProps = {
    children: ReactNode;
    footer?: ReactNode;
    title: string;
    open?: boolean;
    onCloseModal?: () => void;
}
export default ModalProps;