import { useContext } from "react";
import Banner from "../Banner/Banner";
import ChefsCard from "../ChefsCard/ChefsCard";
import { AuthContext } from "../../Aurhentications/AuthProvier/AuthProvider";
import AboutUs from "../../AboutUs/AboutUs";
import Ourkitchen from "../Ourkitchen/Ourkitchen";
import Clientsays from "../Clientsays/Clientsays";
import Bestrecipies from "../Bestrecipies/Bestrecipies";
import Specialitem from "../Specialitem/Specialitem";

const Home = () => {
    const { chefs } = useContext(AuthContext);
    return (
        <div>
            <Banner></Banner>
            <div className="w-auto sm:mx-28">
                <Ourkitchen></Ourkitchen>
                <div>
                    <h2 className='text-5xl text-center font-bold my-10'>Our Popular Chefs</h2>
                    <div className='container flex flex-col justify-center p-4 w-[100%] mx-auto'>
                        <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2'>
                            {
                                chefs.map(chef => <ChefsCard key={chef.id} chef={chef}></ChefsCard>)
                            }
                        </div>
                    </div>
                </div>
                
            <Specialitem></Specialitem>
            <Bestrecipies></Bestrecipies>
            </div>
            <Clientsays></Clientsays>
            <div className="w-auto sm:mx-28">
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;