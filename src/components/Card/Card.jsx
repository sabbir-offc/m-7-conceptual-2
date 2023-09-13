import PropTypes from "prop-types";
import { toast } from 'react-toastify';
const Card = ({ actor, handleToAddActors }) => {
  const { name, image, salary, role } = actor;
  return (
    <div className=" w-80 p-5 border border-gray-300 text-center rounded-md space-y-3">
      <img src={image} alt="" className="rounded-full mx-auto" />
      <h3 className="text-2xl">{name}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
        optio!
      </p>
      <div className="flex justify-around items-center my-2">
        <h4 className="text-xl">Salary: {salary} $</h4>
        <h4 className="text-xl">{role}</h4>
      </div>
      <button
        onClick={() => handleToAddActors(actor)}
        className="btn btn-primary mt-4"
      >
        Select
      </button>
    </div>
  );
};

Card.propTypes = {
  actor: PropTypes.object,
  handleToAddActors: PropTypes.func,
};
export default Card;
