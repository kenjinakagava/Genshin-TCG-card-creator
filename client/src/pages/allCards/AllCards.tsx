import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../../components/CharacterCard";
import getCards from "../../utils/getCards";

interface CardProps {
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
    <main className="min-h-[calc(100vh-192px)] bg-beige">
      <div className="container mx-auto">
        <p className="text-6xl">Loading...</p>
      </div>
    </main>;
  }

  if (cardsQuery.isError) {
    return (
      <main className="min-h-[calc(100vh-192px)] bg-beige">
        <div className="container mx-auto ">
          <p className="text-6xl">Error fetching cards from API</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-192px)] pt-8 bg-beige">
      <ul className="flex flex-col items-center gap-4 justify-evenly py-8 md:flex-row ">
        {cardsQuery?.data?.map((card: CardProps) => (
          <CharacterCard cardData={card} key={card.id} />
        ))}
      </ul>
    </main>
  );
};

export default AllCards;
