import { useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import cardDataContext from "../../contexts/cardDataContext";
import CardForm from "../../features/CreateCard/CardForm";

interface CardProps {
  cardData: {
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
  const [card, setCardData] = useState<CardProps>({
    cardData: {
      id: 0,
      title: "test",
      status: true,
      energy: 0,
      element: "",
      imgUrl: "",
      health: "10",
    },
  });
  const cardData = card.cardData;
  return (
    <cardDataContext.Provider value={{ cardData, setCardData }}>
      <main className=" min-h-[100vh] pt-8 bg-beige">
        <div className="container mx-auto md:flex md:justify-evenly">
          <CardForm />
          <CharacterCard cardData={card?.cardData} />
        </div>
      </main>
    </cardDataContext.Provider>
  );
};

export default CreateACardPage;
