import energyCard from "../images/card-energy.png";

interface CardProps {
  cardData: {
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
  const energyArray = Array.from(
    { length: props.cardData.energy },
    (_, i) => i
  );
  return (
    <>
      <li className="relative w-[10.06rem] h-[17.05rem] rounded-xl bg-contain flex mx-auto md:mx-0">
        <img
          src={props.cardData.imgUrl}
          alt={props.cardData.title}
          className="h-full rounded-2xl object-cover"
        />
        <div className="card-health text-white text-4xl z-20">
          {props.cardData.health}
        </div>
        <ul className="flex flex-col card-energy-parent">
          {energyArray.map((energy) => (
            <li key={energy} className="">
              <img src={energyCard} alt="" className=" w-12" />
            </li>
          ))}
        </ul>
        <div className="card-frame z-10" />
      </li>
    </>
  );
};

export default CharacterCard;
