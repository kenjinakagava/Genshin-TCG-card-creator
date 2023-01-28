interface CardDataProps {
  cardData: {
    id: number;
    title: string;
    status: boolean;
    energy: number;
    element: string;
    imgUrl: string;
    health: string;
  };
  setCardData: React.Dispatch<
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

export default CardDataProps;
