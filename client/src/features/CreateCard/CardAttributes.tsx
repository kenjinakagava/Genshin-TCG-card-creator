import { useContext, useEffect, useState } from "react";
import cardDataContext from "../../contexts/cardDataContext";

const CardAttributes = () => {
  const [titleValue, setTitleValue] = useState("");
  const [imgUrlValue, setImgUrlValue] = useState("");
  const [healthValue, setHealthValue] = useState("");
  const [energyValue, setEnergyValue] = useState("");

  const { card, setCardData } = useContext(cardDataContext);
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
  const intEnergyValue = parseInt(energyValue);
  useEffect(() => {
    setCardData({
      card: {
        ...card,
        title: titleValue,
        imgUrl: imgUrlValue,
        health: healthValue,
        energy: intEnergyValue,
      },
    });
  }, [titleValue, imgUrlValue, healthValue, energyValue]);
  return (
    <fieldset className="flex flex-col px-4 pb-4">
      <label htmlFor="title" className="w-full text-4xl py-4">
        <h2>Input Title</h2>
      </label>
      <input
        type="text"
        name="title"
        placeholder="title"
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
        placeholder="health"
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
  );
};

export default CardAttributes;
