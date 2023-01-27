import { useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import cardDataContext from "../../contexts/cardDataContext";
import CardForm from "../../features/CreateCard/CardForm";

interface CardProps {
  card: {
    title: string;
    status: boolean;
    energy: number;
    element: string;
    imgUrl: string;
    health: string;
  };
  setCardData?: React.Dispatch<
    React.SetStateAction<{
      card: {
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
  const [cardData, setCardData] = useState<CardProps>({
    card: {
      title: "test",
      status: true,
      energy: 0,
      element: "",
      imgUrl: "",
      health: "10",
    },
  });
  const card = cardData.card;
  return (
    <cardDataContext.Provider value={{ card, setCardData }}>
      <main className=" min-h-[100vh] pt-8 bg-beige">
        <div className="container mx-auto md:flex md:justify-evenly">
          <CardForm cardData={cardData.card} setCardData={setCardData} />
          <CharacterCard card={cardData?.card} />
        </div>
      </main>
    </cardDataContext.Provider>
  );
};

export default CreateACardPage;
