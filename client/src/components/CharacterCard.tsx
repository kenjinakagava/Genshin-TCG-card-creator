import { useEffect } from "react";

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
  const energyArray = Array.from({ length: props.card.energy }, (_, i) => i);
  return (
    <>
      <li className="relative w-[10.06rem] h-[17.05rem] rounded-xl bg-contain flex mx-auto md:mx-0">
        <img
          src={props.card.imgUrl}
          alt={props.card.title}
          className="h-full rounded-2xl object-cover"
        />
        <div className="card-health text-white text-4xl z-20">
          {props.card.health}
        </div>
        <ul className="flex flex-col card-energy-parent">
          {energyArray.map((energy) => (
            <li key={props.card.id} className="card-energy" />
          ))}
        </ul>
        <div className="card-frame z-10" />
      </li>
    </>
  );
};

export default CharacterCard;
