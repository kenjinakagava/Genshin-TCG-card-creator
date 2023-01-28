import { useContext, useEffect, useState } from "react";
import cardDataContext from "../../contexts/cardDataContext";

interface InputProps {
  cardData: {
    id: number;
    title: string;
    status: boolean;
    energy: number;
    element: string;
    imgUrl: string;
    health: string;
  };
  name: string;
}

const CardInput = ({ cardData, name }: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  const { card, setCardData } = useContext(cardDataContext);
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  };
  useEffect(() => {
    setCardData({ card: { ...cardData } });
  }, [inputValue]);

  return (
    <input
      type="text"
      name={name}
      onChange={(e) => {
        handleInput(e);
      }}
    />
  );
};

export default CardInput;
