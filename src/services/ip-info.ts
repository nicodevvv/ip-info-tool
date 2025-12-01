import { type IpData } from "../types.d";
export const getApiData = (ip: string): Promise<IpData> => {
  const url = `https://api.ipdata.co/${ip}?api-key=${
    import.meta.env.VITE_API_KEY
  }`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: IpData) => {
      return data;
    });
};
