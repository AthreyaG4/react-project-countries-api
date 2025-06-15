import { Outlet } from "react-router-dom";
import moonLightMode from "../assets/moon-regular.svg";

export default function MainHeader() {
  return (
    <>
      <header>
        <div className="mx-auto flex w-9/10 max-w-200 justify-between py-7 lg:max-w-300 xl:max-w-400">
          <h1 className="text-[16px] font-extrabold md:text-xl lg:text-2xl">
            Where in the world?
          </h1>
          <div className="flex cursor-pointer items-start gap-2">
            <img
              src={moonLightMode}
              alt="moon"
              className="h-5 w-5 lg:h-7 lg:w-7"
            />
            <p className="text-[14px] lg:text-xl">Dark Mode</p>
          </div>
        </div>
      </header>
      <main className="bg-Grey-50 flex-grow pt-8">
        <Outlet></Outlet>
      </main>
    </>
  );
}
