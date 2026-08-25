import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import About from "./pages/About"
import ContactUs from "./pages/ContactUs";
import Settings from "./pages/Settings"
import EnrolledCourses from "../src/components/core/Dashboard/EnrolledCourses"
import Cart from "./components/core/Dashboard/Cart";
// import { ACCOUNT_TYPE } from "./utils/constants";
import Wishlist from "./pages/Wishlist";
import DashboardPerformance from "./components/core/Dashboard/DashBoardPerformance";
import InstructorDashboard from "./pages/InstructorDashboard"



function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
        <Route path="forgot-password" element={
          <ForgotPassword />
        } />
        <Route
          path="/update-password/:token"
          element={<UpdatePassword />}
        />

        <Route
          path="/verify-email"
          element={<VerifyEmail />}
        />

        <Route
          path="wishlist"
          element={<Wishlist />}
        />



        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="enrolled-courses"
            element={<EnrolledCourses />}
          />

          <Route
            path="performance"
            element={<DashboardPerformance />}
          />


          <Route
            path="instructor"
            element={<InstructorDashboard />}
          />


          <Route
            path="wishlist"
            element={<Wishlist />}
          />

        </Route>



        <Route
          path="about"
          element={
            <About />
          }
        />

        <Route path="/contact"
          element={
            <ContactUs />
          }
        />


      </Routes>
    </div>
  );
}

export default App;