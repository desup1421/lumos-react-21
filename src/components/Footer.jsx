import React from "react";

const Footer = () => {
  return (
    <footer className="footer container fixed-bottom d-flex justify-content-between align-items-center">
      <p className="m-0">Copyright &copy; 2024 | All rights reserved.</p>
      <div className="icons d-flex gap-2">
        <i className="bi bi-github"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
      </div>
    </footer>
  );
};

export default Footer;
