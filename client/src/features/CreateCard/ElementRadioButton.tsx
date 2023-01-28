import CardDataProps from "../../interfaces/cardData";

interface ElementRadioButtonProps extends CardDataProps {
  setElement: string;
}

const ElementRadioButton = ({
  cardData,
  setCardData,
  setElement,
}: ElementRadioButtonProps) => {
  return (
    <input
      type="radio"
      name="element"
      value={setElement}
      data-testid="element"
      onChange={() =>
        setCardData({ cardData: { ...cardData, element: setElement } })
      }
    />
  );
};

export default ElementRadioButton;
