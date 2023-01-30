interface CardsProps {
  user: string;
}

const Cards = ({ user }: CardsProps) => {
  return (
    <ul className="flex flex-col items-center gap-8 justify-evenly md:flex-row flex-wrap"></ul>
  );
};

export default Cards;
