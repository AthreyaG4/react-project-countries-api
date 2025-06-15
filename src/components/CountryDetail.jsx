import Field from "./Field";
import Button from "./Button";
import { useLoaderData } from "react-router-dom";

export default function CountryDetail() {
  const { data, lookUp } = useLoaderData();
  return (
    <div className="mx-auto w-9/10">
      <Button label={"Back"} to={".."}></Button>
      <div className="mt-15 lg:flex lg:items-center xl:justify-between xl:gap-20">
        <div
          className="mx-auto aspect-[3/2] w-full max-w-100 bg-cover bg-center bg-no-repeat lg:m-0 xl:w-1/2 xl:max-w-screen"
          style={{ backgroundImage: `url(${data[0].flags.svg})` }}
        ></div>
        <div className="text-md mx-auto my-15 w-full lg:w-1/2">
          <h1 className="mb-7 text-2xl font-extrabold 2xl:text-3xl">
            {data[0].name}
          </h1>
          <div className="mb-8 md:flex 2xl:text-xl">
            <div className="mb-12 w-1/2">
              <Field
                fieldLabel={"Native Name"}
                fieldValue={data[0].nativeName}
              ></Field>
              <Field
                fieldLabel={"Population"}
                fieldValue={data[0].population}
              ></Field>
              <Field fieldLabel={"Region"} fieldValue={data[0].region}></Field>
              <Field
                fieldLabel={"Sub Region"}
                fieldValue={data[0].subregion}
              ></Field>
              <Field
                fieldLabel={"Capital"}
                fieldValue={data[0].capital}
              ></Field>
            </div>
            <div className="w-1/2">
              <Field
                fieldLabel={"Top Level Domain"}
                fieldValue={data[0].topLevelDomain}
              ></Field>
              <Field
                fieldLabel={"Currencies"}
                fieldValue={data[0].currencies[0].name}
              ></Field>
              <Field
                fieldLabel={"Languages"}
                fieldValue={data[0].languages.reduce(
                  (acc, language, currentIndex) => {
                    acc += language.name;
                    if (currentIndex < data[0].languages.length - 1) {
                      acc += ", ";
                    }
                    return acc;
                  },
                  "",
                )}
              ></Field>
            </div>
          </div>
          <div className="">
            <span className="mb-5 block text-xl font-bold 2xl:text-2xl">
              Border Countries:
            </span>
            <div className="text-md flex w-full flex-wrap gap-5">
              {data[0].borders.map((country) => {
                return (
                  <Button
                    label={lookUp[country]}
                    to={`/detail/${country}`}
                    key={country}
                  ></Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  console.log("details loader running");
  const response = await fetch("/data.json");
  if (!response.ok) {
    //
  } else {
    let data = await response.json();
    let lookUp = {};
    data.forEach((country) => {
      lookUp[country.alpha3Code] = country.name;
    });

    data = data.filter((country) => country.alpha3Code === params.id);
    return { data, lookUp };
  }
  return;
}
