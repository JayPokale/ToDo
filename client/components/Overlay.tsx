import React from "react";

interface Overlay {
  isActive: Boolean;
  setIsActive: Function;
  setTask: Function;
}

const Overlay = ({ isActive, setIsActive, setTask }: Overlay) => {
  console.log(isActive);
  return (
    <div
      className={`w-screen h-screen duration-300 ease-in-out z-10 fixed inset-0 ${
        isActive ? "bg-black opacity-50" : "bg-transparent opacity-0 -z-10"
      }`}
      onClick={() => {
        setIsActive(false);
        setTask(null);
      }}
    />
  );
};

export default Overlay;
