import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";

const PersonalPage = React.lazy(() => import("./routes/PersonalPage"));
const BusinessPage = React.lazy(() => import("./routes/BusinessPage"));
const ZenefitsPage = React.lazy(() => import("./routes/ZenefitsPage"));
const FeaturesPage = React.lazy(() => import("./routes/FeaturesPage"));
const PricingPage = React.lazy(() => import("./routes/PricingPage"));
import ErrorPage from "./routes/errorPage/ErrorPage";
import Loading from "./components/UI/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "personal",
        element: <PersonalPage />,
      },
      {
        path: "business",
        element: <BusinessPage />,
      },
      {
        path: "zenefits",
        element: <ZenefitsPage />,
      },
      {
        path: "features",
        element: <FeaturesPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
