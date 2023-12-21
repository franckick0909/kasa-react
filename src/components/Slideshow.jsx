import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Slideshow = ({ images, title }) => {


  // hoock useState retourne un tableau avec 2 éléments, 1er valeur actuelle et 2eme est une fonction qui permet de modifier la valeur du 1er élément du tableau.
  const [image, setIimage] = useState(0);


  // fonction qui permet de passer à l'image suivante à chaque clic sur la flèche à droite
  // si l'image est la dernière de la liste, on revient à la première image
  // sinon on passe à l'image suivante
  const next = () => {
    setIimage(image === images.length - 1 ? 0 : image + 1);
    if (image === images.length - 1) {
      setIimage(0);
    } else {
      setIimage(image + 1);
    }
  };

  const prev = () => {
    setIimage(image === 0 ? images - 1 : image - 1);
    if (image === 0) {
      setIimage(images.length - 1);
    } else {
      setIimage(image - 1);
    }
  };

  return (
    <>
      <div className="slider">
        <div className="slideshow">
          <span>
            {image + 1}/{images.length}
          </span>
          <img
            src={images[image]}
            loading="lazy"
            alt={title}
            className="images"
          />
        </div>

     {/* Si le nombre d'images est égal à 1, on désactive les flèches */}
        <FontAwesomeIcon
          className={`btn prev ${images.length === 1 ? "disabled" : ""}`}
          icon={faChevronLeft}
          onClick={prev}
        />

        <FontAwesomeIcon
          className={`btn next ${images.length === 1 ? "disabled" : ""}`}
          icon={faChevronRight}
          onClick={next}
        />
      </div>
    </>
  );
  };
  

export default Slideshow;
