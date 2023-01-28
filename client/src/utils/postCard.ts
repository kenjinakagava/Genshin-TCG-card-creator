import axios from "axios";

interface postProps {
  id: number;
  title: string;
  status: boolean;
  energy: number;
  element: string;
  imgUrl: string;
  health: string;
}

const postCard = (cardData: postProps) => {
  return axios
    .post<postProps>("http://localhost:4001/upload", {
      title: cardData.title,
      status: true,
      energy: cardData.energy,
      element: cardData.element,
      imgUrl: cardData.imgUrl,
      health: cardData.health,
    })
    .then((res) => res.data);
};

export default postCard;
