import Marquee from "react-fast-marquee";
import { likeData } from "data/youMayLikeData";

 const MostPopular = () =>{
  return (
    <div className="overflow-hidden">
      {/* <Marquee speed={50} gradient={false}> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full items-center">
          {likeData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center ${
                index === 1 ? "scale-110" : "scale-100"
              } transition-transform duration-300`}
            >
              <img
                src={item.imgpath}
                alt={item.name}
                className="h-[400px] w-[300px] object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      {/* </Marquee> */}
    </div>
  );
}

export default MostPopular;