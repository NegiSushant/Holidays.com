// import { Link } from "react-router-dom";
// import { HotelType } from "../../../backend/src/shared/types";

// type Props = {
//   hotel: HotelType;
// };

// const LatestDestinationCard = ({ hotel }: Props) => {
//   return (
//     <Link
//       to={`/detail/${hotel._id}`}
//       className="relative cursor-pointer overflow-hidden rounded-md"
//     >
//       <div className="h-[300px]">
//         <img
//           src={hotel.imageUrls[0]}
//           className="w-full h-full object-cover object-center"
//         />
//       </div>

//       <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md">
//         <span className="text-white font-bold tracking-tight text-3xl">
//           {hotel.name}
//         </span>

//       </div>
//     </Link>
//   );
// };

// export default LatestDestinationCard;

import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
    >
      <div className="h-[300px]">
        <img
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          className="w-full h-full object-cover object-center rounded-t-md transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full rounded-b-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-bold tracking-tight text-2xl drop-shadow-md">
            {hotel.name}
          </span>
          <span className="text-white font-semibold text-xl bg-green-600 rounded-lg px-3 py-1 bg-opacity-80 drop-shadow-md">
            ₹{hotel.pricePerNight}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white font-medium tracking-tight text-lg drop-shadow-md">
            {hotel.city}, {hotel.country}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
