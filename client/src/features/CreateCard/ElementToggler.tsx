import * as icon from "../../icons";

interface ElementTogglerProps {
  element: string;
  setElement: React.Dispatch<React.SetStateAction<string>>;
}

const ElementToggler = ({ element, setElement }: ElementTogglerProps) => {
  return (
    <fieldset className="flex gap-4 justify-center items-center md:flex-row flex-wrap [&>label>input]:absolute [&>label>input]:left-[-9999px] [&>label>img]:w-[3rem] [&>label>img]:h-[3rem] [&>label]:cursor-pointer">
      <legend className="w-full text-center text-6xl pb-4">
        {element ? (
          <h2 className="capitalize" data-testid="element-descriptor">
            {element}
          </h2>
        ) : (
          <h2>Choose Character Element</h2>
        )}
      </legend>
      <label>
        <input
          type="radio"
          name="element"
          value="pyro"
          data-testid="element"
          onChange={() => setElement("pyro")}
        />
        <img
          src={element === "pyro" ? icon.PyroActive : icon.Pyro}
          alt="pyro"
          data-testid="element-image"
        />
      </label>
      <label>
        <input
          type="radio"
          name="element"
          value="hydro"
          data-testid="element"
          onChange={() => setElement("hydro")}
        />{" "}
        <img
          src={element === "hydro" ? icon.HydroActive : icon.Hydro}
          alt="hydro"
          data-testid="element-image"
        />
      </label>
      <label>
        <input
          type="radio"
          name="element"
          value="anemo"
          data-testid="element"
          onChange={() => setElement("anemo")}
        />{" "}
        <img
          src={element === "anemo" ? icon.AnemoActive : icon.Anemo}
          alt="anemo"
          data-testid="element-image"
        />
      </label>
      <label>
        <input
          type="radio"
          name="element"
          value="electro"
          data-testid="element"
          onChange={() => setElement("electro")}
        />{" "}
        <img
          src={element === "electro" ? icon.ElectroActive : icon.Electro}
          alt="electro"
          data-testid="element-image"
        />
      </label>
      <label>
        <input
          type="radio"
          name="element"
          value="dendro"
          data-testid="element"
          onChange={() => setElement("dendro")}
        />{" "}
        <img
          src={element === "dendro" ? icon.DendroActive : icon.Dendro}
          alt="dendro"
          data-testid="element-image"
        />
      </label>
      <label>
        <input
          type="radio"
          name="element"
          value="cryo"
          data-testid="element"
          onChange={() => setElement("cryo")}
        />{" "}
        <img
          src={element === "cryo" ? icon.CryoActive : icon.Cryo}
          alt="cryo"
          data-testid="element-image"
        />
      </label>
      <label>
        <input
          type="radio"
          name="element"
          value="geo"
          data-testid="element"
          onChange={() => setElement("geo")}
        />{" "}
        <img
          src={element === "geo" ? icon.GeoActive : icon.Geo}
          alt="geo"
          data-testid="element-image"
        />
      </label>
    </fieldset>
  );
};

export default ElementToggler;
