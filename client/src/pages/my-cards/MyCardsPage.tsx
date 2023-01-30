import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../../components/CharacterCard";
import getUsersCards from "../../utils/getUserCards";

interface MyCardsProps {
  user: string;
}

interface CardProps {
  id: number;
  title: string;
  status: boolean;
  energy: number;
  element: string;
  imgUrl: string;
  health: string;
}

const MyCards = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const userEmail = user?.email;
  let userId = "";
  const cardsQuery = useQuery({
    queryKey: ["cards", user],
    queryFn: () => getUsersCards(userId),
  });
  if (userEmail !== undefined) {
    userId = userEmail;
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (!isAuthenticated) {
    return <div>please auth bro</div>;
  }

  if (cardsQuery.isLoading) {
    return (
      <main className="min-h-[calc(100vh-192px)] bg-beige">
        <div className="container mx-auto">
          <p className="text-6xl">Loading...</p>
        </div>
      </main>
    );
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
    <main className="bg-beige min-h-[calc(100vh-192px)]">
      <div className="container mx-auto py-8">
        <ul className="flex flex-col items-center gap-8 justify-evenly md:flex-row flex-wrap">
          {cardsQuery.data.map((card: CardProps) => (
            <CharacterCard cardData={card} key={card.id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MyCards;
