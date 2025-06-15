import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import MainHeader from "./pages/MainHeader";
import DetailPage from "./pages/Detail";
import { loader as countriesLoader } from "./components/Countries";
import { loader as detailsLoader } from "./components/CountryDetail";
import { FilterContextProvider } from "./store/FilterBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHeader></MainHeader>,
    children: [
      { path: "", element: <HomePage></HomePage>, loader: countriesLoader },
      {
        path: "/detail/:id",
        element: <DetailPage></DetailPage>,
        loader: detailsLoader,
      },
    ],
  },
]);

export default function App() {
  return (
    <FilterContextProvider>
      <RouterProvider router={router} />
    </FilterContextProvider>
  );
}
