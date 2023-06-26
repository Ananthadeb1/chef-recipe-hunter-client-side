import { useState } from "react";
import Swal from "sweetalert2";

const RecipeDetails = ({ recipe }) => {
  const { name, ingredients , cooking_method} = recipe;
  const [isDisabled, setIsDisabled] = useState(false);
  const handelFavorite=()=>{
    setIsDisabled(true);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The recipe is your favorite',
        showConfirmButton: false,
        timer: 1500
      })
  }
  return (
    <div>
      <div className="card w-96  shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <h1>
            <span className="font-bold ">Ingredients: </span>
            <span>{ingredients}</span>
          </h1>
          <h1>
            <span className="font-bold ">Cooking_Method: </span>
            <span>{cooking_method}</span>
          </h1>
          <div className="card-actions justify-end ">
            <button onClick={handelFavorite} disabled={isDisabled} className="btn btn-primary">Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
