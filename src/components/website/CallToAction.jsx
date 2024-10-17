import React from "react";

function CallToAction({
  headerTxt,
  description,
  showBtn = true,
  showDesc = true,
  btnText,
  btnAction,
  headerClass
}) {
  return (
    <section id="call-to-action">
      <div className="container text-center" data-aos="zoom-in">
        <h3 className={headerClass || ''}>{headerTxt || "Call To Action"}</h3>
        {showDesc && (
          <div>
            {description || (
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            )}
          </div>
        )}
        {showBtn && (
          <a className="cta-btn" onClick={btnAction ? () => btnAction() : console.log('Heyyy...')}>
            {btnText || "Call To Action"}
          </a>
        )}
      </div>
    </section>
  );
}

export default CallToAction;
