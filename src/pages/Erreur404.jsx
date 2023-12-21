import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import React from "react";

const Erreur404 = () => {
  return (
    <>
      <div className="block-container">
        <Navigation />

        <div className="erreur-content">
          <h1>404</h1>
          <h3>Oups! La page que vous demandez {"n'existe"} pas.</h3>

          <Link to="/">
            <p>Retourner sur la page {"d'accueil"}</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Erreur404;
