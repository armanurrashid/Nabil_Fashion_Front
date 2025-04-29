// import sharee1 from "../../../src/images/s1.jpg";
// import sharee2 from "../../../src/images/s2.jpg";
// import sharee3 from "../../../src/images/s3.jpg";
// import sharee4 from "../../../src/images/s4.jpg";
// import sharee5 from "../../../src/images/s5.jpg";

// const Catelouge = () => {
//   return (
//     <div className="container mx-auto my-8">
//       <div className="flex items-center  gap-8 ">
//         <div className="flex  justify-center text-center px-24">
//           <p className="text-[32px] font-medium leading-none">
//             WHAT'S <br />
//             <span className="text-[50px] font-semibold">NEW</span>
//           </p>
//         </div>
//         <div className="flex flex-wrap gap-12 justify-center items-center">
//           <div className="flex flex-col items-center">
//             <img
//               src={sharee1}
//               alt="Luxury Festive"
//               className="xl:w-32 xl:h-32 md:w-24 md:h-24 w-20 h-20 rounded-full object-cover object-top"
//             />
//             <p className="mt-2 text-center text-sm font-medium">Luxury Festive</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src={sharee2}
//               alt="Luxury Lawn"
//               className="xl:w-32 xl:h-32 md:w-24 md:h-24 w-20 h-20 rounded-full object-cover object-top"
//             />
//             <p className="mt-2 text-center text-sm font-medium">Luxury Lawn</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src={sharee3}
//               alt="Festive Edit"
//               className="xl:w-32 xl:h-32 md:w-24 md:h-24 w-20 h-20 rounded-full object-cover object-top"
//             />
//             <p className="mt-2 text-center text-sm font-medium">Festive Edit</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src={sharee4}
//               alt="Ethnic Luxe"
//               className="xl:w-32 xl:h-32 md:w-24 md:h-24 w-20 h-20 rounded-full object-cover object-top"
//             />
//             <p className="mt-2 text-center text-sm font-medium">Ethnic Luxe</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src={sharee5}
//               alt="AJ Prints Unstitched"
//               className="xl:w-32 xl:h-32 md:w-24 md:h-24 w-20 h-20 rounded-full object-cover object-top"
//             />
//             <p className="mt-2 text-center text-sm font-medium">AJ Prints Unstitched</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src={sharee5}
//               alt="AJ Prints Unstitched"
//               className="xl:w-32 xl:h-32 md:w-24 md:h-24 w-20 h-20 rounded-full object-cover object-top"
//             />
//             <p className="mt-2 text-center text-sm font-medium">AJ Prints Unstitched</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Catelouge;


import { Link } from "react-router-dom";
import sharee1 from "images/s1.jpg";
import sharee2 from "images/s2.jpg";
import sharee3 from "images/s3.jpg";
import sharee4 from "images/s4.jpg";
import sharee5 from "images/s5.jpg";

const categories = [
  { img: sharee1, alt: "Luxury Festive", label: "Festive" },
  { img: sharee2, alt: "Luxury Lawn", label: "Lawn" },
  { img: sharee3, alt: "Festive Edit", label: "Festive" },
  { img: sharee4, alt: "Ethnic Luxe", label: "Ethnic" },
  { img: sharee5, alt: "AJ Prints Unstitched", label: "Prints" },
  { img: sharee5, alt: "AJ Prints Unstitched", label: "Unstitched" }
];

const Catelouge = () => {
  return (
    <div className="container mx-auto my-8">
        <div className="sm:mx-4 mx-2 my-4">
          <p className="lg:text-[40px] md:text-[30px] text-[25px] opacity-70 mx-4 md:mx-10 xl:mx-0">CATEGORY</p>
        </div>
      <div className="flex flex-wrap lg:gap-12 gap-4 justify-center items-center mx-4 md:mx-10  xl:mx-0">
        {categories.map((item, index) => (
          <Link to={`/category`} key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.alt}
              className="xl:w-32 xl:h-32 md:w-24 md:h-24 w-16 h-16 object-cover object-top"
            // className="xl:w-32 xl:h-32 md:w-24 md:h-24 w-20 h-20 rounded-full object-cover object-top"
            />
            <p className="mt-2 text-center text-sm font-medium opacity-60">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Catelouge;
