import axios from "axios";

const getUsersCards = (user: string) => {
  return axios
    .get(`http://localhost:4001/user-cards/${user}`)
    .then((res) => res.data);
};

export default getUsersCards;
