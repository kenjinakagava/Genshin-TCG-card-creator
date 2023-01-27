import { useContext, useEffect, useState } from "react";
import cardDataContext from "../../contexts/cardDataContext";
import CardInput from "./CardInput";

const CardAttributes = () => {
  const [titleValue, setTitleValue] = useState("");
  const [imgUrlValue, setImgUrlValue] = useState("");
  const [healthValue, setHealthValue] = useState("");

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
  useEffect(() => {
    setCardData({ card: { ...card, title: titleValue } });
  }, [titleValue]);

  useEffect(() => {
    setCardData({ card: { ...card, imgUrl: imgUrlValue } });
  }, [imgUrlValue]);

  useEffect(() => {
    setCardData({ card: { ...card, health: healthValue } });
  }, [healthValue]);
  return (
    <fieldset className="pl-4">
      <label htmlFor="title" className="w-full text-4xl py-4">
        <h2>Input Title</h2>
      </label>
      <input
        type="text"
        name="title"
        onChange={(e) => {
          handleTitleValue(e);
        }}
      />
      <label htmlFor="health" className="w-full text-4xl py-4">
        <h2>Character Health</h2>
      </label>
      <input
        type="text"
        name="health"
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
        onChange={(e) => {
          handleImgUrlValue(e);
        }}
      />
    </fieldset>
  );
};

export default CardAttributes;
