import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
