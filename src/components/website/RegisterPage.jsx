import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import RegisterForm from "./reusable/RegisterForm";

function RegisterPage() {
  return (
    <div>
      <Navigation />
      <CallToAction
        headerTxt={"Sign Up"}
        headerClass={"padding-y-added"}
        description={<p>
            Register to explore amazing features of my health vault...
        </p>}
        showBtn={false}
      />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default RegisterPage;
