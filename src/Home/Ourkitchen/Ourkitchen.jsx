

const Ourkitchen = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-20 mb-10">Inside Our Kitchen</h2>
            <div className="hero min-h-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://img.freepik.com/free-photo/people-cooking-professional-food-recipe-restaurant-kitchen-using-fresh-vegetables-prepare-gourmet-meal-diverse-team-cooks-making-authentic-menu-dish-gastronomy-cuisine-service_482257-43501.jpg?w=1060&t=st=1693426431~exp=1693427031~hmac=bf136f0795ed27ae9b308a8f930ddddb4ae88f02f06b6d1410039feb6c89fe80" className=" w-1/2 rounded-lg shadow-2xl" />
                    <div className="sm:pl-5">
                        <h1 className="text-5xl font-bold">Step Into our kitchen</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn underline hover:no-underline text-xl font-bold">Get Started</button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Ourkitchen;