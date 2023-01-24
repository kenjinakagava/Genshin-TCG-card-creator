interface CardProps {
  card: {
    id: number;
    title: string;
    status: boolean;
    energy: number;
    element: string;
    imgUrl: string;
    health: string;
  };
}

const CharacterCard = (props: CardProps) => {
  return (
    <>
      <li className="relative w-[10.06rem] h-[17.05rem] rounded-xl bg-contain">
        <img
          src={props.card.imgUrl}
          alt={props.card.title}
          className="h-full"
        />
        <div className="card-health text-white text-4xl z-20">
          {props.card.health}
        </div>
        <div className="card-frame z-10" />
      </li>
    </>
  );
};

export default CharacterCard;
