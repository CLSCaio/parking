export interface ButtonProps extends ButtonStyles {
  loading?: boolean;
  label: string;
  disabled?: boolean;
}

export interface ButtonStyles {
  variant?: "default" | "outline";
  color?: string;
}
