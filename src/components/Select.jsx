import { useState } from "react";
import downArrow from "../assets/angle-down-solid.svg";
import Options from "./Options";

export default function Select({ regions }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => {
          setOpen((prev) => {
            return !prev;
          });
        }}
        className="text-md hover:bg-Grey-50 flex w-full max-w-80 min-w-60 cursor-pointer items-center justify-between rounded-sm bg-white px-7 py-5 shadow-md has-[:hover]:bg-white"
      >
        <p className="pointer-events-none">Filter by Region</p>
        <img
          src={downArrow}
          alt="down-arrow"
          className="pointer-events-none h-3 w-3"
        />
      </div>
      <Options regions={regions} open={open}></Options>
    </div>
  );
}
