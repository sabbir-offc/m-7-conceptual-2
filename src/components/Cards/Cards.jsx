import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";
const Cards = ({ handleToAddActors }) => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {actors.map((actor) => (
          <Card
            key={actor.id}
            actor={actor}
            handleToAddActors={handleToAddActors}
          ></Card>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  handleToAddActors: PropTypes.func,
};
export default Cards;
