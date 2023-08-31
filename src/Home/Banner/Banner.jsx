


const Banner = () => {
    
    return (
        <div className="bg-white pb-20 mb:pb-0">
            <div className=' flex flex-col lg:flex-row px-5 items-center '>
                <img src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=740" className="md:w-3/4 " alt="" />
                <div className=' w-full text-center'>
                    <h2 className='text-2xl lg:text-6xl font-bold'> We provide the best chefs in the world </h2>{/* TODO: TAGLINE SHOULD CHANGE */}
                </div>
            </div>
        </div>
    );
};

export default Banner;