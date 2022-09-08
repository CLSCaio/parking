import * as yup from "yup";
const error = {
    output: "Você digitou uma placa inválida.",
};
export default yup.object().shape({
    output: yup
        .string()
        .min(8, error.output)
        .max(8, error.output)
        .test("output", error.output, (value) => {
        if (value) {
            return value.trim().length >= 1;
        }
        return false;
    })
        .test("output", error.output, (value) => {
        if (value) {
            return /([A-z]{3})-([0-9]{4})/.test(value);
        }
        return false;
    }),
});
