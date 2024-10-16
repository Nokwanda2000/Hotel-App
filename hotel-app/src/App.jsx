import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Landingpage from "./pages/Landingpage";
import AdminBookingsDashboardpage from "./pages/AdminBookingsDashboardpage";
import AdminBookingsmanagementpage from "./pages/AdminBookingsmanagementpage";
import AdminNavpage from "./pages/AdminNavpage";
import AdminRegisterpage from "./pages/AdminRegisterpage";
import Adminprofilepage from "./pages/Adminprofilepage";
import Adminloginpage from "./pages/Adminloginpage";
import AdminAddroompage from "./pages/AdminAddroompage";
import UserAccomodationspage from "./pages/UserAccomodationspage";
import UserBookinghistorypage from "./pages/UserBookinghistorypage";
import UserBookingpage from "./pages/UserBookingpage";
import UserCheckoutpage from "./pages/UserCheckoutpage";
import UserLoginpage from "./pages/UserLoginpage";
import UserSignupPage from "./pages/UserSignupPage";
import UserReviewnRatingpage from "./pages/UserReviewnRatingpage";
import UserProfilepage from "./pages/UserProfilepage";
import Landingpagenav from "./pages/Landingpagenav";
import Layoutpage from "./pages/Layoutpage";
import Favouritespage from "./pages/Favouritespage";
import AdminViewAllAccomodations from "./pages/AdminViewAllAccomodations";
import Footer from "./components/Footer";
import Contactpage from "./pages/contactpage";
import Login from "./pages/Login";


function App() {


  return (
    <>

<BrowserRouter>
<div className="h-screen ">
<Routes>
<Route path="/" element={<Layoutpage/>}>
          <Route index element={<Landingpage />} />
          <Route path="/UserLoginpage" element={<UserLoginpage />} />
          <Route path="Adminloginpage" element={<Adminloginpage />} />
          <Route path="UserSignupPage" element={<UserSignupPage />} />
          <Route path="UserProfilepage" element={<UserProfilepage />} />
          <Route path="UserAccomodationspage" element={<UserAccomodationspage />} />
          <Route path="UserBookinghistorypage" element={<UserBookinghistorypage />} />
          <Route path="UserBookingpage" element={<UserBookingpage />} />
          <Route path="UserCheckoutpage" element={<UserCheckoutpage />} />
          <Route path="UserReviewnRatingpage" element={<UserReviewnRatingpage />} />
          <Route path="AdminRegisterpage" element={<AdminRegisterpage />} />
          <Route path="Adminprofilepage" element={<Adminprofilepage />} />
          <Route path="AdminBookingsmanagementpage" element={<AdminBookingsmanagementpage />} />
          <Route path="AdminBookingsDashboardpage" element={<AdminBookingsDashboardpage />} />
          <Route path="AdminAddroompage" element={<AdminAddroompage />} />
          <Route path="Favouritespage" element={<Favouritespage />} />
          <Route path="AdminViewAllAccomodations" element={<AdminViewAllAccomodations />} />
          <Route path="Contactpage" element={<Contactpage/>}></Route>
          <Route path="Login" element={<Login/>}></Route>

          

        </Route>
</Routes>
<Footer/>
</div>



</BrowserRouter>
    </>
  )
}

export default App
