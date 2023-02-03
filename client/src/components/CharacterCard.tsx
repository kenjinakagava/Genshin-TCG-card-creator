import energyCard from "../images/card-energy.png";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import deleteCard from "../utils/deleteCard";
import { useState } from "react";
import editCard from "../utils/editCard";
interface CardProps {
  cardData: {
    user: string;
    id: number;
    title: string;
    status: boolean;
    energy: number;
    element: string;
    imgUrl: string;
    health: string;
  };
  isMyCard?: boolean;
}

const CharacterCard = (props: CardProps) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const energyArray = Array.from(
    { length: props.cardData.energy },
    (_, i) => i
  );
  console.log(isDeleted);
  const deleteMutation = useMutation({ mutationFn: deleteCard });

  const handleDelete = () => {
    setIsDeleted(true);
    deleteMutation.mutate(props.cardData.id);
  };

  const editMutation = useMutation({ mutationFn: editCard });

  const handleEdit = () => {
    editMutation.mutate({ cardData: { ...props.cardData } });
  };
  return (
    <>
      {isDeleted ? null : (
        <li className="relative w-[10.06rem] h-[17.05rem] rounded-xl bg-contain flex mx-auto md:mx-0">
          <img
            src={props.cardData.imgUrl}
            alt={props.cardData.title}
            className="h-full rounded-2xl object-cover text-image"
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
          <p className="card-title text-center w-full">
            {props.cardData.title}
          </p>
          {props.isMyCard ? (
            <>
              <button className="card-edit z-20 flex flex-col items-center">
                <AiOutlineEdit size={32} />
                Edit
              </button>
              <button
                className="card-delete z-20 flex flex-col items-center"
                onClick={handleDelete}
              >
                <AiOutlineDelete size={32} />
                Delete
              </button>
            </>
          ) : null}
        </li>
      )}
    </>
  );
};

export default CharacterCard;
