import React, { lazy , Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import RestarantMenu from "./components/RestarantMenu.jsx";
// import Instamart from "./components/instamart.jsx";
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom"; 
import Profile from "./components/Profile.jsx";
import ProfileClass from "./components/ProfileClass.jsx";
import Shimmer from "./components/Shimmer.jsx";
import UserContext from "./utils/UserContext.jsx";

const Instamart = lazy(()=>import("./components/instamart"))

const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Sudipta Ghosh",
    email:"sudipta@gmail.com",
  });
  return (
    <UserContext.Provider value={{user:user,setUser: setUser}}>
      <Header />
      {/* <Body /> */}
      <Outlet/>
      <Footer />
    </UserContext.Provider> 
  );
};
const appRouter= createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <AppLayout/>,
    children:[
      {
        path: "/about",
        exact: true,
        element: <About/>,
        children:[
          {
            path: "profile",
            exact: true,
            element: <ProfileClass/>,
          }
        ]
      },
      {
        path: "/",
        exact: true,
        element: <Body/>,
      },
      {
        path: "/restaurant/:id",
        exact: true,
        element: <RestarantMenu/>
      },
      {
        path: "/instamart",
        exact: true,
        element: <Suspense fallback={<Shimmer/>}>

          <Instamart/>
        </Suspense>
      }
    ]
  },
])
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
