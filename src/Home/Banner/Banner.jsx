


const Banner = () => {
    
    return (
        <div className="bg-white">
            <div className='mx-5 flex flex-col md:flex-row px-5 items-center'>
                <img src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=740" className="w-3/1.5" alt="" />
                <div className=' w-full md:w-[60%]'>
                    <h2 className='text-2xl md:text-6xl font-bold'> We provide the best chefs in the world </h2>{/* TODO: TAGLINE SHOULD CHANGE */}
                </div>
            </div>
        </div>
    );
};

export default Banner;