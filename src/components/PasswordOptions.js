import "./PasswordOptions.css";
import { useState } from "react";
import Display from "./Display";
import GeneratePassword from "./GeneratePassword";

const PasswordOptions = () => {
  const [password, setPassword] = useState(
    "Click right bottom corner to generate a password"
  );

  const [options, setOptions] = useState({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const [color, setColors] = useState({
    uppercase: "#90EC65",
    lowercase: "#90EC65",
    numbers: "#90EC65",
    symbols: "#90EC65",
  });

  const toggleOptions = (option) => {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [option]: !prevOptions[option],
      };
    });
    setColors((prevColors) => {
      return {
        ...prevColors,
        [option]: prevColors[option] === "#90EC65" ? "white" : "#90EC65",
      };
    });
  };

  const handleLengthChange = (event) => {
    setOptions({
      ...options,
      length: event.target.value,
    });
  };

  const handleClick = () => {
    const newPassword = <GeneratePassword options={options} />;
    setPassword(newPassword);
  };

  return (
    <>
      <Display
        password={password}
        color={color}
        toggleOptions={toggleOptions}
        options={options}
        handleLengthChange={handleLengthChange}
        handleClick={handleClick}
      />
    </>
  );
};

export default PasswordOptions;
