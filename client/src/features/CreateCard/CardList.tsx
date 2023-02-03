interface CardListProps {
  children: React.ReactNode;
}

const CardList = ({ children }: CardListProps) => {
  return (
    <ul className="min-h-screen flex flex-col items-center gap-8 justify-evenly md:flex-row flex-wrap container mx-auto py-8">
      {children}
    </ul>
  );
};

export default CardList;
