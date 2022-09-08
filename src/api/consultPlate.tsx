import axios from "axios";

export const consultPlate = async (plate: string) => {
  const url = `https://parking-lot-to-pfz.herokuapp.com/parking/${plate}`;

  try {
    const response = await axios.get(url);
    return response;
  } catch (error: any) {
    return error;
  }
};
