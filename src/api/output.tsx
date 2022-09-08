import axios from "axios";

export const outputPlate = async (plate: string) => {
  const url = `https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/out`;

  try {
    const response = await axios.post(url);

    return response;
  } catch (error: any) {
    return error;
  }
};
