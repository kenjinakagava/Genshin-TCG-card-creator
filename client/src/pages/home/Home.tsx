import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../../components/CharacterCard";
import getRecentCards from "../../utils/getRecentCards";
import CardList from "../../features/CreateCard/CardList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

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

const Home = () => {
  const cardsQuery = useQuery({ queryKey: ["cards"], queryFn: getRecentCards });

  if (cardsQuery.isLoading) {
    return <Loading />;
  }

  if (cardsQuery.isError) {
    return <Error />;
  }

  return (
    <main className="bg-beige">
      <h2 className="text-center text-mobileTitle md:text-6xl">Recent Cards</h2>
      <CardList>
        {cardsQuery?.data?.map((card: CardProps) => (
          <CharacterCard cardData={card} key={card.id} />
        ))}
      </CardList>
    </main>
  );
};

export default Home;
