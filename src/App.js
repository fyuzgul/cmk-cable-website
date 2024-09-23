import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import AdminProductDetail from "./admin/AdminProductDetail";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  B2b,
  Career,
  Contact,
  AboutUs,
  Pds,
  Iss,
  History,
  Documents,
  DopSearch,
  Products,
  Categories,
  ProductDetail,
} from "./pages";
import TabSection from "./components/sections/TabSection";
import Manager from "./admin/Manager";
import StandartManagerContext from "./admin/manager-pages-context/StandartManagerContext";
import CategoryManagerContext from "./admin/manager-pages-context/CategoryManagerContext";
import CertificateManagerContext from "./admin/manager-pages-context/CertificateManagerContext";
import CertificateTypeManagerContext from "./admin/manager-pages-context/CertificateTypeManagerContext";
import ProductManagerContext from "./admin/manager-pages-context/ProductManagerContext";
import AdminCertificateDetail from "./admin/AdminCertificateDetail";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corporate" element={<TabSection />}>
              <Route path="about-us" element={<AboutUs />} />
              <Route path="history" element={<History />} />
              <Route path="iss" element={<Iss />} />
              <Route path="pds" element={<Pds />} />
            </Route>
            <Route path="/admin">
              <Route
                path="product-manager"
                element={
                  <Manager>
                    <ProductManagerContext />
                  </Manager>
                }
              ></Route>
              <Route
                path="certificate-manager"
                element={
                  <Manager>
                    <CertificateManagerContext />
                  </Manager>
                }
              ></Route>
              <Route
                path="standart-manager"
                element={
                  <Manager>
                    <StandartManagerContext />
                  </Manager>
                }
              ></Route>
              <Route
                path="certificatetype-manager"
                element={
                  <Manager>
                    <CertificateTypeManagerContext />
                  </Manager>
                }
              ></Route>
              <Route
                path="category-manager"
                element={
                  <Manager>
                    <CategoryManagerContext />
                  </Manager>
                }
              ></Route>
            </Route>
            <Route
              path="/admin/product-manager/:id"
              element={<AdminProductDetail />}
            />
            <Route
              path="/admin/certificate-manager/:id"
              element={<AdminCertificateDetail />}
            />
            <Route path="/products" element={<Categories />} />
            <Route path="/products/:categoryId" element={<Products />} />
            <Route
              path="/products/:categoryId/:productId"
              element={<ProductDetail />}
            />
            <Route path="/documents" element={<Documents />} />
            <Route path="/dop-search" element={<DopSearch />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/b2b" element={<B2b />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
