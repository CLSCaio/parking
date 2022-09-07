import axios from "axios";

export const entryPlate = async (plate: string) => {
  const url = `https://parking-lot-to-pfz.herokuapp.com/parking`;

  try {
    const { data } = await axios.post(url, {
      plate,
    });

    return data;
  } catch (error: any) {
    const { response } = error;
    return response;
  }
};
