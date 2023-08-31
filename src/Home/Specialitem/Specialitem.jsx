import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Specialitem = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-20 mb-5">Special Recipe</h2>
            <div className="hero min-h-screen mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-photo/top-view-delicious-indonesian-bakso_23-2148933344.jpg?w=360&t=st=1693467243~exp=1693467843~hmac=1cd21e6dc12fd8d5766ad8ef4a53530b6d4af3b86aec45f0982e61d5c53ed611" alt="" className="sm:w-1/2  shadow-2xl" />
                    <div>
                        <h1 className="uppercase text-xl font-bold my-4">Indian Spices</h1>
                        <h1 className="text-5xl font-bold uppercase">Taste the Richness of Indian Culture With Our Dishes</h1>
                        <p className="py-6 text-xl">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <ul className="uppercase font-bold text-xl pl-6">
                            <li className="my-4 list-disc">Ethnic Restaurant</li>
                            <li className="my-4 list-disc">Exotic Cuisine</li>
                            <li className="my-4 list-disc">Indian Dishes </li>
                        </ul>
                        <Link to="/aboutus">
                            <button type="button" className="flex items-center justify-center  px-5 py-3 font-semibold tracking-wide  uppercase bg-[#ec5122] text-white hover:bg-[#d04419]">About us- </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialitem;