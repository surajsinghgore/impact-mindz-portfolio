import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/Home/HomePage";
import MainPageLayout from "../layout/MainPageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainPageLayout>
        <HomePage />
      </MainPageLayout>
    ),
  },

  //   {
  //     path: "/dashboard",
  //     // element: <AuthLayout><VerifyOtp /></AuthLayout>,
  //     children: [
  //       {
  //         path: "home",
  //         element: (
  //           <DashboardLayout>
  //             <Dashboard />
  //           </DashboardLayout>
  //         ),
  //       },
  //     ],
  //   },
]);

export default router;
