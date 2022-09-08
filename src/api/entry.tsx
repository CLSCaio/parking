import axios from "axios";

export const entryPlate = async (plate: string) => {
  const url = `https://parking-lot-to-pfz.herokuapp.com/parking`;

  try {
    const response = await axios.post(url, {
      plate,
    });

    return response;
  } catch (error: any) {
    return error.response;
  }
};
