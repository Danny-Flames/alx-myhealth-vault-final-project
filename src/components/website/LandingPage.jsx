import React from "react";
import Navigation from "./Navigation";
import FeaturedServices from "./FeaturedServices";
import AboutUs from "./AboutUs";
import Services from "./Services";
import CallToAction from "./CallToAction";
import Skills from "./Skills";
import Facts from "./Facts";
import Portfolio from "./Portfolio";
import Clients from "./Clients";
import Testimonials from "./Testimonials";
import VaultTeam from "./VaultTeam";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Hero from "./Hero";

function LandingPage() {
  return (
    <div className="temp-centered">
      <div>
        {/* Navigation/Hero - Starts  */}
        <Navigation />
        <Hero />
        {/* Navigation/Hero - Ends  */}

        {/* Main content - Starts  */}
        <main id="main">
          <FeaturedServices />
          <AboutUs />
          <Services />
          <CallToAction />
          {/* <Facts /> */}
          <Portfolio />
          {/* <Clients /> */}
          <Testimonials />
          <VaultTeam />
          <ContactUs />
        </main>
        {/* Main content - Ends  */}

        {/* Footer - Starts  */}
        <Footer />
        {/* Footer - Ends  */}
      </div>
    </div>
  );
}

export default LandingPage;
