import ElementToggler from "./ElementToggler";
import { useMutation } from "@tanstack/react-query";
import CardAttributes from "./CardAttributes";
import postCard from "../../utils/postCard";
import { useContext, useEffect } from "react";
import cardDataContext from "../../contexts/cardDataContext";
import { useAuth0 } from "@auth0/auth0-react";
import { redirect, useNavigate } from "react-router-dom";
import Error from "../../components/Error";

const CardForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const userEmail = user?.email;
  let userId = "";
  if (userEmail !== undefined) {
    userId = userEmail;
  }

  const { cardData, setCardData } = useContext(cardDataContext);

  useEffect(() => {
    setCardData({ cardData: { ...cardData, user: userId } });
  }, []);

  const mutation = useMutation({ mutationFn: postCard });

  const handleClick = () => {
    mutation.mutate({ ...cardData });
    return redirect("/my-cards");
  };
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <form
      action="#"
      className="bg-vanilla border-1 border-[#867460] rounded-lg px-4"
      onSubmit={() => handleSubmit}
    >
      <ElementToggler cardData={cardData} setCardData={setCardData} />
      <CardAttributes />
      <button onClick={handleClick} className="send-button">
        Create card
      </button>
    </form>
  );
};

export default CardForm;
