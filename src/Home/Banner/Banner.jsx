import { NavLink } from "react-router-dom";


const Banner = () => {
    
    return (
        <div >
            <div className='mx-5 flex flex-col md:flex-row px-5 items-center'>
                <img src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=740" className="w-3/1.5" alt="" />
                <div className=' w-full md:w-[60%]'>
                    <h2 className='text-2xl md:text-6xl font-bold'> Lets hirell </h2>{/* TODO: TAGLINE SHOULD CHANGE */}
                    <NavLink to='/courses'> {/* TODO: LINK SHOULD REPLACE */}
                        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100  text-white dark:text-gray-100 bg-[#4DB6D2] hover:bg-[#207f99] mt-5">Start hire</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;