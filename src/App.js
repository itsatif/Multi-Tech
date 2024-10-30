import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/pages/Home";
import Footer from "./Component/pages/Footer";
// import Nav from "./Component/pages/Nav";
import Ourproduct from "./Component/pages/Ourproduct";
import ProductDetails from "./Component/pages/ProductDetails";
import QualityAssurance from "./Component/pages/QualityAssurance";
import AboutUs from "./Component/pages/AboutUs";
import Contactus from "./Component/pages/Contactus";
import WireStripper from "./Component/pages/WireStripper";
import ScrewDriver from "./Component/pages/ScrewDriver";
import CableCutter from "./Component/pages/CableCutter";
import Pilers from "./Component/pages/Pilers";
import GardenTools from "./Component/pages/GardenTools";
import OnTop from "./Component/SubPages/OnTop";
import HexKey from "./Component/pages/HexKey";
import StainLessSteelTools from "./Component/pages/StainlessSteelTools";
import Nipper from "./Component/pages/Nipper";
import MISCELLANEOUSTOOLS from "./Component/pages/MISCELLANEOUSTOOLS";
import News from "./Component/pages/News";
import Screwdriverproductdetail from "./Component/pages/Screwdriverproductdetail";
import ImageGallery from "./Component/SubPages/ImageGallery";
import ImageGallery2 from "./Component/SubPages/ImageGallery2";
import PowerBits from "./Component/pages/PowerBits";
import Miscellaneoustoolsdetails from "./Component/pages/Miscellaneoustoolsdetails";
import Blogs from "./Component/pages/Blogs";
import Blog1 from "./Component/pages/Blog1";
import Pilersnosepiler from "./Component/pages/Pilersnosepiler";
import Blog2 from "./Component/pages/Blog2";
import Blog3 from "./Component/pages/Blog3";
import QuickFixMultiTool from "./Component/pages/QuickFixMultiTool";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Ourproduct />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route
            path="/screwdriver-productdetail/:URLname"
            element={<Screwdriverproductdetail />}
          />
          <Route
            path="/hexkeys-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/gardentools-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/stainlesssteeltools-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/nipper-micro&shears-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/piler-nose-piler-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/cablecutters-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/powerbits-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/wirestripper-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/quickfix-multitool-productdetail/:URLname"
            element={<ProductDetails />}
          />
          <Route
            path="/Miscellaneous-tools-productdetails/:URLname"
            element={<Miscellaneoustoolsdetails />}
          />
          <Route path="/contactus" element={<Contactus />} />

          <Route path="/gardentools" element={<GardenTools />} />
          <Route
            path="/stainlesssteeltools"
            element={<StainLessSteelTools />}
          />
          <Route path="/nipper-micro&shears" element={<Nipper />} />
          <Route path="/wirestripper" element={<WireStripper />} />
          <Route path="/screwdrivers" element={<ScrewDriver />} />
          <Route path="/hexkeys" element={<HexKey />} />
          <Route path="/cablecutters" element={<CableCutter />} />
          <Route path="/pilers-nose-pilers" element={<Pilers />} />
          <Route path="/pilers" element={<Pilersnosepiler />} />
          <Route path="/miscellaneous-tools" element={<MISCELLANEOUSTOOLS />} />
          <Route path="/quickfix-multitools" element={<QuickFixMultiTool />} />
          <Route path="/PowerBits" element={<PowerBits />} />
          <Route path="/qualityassurance" element={<QualityAssurance />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/chandigarevent" element={<ImageGallery />} />
          <Route path="/kisanagrievent" element={<ImageGallery2 />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/Best-Hedge-Shear" element={<Blog3 />} />
          <Route
            path="*"
            element={
              <h1 className="py-32 text-center text-5xl font-kepler font-bold">
                Page not found &#128565;
              </h1>
            }
          />
        </Routes>
        <OnTop />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
