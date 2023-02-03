import axios from "axios";

const getCards = (id: number) => {
  return axios
    .delete(`http://localhost:4001/cards/${id}`)
    .then((res) => res.data);
};

export default getCards;
