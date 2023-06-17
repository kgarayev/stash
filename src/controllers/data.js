import { store } from "../store/store";
import axios from "axios";

// function to get data from the api
export const getData = async (input) => {
  // try {
  //   store.dispatch(loading(true));
  //   // only a backup data
  //   // store.dispatch(newApiData(backupData));
  //   // real api data
  //   const { data } = await axios.get(
  //     `https://api.api-ninjas.com/v1/nutrition?query=${input}`,
  //     {
  //       headers: {
  //         "X-Api-Key": API_KEY,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   store.dispatch(loading(false));
  //   store.dispatch(newApiData(data));
  // } catch (error) {
  //   console.log(error);
  // }
};
