export type FieldErrorType = {
    validate?: <T>(value: T) => string;
    onValidationError?: (id?: string, error?: boolean) => void;
}

export interface ComponentPropInterface {
    value?: any;
    id: string;
  }