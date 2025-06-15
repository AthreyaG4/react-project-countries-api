import { Link } from "react-router-dom";
import Field from "./Field";

export default function Country({
  img,
  name,
  population,
  region,
  capital,
  code,
}) {
  return (
    <Link
      className="hover:bg-Grey-50 w-full cursor-pointer rounded-md bg-white shadow-xl"
      to={`/detail/${code}`}
    >
      <div
        className="h-60 w-full rounded-t-md bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="text-md rounded-b-md p-7">
        <h2 className="mb-3 text-xl font-black">{name}</h2>
        <Field fieldLabel={"Population"} fieldValue={population}></Field>
        <Field fieldLabel={"Region"} fieldValue={region}></Field>
        <Field fieldLabel={"Capital"} fieldValue={capital}></Field>
      </div>
    </Link>
  );
}
