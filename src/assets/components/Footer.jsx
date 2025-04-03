import React from "react";

const Footer = () => {
  return (
    <div className="container-expand-lg text-center p-4" style={{ backgroundColor: "#E8E2D6" }}>
      <div className="row">
        <div className="col"></div>
        <div className="col-4">
          <p id="letter">
            <strong>購買須知</strong>
            <br />
            下單與售後服務
            <br />
            隱私權申明
          </p>
        </div>
        <div className="col-4">
          <p id="letter">
            <strong>聯絡我們</strong>
            <br />
            service@yyj.com
            <br />
            平日10:00-18:00
          </p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Footer;
