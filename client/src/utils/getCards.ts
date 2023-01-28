import axios from "axios";

const getCards = () => {
  return axios.get("http://localhost:4001/cards").then((res) => res.data);
};

export default getCards;
