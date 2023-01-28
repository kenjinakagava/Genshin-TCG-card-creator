import * as icon from "../../icons";
import ElementRadioButton from "./ElementRadioButton";
import CardDataProps from "../../interfaces/cardData";

const ElementToggler = ({ cardData, setCardData }: CardDataProps) => {
  return (
    <fieldset className="flex gap-4 py-4 justify-center items-center md:flex-row flex-wrap [&>label>input]:absolute [&>label>input]:left-[-9999px] [&>label>img]:w-[3rem] [&>label>img]:h-[3rem] [&>label]:cursor-pointer">
      <legend className="w-full text-center text-6xl py-4">
        {cardData.element ? (
          <h2 className="capitalize" data-testid="element-descriptor">
            {cardData.element}
          </h2>
        ) : (
          <h2>Choose Element</h2>
        )}
      </legend>
      <label>
        <ElementRadioButton
          setElement={"pyro"}
          setCardData={setCardData}
          cardData={cardData}
        />
        <img
          src={cardData.element === "pyro" ? icon.PyroActive : icon.Pyro}
          alt="pyro"
          data-testid="element-image"
        />
      </label>
      <label>
        <ElementRadioButton
          setElement={"hydro"}
          setCardData={setCardData}
          cardData={cardData}
        />
        <img
          src={cardData.element === "hydro" ? icon.HydroActive : icon.Hydro}
          alt="hydro"
          data-testid="element-image"
        />
      </label>
      <label>
        <ElementRadioButton
          setElement={"anemo"}
          setCardData={setCardData}
          cardData={cardData}
        />
        <img
          src={cardData.element === "anemo" ? icon.AnemoActive : icon.Anemo}
          alt="anemo"
          data-testid="element-image"
        />
      </label>
      <label>
        <ElementRadioButton
          setElement={"electro"}
          setCardData={setCardData}
          cardData={cardData}
        />
        <img
          src={
            cardData.element === "electro" ? icon.ElectroActive : icon.Electro
          }
          alt="electro"
          data-testid="element-image"
        />
      </label>
      <label>
        <ElementRadioButton
          setElement={"dendro"}
          setCardData={setCardData}
          cardData={cardData}
        />
        <img
          src={cardData.element === "dendro" ? icon.DendroActive : icon.Dendro}
          alt="dendro"
          data-testid="element-image"
        />
      </label>
      <label>
        <ElementRadioButton
          setElement={"cryo"}
          setCardData={setCardData}
          cardData={cardData}
        />
        <img
          src={cardData.element === "cryo" ? icon.CryoActive : icon.Cryo}
          alt="cryo"
          data-testid="element-image"
        />
      </label>
      <label>
        <ElementRadioButton
          setElement={"geo"}
          setCardData={setCardData}
          cardData={cardData}
        />
        <img
          src={cardData.element === "geo" ? icon.GeoActive : icon.Geo}
          alt="geo"
          data-testid="element-image"
        />
      </label>
    </fieldset>
  );
};

export default ElementToggler;
