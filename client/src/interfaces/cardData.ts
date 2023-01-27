interface CardDataProps {
  cardData: {
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

export default CardDataProps;
