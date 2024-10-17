import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import LoginForm from "./reusable/LoginForm";

function LoginPage() {
  return (
    <div>
      <Navigation />
      <CallToAction
        headerTxt={"User Login"}
        headerClass={"padding-y-added"}
        description={<p>
            Login to explore all features of my health vault...
        </p>}
        showBtn={false}
      />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;
