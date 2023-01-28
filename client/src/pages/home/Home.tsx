import { useQuery } from "@tanstack/react-query";
import postCard from "../../utils/postCard";
import CharacterCard from "../../components/CharacterCard";
import getRecentCards from "../../utils/getRecentCards";

interface CardProps {
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
    return <div>Loading...</div>;
  }

  if (cardsQuery.isError) {
    return <div>Error with api</div>;
  }

  return (
    <main className="bg-beige">
      <h2 className="text-center text-mobileTitle md:text-6xl">Recent Cards</h2>
      <ul className="flex flex-col items-center gap-4 justify-evenly py-8 md:flex-row ">
        {cardsQuery?.data?.map((card: CardProps) => (
          <CharacterCard cardData={card} key={card.id} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
