import React, { Suspense, lazy } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
const HeroSection = lazy(() => import("../components/HeroSection"));
const ServiceSection = lazy(() => import("../components/Services"));
const CompetenceSection = lazy(() => import("../components/Competences"));
import("../index.css");

export default function Home() {
  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <ServiceSection />
        <CompetenceSection />
      </Suspense>
    </div>
  );
}
