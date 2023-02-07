import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import CardProps from "../../interfaces/Card";
import editCard from "../../utils/editCard";

const EditCardForm = ({ cardData }: CardProps) => {
  const stringEnergy = cardData.energy.toString();
  // this allows the user to not have to re enter every field of the form
  const [titleValue, setTitleValue] = useState(cardData.title);
  const [imgUrlValue, setImgUrlValue] = useState(cardData.imgUrl);
  const [healthValue, setHealthValue] = useState(cardData.health);
  const [energyValue, setEnergyValue] = useState(stringEnergy);

  const handleTitleValue = (event: React.FormEvent<HTMLInputElement>) => {
    setTitleValue((event.target as HTMLInputElement).value);
  };
  const handleImgUrlValue = (event: React.FormEvent<HTMLInputElement>) => {
    setImgUrlValue((event.target as HTMLInputElement).value);
  };
  const handleHealthValue = (event: React.FormEvent<HTMLInputElement>) => {
    setHealthValue((event.target as HTMLInputElement).value);
  };
  const handleEnergyValue = (event: React.FormEvent<HTMLInputElement>) => {
    setEnergyValue((event.target as HTMLInputElement).value);
  };
  let intEnergyValue = parseInt(energyValue);
  // prevent extra energy icons from being created, preventing lag / crashes
  if (intEnergyValue > 6) {
    intEnergyValue = 6;
  }

  const editMutation = useMutation({ mutationFn: editCard });

  const handleSubmit = () => {
    editMutation.mutate({
      cardData: {
        ...cardData,
        title: titleValue,
        imgUrl: imgUrlValue,
        health: healthValue,
        energy: intEnergyValue,
      },
    });
  };
  return (
    <form>
      <fieldset>
        <label htmlFor="title" className="w-full text-4xl py-4">
          <h2>Input Title</h2>
        </label>
        <input
          type="text"
          name="title"
          maxLength={16}
          placeholder="title (max 16 characters)"
          onChange={(e) => {
            handleTitleValue(e);
          }}
        />
        {
          // this is not a type number because I want to allow users
          // to use symbols like "?" and "∞" and others I may not know about
        }
        <label htmlFor="health" className="w-full text-4xl py-4">
          <h2>Character Health</h2>
        </label>
        <input
          type="text"
          name="health"
          maxLength={2}
          placeholder="health (max 2 characters)"
          onChange={(e) => {
            handleHealthValue(e);
          }}
        />
        <label htmlFor="imgUrl" className="w-full text-4xl py-4">
          <h2>Image Url</h2>
        </label>
        <input
          type="text"
          name="imgUrl"
          placeholder="imgUrl"
          onChange={(e) => {
            handleImgUrlValue(e);
          }}
        />
        <label htmlFor="energy" className="w-full text-4xl py-4">
          <h2>Energy</h2>
        </label>
        <input
          type="number"
          name="energy"
          min={0}
          max={6}
          placeholder="energy (max 6)"
          onChange={(e) => {
            handleEnergyValue(e);
          }}
        />
      </fieldset>
      <button onClick={handleSubmit}>Edit card</button>
    </form>
  );
};

export default EditCardForm;
