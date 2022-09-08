export interface ButtonProps extends ButtonStyles {
  loading?: boolean;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ButtonStyles {
  variant?: "default" | "outline";
  color?: string;
}
