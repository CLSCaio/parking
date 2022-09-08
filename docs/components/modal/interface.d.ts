import { ReactNode } from "react";
export interface ModalProps extends ModalStyles {
    isVisible: boolean;
    children: ReactNode;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    withoutClose?: boolean;
}
export interface ModalStyles {
    withoutBase?: boolean;
    maxW?: string;
    height?: string;
}
//# sourceMappingURL=interface.d.ts.map