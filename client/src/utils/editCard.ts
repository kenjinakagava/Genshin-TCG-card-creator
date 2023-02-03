import axios from "axios";
import CardProps from "../interfaces/Card";

const getCards = (props: CardProps) => {
  return axios
    .put("http://localhost:4001/cards", {
      user: props.cardData.user,
      id: props.cardData.id,
      title: props.cardData.title,
      status: true,
      energy: props.cardData.energy,
      element: props.cardData.element,
      imgUrl: props.cardData.imgUrl,
      health: props.cardData.health,
    })
    .then((res) => res.data);
};

export default getCards;
