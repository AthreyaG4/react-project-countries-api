import { Link } from "react-router-dom";

export default function Button({ label, to }) {
  return (
    <Link
      className="hover:bg-Grey-50 cursor-pointer rounded-md bg-white px-8 py-3 font-semibold shadow-xl"
      to={to}
    >
      {label}
    </Link>
  );
}
