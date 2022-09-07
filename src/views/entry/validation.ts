import * as yup from "yup";

const error = {
  entry: "Você digitou uma placa inválida.",
};

export default yup.object().shape({
  entry: yup
    .string()
    .min(8, error.entry)
    .max(8, error.entry)
    .test("entry", error.entry, (value) => {
      if (value) {
        return value.trim().length >= 1;
      }
      return false;
    })
    .test("entry", error.entry, (value) => {
      if (value) {
        return /([A-z]{3})-([0-9]{4})/.test(value);
      }
      return false;
    }),
});
