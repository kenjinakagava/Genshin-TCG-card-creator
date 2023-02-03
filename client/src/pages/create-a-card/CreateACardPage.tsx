import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import cardDataContext from "../../contexts/cardDataContext";
import RequireAuth from "../../features/Auth/RequireAuth";
import CardForm from "../../features/CreateCard/CardForm";

interface CardProps {
  cardData: {
    user: string;
    id: number;
    title: string;
    status: boolean;
    energy: number;
    element: string;
    imgUrl: string;
    health: string;
  };
  setCardData?: React.Dispatch<
    React.SetStateAction<{
      cardData: {
        user: string;
        id: number;
        title: string;
        status: boolean;
        energy: number;
        element: string;
        imgUrl: string;
        health: string;
      };
    }>
  >;
}

const CreateACardPage = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const [card, setCardData] = useState<CardProps>({
    cardData: {
      user: "",
      id: 0,
      title: "",
      status: true,
      energy: 0,
      element: "",
      imgUrl: "",
      health: "10",
    },
  });
  const cardData = card.cardData;

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <RequireAuth />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <cardDataContext.Provider value={{ cardData, setCardData }}>
      <main className="min-h-screen bg-beige">
        <div className="min-h-screen container mx-auto items-center md:flex md:justify-evenly">
          <CardForm />
          <CharacterCard cardData={card?.cardData} />
        </div>
      </main>
    </cardDataContext.Provider>
  );
};

export default CreateACardPage;
