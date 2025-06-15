import { createContext, useEffect, useState } from "react";

const FilterContext = createContext({
  filterStatus: "",
  filterButtonPressed: () => {},
});

export default FilterContext;

export function FilterContextProvider({ children }) {
  const [filterOn, setFilterOn] = useState("");

  function filterButtonPressed(pressedFilterOn) {
    setFilterOn(pressedFilterOn);
  }

  const filterCtx = {
    filterStatus: filterOn,
    filterButtonPressed: filterButtonPressed,
  };

  return (
    <FilterContext.Provider value={filterCtx}>
      {children}
    </FilterContext.Provider>
  );
}
