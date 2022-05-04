import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

import Develop from "./views/Develop/Develop";
import Design from "./views/Design/Design";
import Home from "./views/Home";
import About from "./views/About";

import Gateway from "./views/Develop/Gateway";
import SoupRestaurantDevelop from "./views/Develop/SoupRestaurant";
import AllAboutDesserts from "./views/Design/AllAboutDesserts";
import BonVoyageAndFar from "./views/Design/BonVoyageAndFar";
import IntoTheWoods from "./views/Design/IntoTheWoods";
import NeverLetMeGo from "./views/Design/NeverLetMeGo";
import SoupRestaurantDesign from "./views/Design/SoupRestaurant";

// lazy loading projects
// const Gateway = React.lazy(() => import("./views/Develop/Gateway"));
// const SoupRestaurantDevelop = React.lazy(() =>
//   import("./views/Develop/SoupRestaurant")
// );
// const AllAboutDesserts = React.lazy(() =>
//   import("./views/Design/AllAboutDesserts")
// );
// const BonVoyageAndFar = React.lazy(() =>
//   import("./views/Design/BonVoyageAndFar")
// );
// const SoupRestaurantDesign = React.lazy(() =>
//   import("./views/Design/SoupRestaurant")
// );
// const IntoTheWoods = React.lazy(() => import("./views/Design/IntoTheWoods"));
// const NeverLetMeGo = React.lazy(() => import("./views/Design/NeverLetMeGo"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Navbar */}
      <Navbar />

      {/* Works */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Develop */}
        <Route path="/develop" element={<Develop />} />
        <Route path="/develop/gateway" element={<Gateway />} />
        <Route
          path="/develop/soup-restaurant"
          element={<SoupRestaurantDevelop />}
        />

        {/* Design */}
        <Route path="/design" element={<Design />} />
        <Route
          path="/design/all-about-desserts"
          element={<AllAboutDesserts />}
        />
        <Route
          path="/design/bon-voyage-and-far"
          element={<BonVoyageAndFar />}
        />
        <Route
          path="/design/soup-restaurant"
          element={<SoupRestaurantDesign />}
        />
        <Route path="/design/into-the-woods" element={<IntoTheWoods />} />
        <Route path="/design/never-let-me-go" element={<NeverLetMeGo />} />

        {/* About */}
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Suspense>
  );
}

export default App;
