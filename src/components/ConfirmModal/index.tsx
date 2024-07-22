import { theme } from "../../common/theme";
import Button from "../Button";
import Modal from "../Modal";
import { ButtonGroup } from "./styled";
import { ConfirmModalProps } from "./types";

function ConfirmModal({
  modalTitle,
  modalBody,
  onCloseModal,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonClick,
  secondaryButtonClick,
}: ConfirmModalProps) {
  return (
    <Modal title={modalTitle} onCloseModal={onCloseModal}>
      <div>{modalBody}</div>
      <ButtonGroup>
        <Button
          color={theme.colors.WHITE}
          bgcolor={theme.colors.BLUE}
          onClick={primaryButtonClick}
          buttonText={primaryButtonText}
        />
        <Button
          color={theme.colors.DARK_GREY}
          bgcolor={theme.colors.LIGHT_GREY}
          onClick={secondaryButtonClick}
          buttonText={secondaryButtonText}
        />
      </ButtonGroup>
    </Modal>
  );
}

export default ConfirmModal;
