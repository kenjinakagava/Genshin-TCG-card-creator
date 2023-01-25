import { useState } from "react";
import ElementToggler from "./ElementToggler";

const CreateCard = () => {
  const [element, setElement] = useState("");
  // onsubmit run api call to post card
  return (
    <form action="#">
      <ElementToggler element={element} setElement={setElement} />
    </form>
  );
};

export default CreateCard;
