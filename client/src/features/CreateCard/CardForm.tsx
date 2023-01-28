import ElementToggler from "./ElementToggler";
import { useMutation } from "@tanstack/react-query";
import CardAttributes from "./CardAttributes";
import postCard from "../../utils/postCard";
import { useContext } from "react";
import cardDataContext from "../../contexts/cardDataContext";

const CardForm = () => {
  const { cardData, setCardData } = useContext(cardDataContext);
  // onsubmit run api call to post card
  // usecontext later
  const mutation = useMutation({ mutationFn: postCard });
  const handleClick = () => {
    mutation.mutate({ ...cardData });
  };
  return (
    <form
      action="#"
      className="bg-vanilla border-1 border-[#867460] rounded-lg px-4"
    >
      <ElementToggler cardData={cardData} setCardData={setCardData} />
      <CardAttributes />
      <button onClick={handleClick}>Create card</button>
    </form>
  );
};

export default CardForm;
