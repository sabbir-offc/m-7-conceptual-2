import PropTypes from "prop-types";
const Cart = ({ selectedActors, remaining, totalCost }) => {
  // console.log(selectedActors);
  return (
    <div>
      <h3 className="text-xl text-white">
        Selected Actor, Director And STory Writer: {selectedActors.length}
      </h3>
      <h3 className="text-xl">Remaining TK: {remaining}</h3>
      <h3 className="text-xl">Total TK: {totalCost}</h3>
      {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </div>
  );
};
Cart.propTypes = {
  selectedActors: PropTypes.array,
};
export default Cart;
