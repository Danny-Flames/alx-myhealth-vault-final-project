import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import RegisterForm from "./reusable/RegisterForm";
import ContactUs from "./ContactUs";

function ContactPage() {
  return (
    <div>
      <Navigation />
      <CallToAction
        headerTxt={"Contact Us"}
        headerClass={"padding-y-added"}
        description={<p>Got any enquiries? Fill the form below...</p>}
        showBtn={false}
      />
      <ContactUs showFirstSection={false} />
      <Footer />
    </div>
  );
}

export default ContactPage;
