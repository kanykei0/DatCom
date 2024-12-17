import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PATHS } from "utils/constants/Constants";
import {
  Countries,
  CountryDetailed,
  Home,
  NotFound,
  Reviews,
} from "pages/index";
import { Form } from "pages/Form/Form";
import { Students } from "pages/Students/Students";
import { Universities } from "pages/Universities/Universities";
import { DetailedUniversity } from "pages/Universities/components/DetailedUniversity/DetailedUniversity";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: PATHS.home,
        element: <Home />,
      },
      {
        path: PATHS.reviews,
        element: <Reviews />,
      },
      {
        path: PATHS.form,
        element: <Form />,
      },
      {
        path: PATHS.students,
        element: <Students />,
      },
      {
        path: PATHS.universities,
        element: <Universities />,
      },
      {
        path: PATHS.detailedUniversity,
        element: <DetailedUniversity />,
      },
      {
        path: PATHS.countries,
        element: <Countries />,
      },
      {
        path: PATHS.detailedCountry,
        element: <CountryDetailed />,
      },
      {
        path: PATHS.notFound,
        element: <NotFound />,
      },
    ],
  },
]);
