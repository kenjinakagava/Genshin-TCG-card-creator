import axios from "axios";

const getRecentCards = () => {
  return axios
    .get("http://localhost:4001/recent-cards")
    .then((res) => res.data);
};

export default getRecentCards;
