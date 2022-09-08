import axios from "axios";

export const payParking = async (plate: string) => {
  const url = `https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/pay`;

  try {
    const response = await axios.post(url);
    return response;
  } catch (error: any) {
    return error;
  }
};
