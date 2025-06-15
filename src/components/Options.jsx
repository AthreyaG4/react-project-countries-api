import filterContext from "../store/FilterBox";
import { useContext } from "react";

export default function Options({ regions, open }) {
  const filterCtx = useContext(filterContext);
  return (
    open && (
      <ul className="absolute top-5/4 left-0 z-100 w-full rounded-sm bg-white shadow-xl">
        {regions.map((region) => {
          return (
            <li
              key={region}
              className="hover:bg-Grey-50 px-3 py-2"
              onClick={() => filterCtx.filterButtonPressed(region)}
            >
              {region}
            </li>
          );
        })}
      </ul>
    )
  );
}
