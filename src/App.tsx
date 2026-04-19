/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import Benefits from "./components/Benefits";
import StockStatus from "./components/StockStatus";
import PurchaseSection from "./components/PurchaseSection";
import Accordion from "./components/Accordion";
import PromoMarquee from "./components/PromoMarquee";
import CountdownBanner from "./components/CountdownBanner";
import ComparisonTable from "./components/ComparisonTable";
import TrustpilotSection from "./components/TrustpilotSection";
import ProductDetails from "./components/ProductDetails";
import VideoSection from "./components/VideoSection";
import Newsletter from "./components/Newsletter";
import { MOCK_PRODUCT } from "./types";

export default function App() {
  return (
    <div className="min-h-screen bg-white max-w-lg mx-auto shadow-2xl">
      {/* 1. Header */}
      <Header />
      
      {/* 8. Separador Promocional Superior */}
      <PromoMarquee />

      <main>
        {/* 2. Galería de producto */}
        <ProductGallery images={MOCK_PRODUCT.images} />

        {/* 3. Información del producto */}
        <ProductInfo 
          name={MOCK_PRODUCT.name} 
        />

        {/* 4. Beneficios */}
        <Benefits benefits={MOCK_PRODUCT.benefits} />

        {/* 5. Estado de stock */}
        <StockStatus 
          status={MOCK_PRODUCT.stockStatus} 
        />

        {/* 6. Compra */}
        <PurchaseSection 
          price={MOCK_PRODUCT.price} 
          currency={MOCK_PRODUCT.currency} 
        />

        {/* 7. Información desplegable (FAQ) */}
        <Accordion />

        {/* 9. Banner de Urgencia Estático */}
        <CountdownBanner />

        {/* 10. Tabla de Comparación */}
        <ComparisonTable />

        {/* 11. Trustpilot Reviews */}
        <TrustpilotSection />

        {/* 12. Detalles del Producto */}
        <ProductDetails />

        {/* 13. Videos del Producto */}
        <VideoSection />

        {/* 14. Newsletter */}
        <Newsletter />
      </main>
    </div>
  );
}

