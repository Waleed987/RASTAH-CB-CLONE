
function Card(){
    return(
        <>
            <div className="flex flex-col justify-center items-center pt-2 px-2 h-110 w-60 transition-all duration-75 hover:border m-4">
                <div className="h-85 w-[98%]">
                    <img src="/hero.webp" className="h-full w-full object-cover"></img>
                </div>
                <div className="px-4 py-2 h-15 w-full  text-center break-words font-serif">
                    <p>ahoidfhosidhfosidhfoisdhfoihsdojkbfkjsd</p>
                </div>
                <div className="h-10 w-full pt-1 text-center">
                    <p>RS. 120,3907</p>
                </div>      
            </div>
        </>
    )
}

export default Card;