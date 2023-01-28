import axios from "axios";

const getCards = async () => {
  try {
    const { data: response } = await axios.get(
      "http://localhost:4001/recent-cards"
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export default getCards;
