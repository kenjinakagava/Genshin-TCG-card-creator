import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../../components/CharacterCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import getUsersCards from "../../utils/getUserCards";
import RequireAuth from "../../features/Auth/RequireAuth";
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
  // Auth Loading
  if (isLoading || (isAuthenticated && cardsQuery.isLoading)) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <RequireAuth />;
  }

  if (cardsQuery.isError) {
    return <Error />;
  }

  return (
    <main className="bg-beige min-h-screen">
      <div className="container mx-auto">
        <CardList>
          {cardsQuery.data.map((card: CardProps) => (
            <CharacterCard cardData={card} key={card.id} isMyCard={true} />
          ))}
        </CardList>
      </div>
    </main>
  );
};

export default MyCards;
