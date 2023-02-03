import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../../components/CharacterCard";
import Loading from "../../components/Loading";
import getCards from "../../utils/getCards";
import Error from "../../components/Error";
import CardList from "../../features/CreateCard/CardList";
interface CardProps {
  user: string;
  id: number;
  title: string;
  status: boolean;
  energy: number;
  element: string;
  imgUrl: string;
  health: string;
}

const AllCards = () => {
  const cardsQuery = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  if (cardsQuery.isLoading) {
    return <Loading />;
  }

  if (cardsQuery.isError) {
    return <Error />;
  }

  return (
    <main className="bg-beige min-h-screen">
      <CardList>
        {cardsQuery?.data?.map((card: CardProps) => (
          <CharacterCard cardData={card} key={card.id} />
        ))}
      </CardList>
    </main>
  );
};

export default AllCards;
