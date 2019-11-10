import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/maverov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="http://twitter.com/maverov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://instagram.com/maverov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/maverov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="mailto:maverov@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
            <p>*Credit to Unsplash for their API</p>
            <p className="h6">
              &copy;
              {new Date().getFullYear()} | Developed by{" "}
              <a
                href="http://linkedin.com/in/maverov"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hristiyan Maverov
              </a>
              .
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Footer;
