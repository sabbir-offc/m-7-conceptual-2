import { useState } from "react";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { toast } from 'react-toastify';

import 'sweetalert2/src/sweetalert2.scss'

function App() {
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleToAddActors = (actor) => {
    const isExist = selectedActors.find((item) => item.id === actor.id);
    let cost = actor.salary;
    if (isExist) {
      Swal.fire({
        title: 'Error!',
        text: 'you already booked this person',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    } else {
      selectedActors.forEach((item) => {
        cost += item.salary;
      });
      
      const totalRemaining = 20000 - cost;
      if (cost > 20000) {
       return toast.warning('Tor sob taka sesh');
      }
      setTotalCost(cost);
      setRemaining(totalRemaining);
      setSelectedActors([...selectedActors, actor]);
    }
  };
  // console.log(selectedActors);
  return (
    <div className="flex p-5 gap-4">
      <Cards handleToAddActors={handleToAddActors}></Cards>
      <Cart
        selectedActors={selectedActors}
        remaining={remaining}
        totalCost={totalCost}
      ></Cart>
    </div>
  );
}

export default App;
