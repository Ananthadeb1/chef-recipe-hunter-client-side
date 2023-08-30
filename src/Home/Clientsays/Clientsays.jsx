

const Clientsays = () => {
    return (
        <>
            <h2 className="text-5xl text-center font-bold mt-20 mb-5">What Our Clint Says</h2>
            <div className="sm:flex mb-10">
                <div className="sm:w-1/2 ">
                    <img className=" h-full" src="https://img.freepik.com/free-photo/chef-working-together-professional-kitchen_23-2149728005.jpg?w=996&t=st=1693431430~exp=1693432030~hmac=169a7adcd62a3525e943fce3265d944c5dccb19ac18683c7df63fbde2d92158e" alt="" />
                </div>
                <div className="sm:w-1/2 text-center bg-[#FFB936]">
                    <div className="carousel w-full  h-full flex  items-center">
                        <div id="item1" className="carousel-item w-full ">
                            <div className="text-[#0C0F26] p-20">
                                <p className="font-bold text-xl sm:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore ea officiis aperiam, et tenetur earum provident qui beatae illo labore autem hic neque, eum suscipit perferendis sed reprehenderit similique!</p>
                                <br />
                                <br />
                                <h1 className="font-bold text-lg uppercase">Amy Walker</h1>
                                <p>Clint</p>
                            </div>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <div className="text-[#0C0F26] p-20">
                                <p className="font-bold text-xl sm:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore ea officiis aperiam, et tenetur earum provident qui beatae illo labore autem hic neque, eum suscipit perferendis sed reprehenderit similique!</p>
                                <br />
                                <br />
                                <h1 className="font-bold text-lg uppercase">Anantha Debanth</h1>
                                <p>Clint</p>
                            </div>
                        </div>
                        <div id="item3" className="carousel-item w-full ">
                            <div className="text-[#0C0F26] p-20">
                                <p className="font-bold text-xl sm:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore ea officiis aperiam, et tenetur earum provident qui beatae illo labore autem hic neque, eum suscipit perferendis sed reprehenderit similique!</p>
                                <br />
                                <br />
                                <h1 className="font-bold text-lg uppercase">Jack Morrison</h1>
                                <p>Clint</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className=" btn-xs">1</a>
                        <a href="#item2" className=" btn-xs">2</a>
                        <a href="#item3" className=" btn-xs">3</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clientsays;