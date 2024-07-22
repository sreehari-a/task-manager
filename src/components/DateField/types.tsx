export type DateProps = {
    id: string;
    onChange: (id: string, date?: number) => void;
    value?: number;
}

export type DateFieldProps = DateProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof DateProps>