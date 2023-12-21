import { Link } from "react-router-dom";


const Card = ({ data }) => {

  const { id } = data;


  return (
    <>
      <li className="card__content">
        <Link to={`/results/${id}`}>
          <img src={data.cover} loading="lazy" alt={data.title} />
          <h3>{data.title}</h3>
        </Link>
      </li>
    </>
  );
};

export default Card;
