import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="block block--dark footer">
        <div className="container grid footer__sections">
          <section className="collapsible collapsible--expanded footer__section">
            <div className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">Services</h2>
            </div>
            <div className="collapsible__content ">
              <ul class="list">
                <li>
                  <a href="#">Peer Help</a>
                </li>
                <li>
                  <a href="#">Important highlights</a>
                </li>
                <li>
                  <a href="#">information</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
