import Country from "./Country";
import Select from "./Select";
import { useLoaderData } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import FilterContext from "../store/FilterBox";

export default function Countries() {
  let countries = useLoaderData();
  const regions = [...new Set(countries.map((country) => country.region))];

  const [searchField, setSearchField] = useState("");
  const { filterStatus } = useContext(FilterContext);

  const regionFilteredCountries = useMemo(() => {
    if (filterStatus !== "") {
      return countries.filter((country) => country.region == filterStatus);
    } else {
      return countries;
    }
  }, [countries, filterStatus]);

  const finalFilteredCountries = useMemo(() => {
    return regionFilteredCountries.filter((country) =>
      country.name.toLowerCase().startsWith(searchField.toLowerCase()),
    );
  }, [regionFilteredCountries, searchField]);

  return (
    <div className="mx-auto mb-8 w-9/10 max-w-100 md:max-w-200 lg:max-w-300 xl:max-w-400">
      <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row">
        <input
          placeholder="Search for a country..."
          className="block w-full max-w-150 rounded-sm bg-white px-7 py-5 shadow-xl"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        ></input>
        <Select regions={regions}></Select>
      </div>
      <div className="bg-Grey-50 grid grid-cols-1 gap-8 sm:max-md:mx-auto sm:max-md:max-w-100 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-12 2xl:gap-15">
        {finalFilteredCountries &&
          finalFilteredCountries.map((country) => {
            return (
              <Country
                key={country.alpha3Code}
                img={country.flags.svg}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                code={country.alpha3Code}
              ></Country>
            );
          })}
      </div>
    </div>
  );
}

export async function loader() {
  console.log("loader running");
  const response = await fetch("/data.json");
  if (!response.ok) {
    //
  }
  return response;
}
