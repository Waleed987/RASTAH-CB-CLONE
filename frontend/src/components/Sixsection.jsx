
function Sixsection(){
    return(
        <>
            <div className="h-full w-full flex flex-row">
                <div className="h-full w-[50%] bg-black bg-[url('assets/home7.webp')] bg-cover flex justify-center items-end bg-center">
                    <div className="flex flex-col pb-20 space-y-10">
                        <p className="text-white text-5xl font-bold">MEN'S</p>
                        <button className="text-white border p-4">SHOP NOW</button>
                    </div>
                </div>
                <div className="h-full w-[50%] bg-black bg-[url('assets/home8.jpg')] bg-cover flex justify-center items-end bg-center">
                    <div className="flex flex-col pb-20 space-y-10">
                        <p className="text-white text-5xl font-bold">WOMEN'S</p>
                        <button className="text-white border py-4 w-40 ml-9">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sixsection;