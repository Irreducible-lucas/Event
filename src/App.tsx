import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layouts/Root";
import DashboardRoot from "./layouts/DashboardRoot";
import { ErrorPage, Home } from "./component";
import {
  AccountSetting,
  AllEvent,
  AttendanceManagement,
  Billing,
  CheckIn,
  DashBoard,
} from "./pages/Admin";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="dashboard" element={<DashboardRoot />}>
          <Route index element={<DashBoard />} />
          <Route path="event" element={<AllEvent />} />
          <Route
            path="attendance-management"
            element={<AttendanceManagement />}
          />
          <Route path="check-in" element={<CheckIn />} />
          <Route path="account-setting" element={<AccountSetting />} />
          <Route path="billing" element={<Billing />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
