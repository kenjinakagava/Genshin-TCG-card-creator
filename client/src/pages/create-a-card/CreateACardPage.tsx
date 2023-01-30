import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import cardDataContext from "../../contexts/cardDataContext";
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
    return (
      <main className="min-h-[calc(100vh-192px)] pt-8 bg-beige">
        <div className="container mx-auto md:flex md:justify-evenly">
          Loading ...
        </div>
      </main>
    );
  }
  if (error) {
    <main className="min-h-[calc(100vh-192px)] pt-8 bg-beige">
      <div className="container mx-auto md:flex md:justify-evenly">
        Error with API
      </div>
    </main>;
  }
  return (
    <cardDataContext.Provider value={{ cardData, setCardData }}>
      <main className="min-h-[calc(100vh-192px)] pt-8 bg-beige">
        <div className="container mx-auto md:flex md:justify-evenly">
          {isAuthenticated ? (
            <>
              <CardForm />
              <CharacterCard cardData={card?.cardData} />
            </>
          ) : (
            <div>please authenticate</div>
          )}
        </div>
      </main>
    </cardDataContext.Provider>
  );
};

export default CreateACardPage;
