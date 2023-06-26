import { useLoaderData } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";

const ChefsDetails = () => {
  const chef = useLoaderData();
  const { id,image, name, experience, number_of_recipes, likes, recipes } = chef;
  return (
    <>
    <img src={image} alt="" />
      <h1>{name}</h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2">
          {recipes.map(recipe => 
            <RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>
          )}
        </div>
    </>
  );
};

export default ChefsDetails;
