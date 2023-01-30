import { useState } from "react";

interface InputProps {
  name: string;
}

const CardInput = ({ name }: InputProps) => {
  const [value, setValue] = useState("");
  const handleValue = (event: React.FormEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <input
      type="text"
      name="title"
      maxLength={16}
      placeholder="title"
      onChange={(e) => {
        handleValue(e);
      }}
    />
  );
};

export default CardInput;
