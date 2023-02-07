interface CardListProps {
  children: React.ReactNode;
}

const CardList = ({ children }: CardListProps) => {
  return (
    <ul className="min-h-screen flex flex-col items-center gap-32 justify-evenly md:flex-row flex-wrap container mx-auto pt-8 pb-32 md:gap-8 ">
      {children}
    </ul>
  );
};

export default CardList;
