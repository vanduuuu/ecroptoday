import React from "react";
import "./Footer.css"; // Import custom CSS
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="foot container">
        <div className="row foot-area">
          <div className="col-lg-3 col-md-5 foot-1 text-center">
            <Link to="https://ecroptoday
            .co.in/">
              <img src="https://ecroptoday.azureedge.net/ecroptoday/vlogo.jpg" width="200" alt="e-CROP" />
            </Link>
            <Link
              className="techvisit"
              to="https://www.techvisit.in/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://ecroptoday.azureedge.net/ecroptoday/techvisit.webp" alt="Tech Visit" className="mt-4" width="160"/>
            </Link>
            <div className="power2 mt-3">
              <p className="fw-bold" style={{ color: "orange" }}>
                Powered by
              </p>
              <img
                src="https://webpagecdnstorage.blob.core.windows.net/precisiongrow/sap-b1.webp"
                alt="SAP B1"
                width="200"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-7 foot-2">
            <h4 className="mb-3">Welcome to e-CROPTODAY Magazine</h4>
            <p>
            e-CROPTODAY, your go-to online hub for agri-tech, explores modern
              farming's nexus. Discover innovations enhancing sustainability,
              profitability, and crop production.
            </p>
            <p className="fw-bold mb-2" style={{ color: "orange" }}>
              Follow Us On
            </p>
            <ul className="social2">
  {[
    {
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow",
      icon: "fab fa-twitter",
    },
    {
      link: "https://www.facebook.com/electroniccrop/",
      icon: "fab fa-facebook-f",
    },
    {
      link: "https://www.instagram.com/electronic_crop/",
      icon: "fab fa-instagram",
    },
    {
      link: "https://www.linkedin.com/company/electronic-crop/",
      icon: "fab fa-linkedin-in",
    },
    {
      link: "https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g",
      icon: "fab fa-youtube",
    },
    {
      link: "https://precisiongrowindia.blogspot.com/",
      icon: "fab fa-blogger",
    },
    {
      link: "https://on.soundcloud.com/BTa2Q",
      icon: "fab fa-soundcloud",
    },
  ].map((social, index) => (
    <li key={index}>
      <a href={social.link} target="_blank" rel="noreferrer">
        <i className={social.icon} style={{ fontSize: '20px',color:'white'}}></i>
      </a>
    </li>
  ))}
</ul>
          </div>
          <div className="col-lg-3 col-md-6 foot-3">
            <h4>Recent Posts</h4>
            <ul className="recent-posts">
              {[
                {
                  link: "green-gdp.php",
                  title:
                    "Understanding Green GDP And Its Implications For Sustainable Development",
                },
                {
                  link: "Agriculture-Revolution.php",
                  title:
                    "Revolutionizing Agriculture With Automated Satellite Monitoring Service",
                },
                {
                  link: "machine-learning-crop-mapping.php",
                  title:
                    "The Role Of Machine Learning In Crop Mapping: Techniques And Applications",
                },
                {
                  link: "oxygen-producing-plant.php",
                  title: "15 Highest Oxygen-Producing Plants For Your Garden",
                },
              ].map((post, index) => (
                <li key={index}>
                  <Link to={post.link} className="aaa">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 foot-4">
            <h4 className="mb-3">Get in Touch and Start Your Journey to Success</h4>
            <ul className="contact-info">
              {[
                {
                  icon: "fa-house",
                  title: "Regd. Office",
                  info: "Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi, Mumbai, Mumbai City, Maharashtra, 400703",
                },
                {
                  icon: "fa-house",
                  title: "Project Office",
                  info: "61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012",
                },
                { icon: "fa-phone", title: "Phone", info: "+91 8097626333" },
              ].map((contact, index) => (
                <li key={index} className="d-flex mb-3">
                  <div className="foot-icon">
                    <i className={`fa-solid ${contact.icon}`}></i>
                  </div>
                  <div className="foot-i-info">
                    <strong style={{ color: "orange" }}>
                      {contact.title}:
                    </strong>
                    <p>{contact.info}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center cpy-right mt-3">
        <p>
          © 2024. All Rights Reserved by{" "}
          <span style={{ color: "orange" }}>
            Precision Grow (A Unit of Tech Visit IT Pvt Ltd)
          </span>
        </p>
      </div>
    
      <Link
        to="https://wa.me/+918097626333?text=Welcome To e-CROP Magazine"
        className="whatsapp_btn circle-50"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
    </footer>
  );
};

export default Footer;
