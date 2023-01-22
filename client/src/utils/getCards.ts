import axios from "axios";

const getCards = async (url: string) => {
  const res = await axios.get(url);
  console.log(res);
};

export default getCards;
