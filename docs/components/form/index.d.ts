import React, { ReactNode } from "react";
declare type FormProps = {
    children: ReactNode;
    onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
};
export declare const Form: ({ children, onSubmit }: FormProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map