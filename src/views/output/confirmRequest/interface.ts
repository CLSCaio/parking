type setBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export interface ConfirmRequestProps {
  payOrOut: "pay" | "out";
  buttonLabel: string;
  text: string;
  plate: string;
  setConfirm: setBoolean;
  setLoading: setBoolean;
  confirmEntry: setBoolean;
  setLoadContent: React.Dispatch<
    React.SetStateAction<{
      message: string;
      type: "sucess" | "error";
    }>
  >;
}
