import ElementToggler from "./ElementToggler";
import CardDataProps from "../../interfaces/cardData";
import CardAttributes from "./CardAttributes";

const CardForm = ({ cardData, setCardData }: CardDataProps) => {
  // onsubmit run api call to post card
  // usecontext later
  console.log(cardData);
  return (
    <form
      action="#"
      className="bg-vanilla border-1 border-[#867460] rounded-lg"
    >
      <ElementToggler cardData={cardData} setCardData={setCardData} />
      <CardAttributes />
    </form>
  );
};

export default CardForm;
