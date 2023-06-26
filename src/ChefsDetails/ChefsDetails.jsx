import { useLoaderData } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";

const ChefsDetails = () => {
  const chef = useLoaderData();
  const {  image,bio, name, experience, number_of_recipes, likes, recipes } =
    chef;
  return (
    <>
    <h2 className='text-5xl text-center font-bold mt-10'>Chefs Details</h2>
      <div className="mx-5 mt-10  flex flex-col md:flex-row px-5 items-center">
        <img src={image} className="w-3/1.5 h-[500px]" alt="" />
        <div className=" ml-10 w-full md:w-[60%]">
        <h1>
            <span className="font-bold text-3xl ">Name: </span>
            <span className="text-2xl">{name} </span>
          </h1>
        <h1>
            <span className="font-bold text-3xl ">Bio: </span>
            <span className="text-sm">{bio} </span>
          </h1>
        <h1>
            <span className="font-bold text-3xl ">Experience: </span>
            <span className="text-2xl">{experience} years</span>
          </h1>
        <h1>
            <span className="font-bold text-3xl ">Total Recipes: </span>
            <span className="text-2xl">{number_of_recipes} </span>
          </h1>
        <h1>
            <span className="font-bold text-3xl ">Total Likes: </span>
            <span className="text-2xl">{likes} </span>
          </h1>
        </div>
      </div>
      <h2 className='text-5xl text-center font-bold mt-10 mb-5'>Recipes</h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2">
        {recipes.map((recipe) => (
          <RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>
        ))}
      </div>
    </>
  );
};

export default ChefsDetails;
