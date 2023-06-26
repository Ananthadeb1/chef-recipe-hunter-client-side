import { useContext } from "react";
import Banner from "../Banner/Banner";
import ChefsCard from "../ChefsCard/ChefsCard";
import { AuthContext } from "../../Aurhentications/AuthProvier/AuthProvider";

const Home = () => {
    const { chefs } = useContext(AuthContext);
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='text-5xl font-bold mt-10'>Our Popular Chefs</h2>
                <div className='container flex flex-col justify-center p-4 w-[90%] mx-auto'>
                    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2'>
                        {
                            chefs.map(chef => <ChefsCard key={chef.id} chef={chef}></ChefsCard>)
                        }
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Home;