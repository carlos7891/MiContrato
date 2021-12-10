import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-indigo-800 pt-6 pb-2 text-white mt-20">
      <section className="">
        <a
          className=""
          href="https://www.facebook.com/carlos.a.espinosa"
          role="button"
        >
          <i className="fab fa-facebook"></i>
        </a>

        <a
          className=""
          href="https://contacts.google.com/person/c5350580638821619309?hl=es-419"
          role="button"
        >
          <i className="fab fa-google"></i>
        </a>

        <a
          className=""
          href="https://www.instagram.com/carlos07081/"
          role="button"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          className=""
          href="https://www.linkedin.com/in/carlos-espinosa-39b329195/"
          role="button"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a className="" href="https://github.com/carlos7891" role="button">
          <i className="fab fa-github"></i>
        </a>
      </section>
      <div className="text-center text-white p-2 bg-dark">
        © 2021 Copyright: Carlos Andres Espinosa
      </div>
    </footer>
  );
};

export default Footer;
