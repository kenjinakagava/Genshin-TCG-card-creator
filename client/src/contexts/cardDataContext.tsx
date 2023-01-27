import { createContext } from "react";

interface CardDataContextProps {
  card: {
    title: string;
    status: boolean;
    energy: number;
    element: string;
    imgUrl: string;
    health: string;
  };
  setCardData: React.Dispatch<
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

const contextState = {
  card: {
    title: "",
    status: true,
    energy: 3,
    element: "",
    imgUrl:
      "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Origin_Card_Back.png/revision/latest?cb=20221207084514",
    health: "10",
  },
  setCardData: () => {},
};

const cardDataContext = createContext<CardDataContextProps>(contextState);

export default cardDataContext;
