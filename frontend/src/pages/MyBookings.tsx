// import { useQuery } from "react-query";
// import * as apiClient from "../api-client";

// const MyBookings = () => {
//   const { data: hotels } = useQuery(
//     "fetchMyBookings",
//     apiClient.fetchMyBookings
//   );

//   if (!hotels || hotels.length === 0) {
//     return <span>No bookings found</span>;
//   }

//   return (
//     <div className="space-y-5">
//       <h1 className="text-3xl font-bold">My Bookings</h1>
//       {hotels.map((hotel) => (
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] border border-slate-300 rounded-lg p-8 gap-5">
//           <div className="lg:w-full lg:h-[250px]">
//             <img
//               src={hotel.imageUrls[0]}
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//           <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px]">
//             <div className="text-2xl font-bold">
//               {hotel.name}
//               <div className="text-xs font-normal">
//                 {hotel.city}, {hotel.country}
//               </div>
//             </div>
//             {hotel.bookings.map((booking) => (
//               <div>
//                 <div>
//                   <span className="font-bold mr-2">Dates: </span>
//                   <span>
//                     {new Date(booking.checkIn).toDateString()} -
//                     {new Date(booking.checkOut).toDateString()}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="font-bold mr-2">Guests:</span>
//                   <span>
//                     {booking.adultCount} adults, {booking.childCount} children
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyBookings;
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

const MyBookings = () => {
  const { data: hotels } = useQuery(
    "fetchMyBookings",
    apiClient.fetchMyBookings
  );

  if (!hotels || hotels.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="text-xl font-medium">No bookings found</span>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center">My Bookings</h1>
      {hotels.map((hotel) => (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] border border-slate-300 rounded-lg p-6 gap-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="lg:w-full lg:h-[250px] overflow-hidden rounded-lg">
            <img
              src={hotel.imageUrls[0]}
              alt={hotel.name}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px]">
            <div className="text-2xl font-bold">
              {hotel.name}
              <div className="text-xs font-normal text-gray-500">
                {hotel.city}, {hotel.country}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {hotel.bookings.map((booking, index) => (
                <div key={index} className="border-t border-gray-200 pt-3">
                  <div>
                    <span className="font-bold mr-2">Dates: </span>
                    <span>
                      {new Date(booking.checkIn).toDateString()} -{" "}
                      {new Date(booking.checkOut).toDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold mr-2">Guests:</span>
                    <span>
                      {booking.adultCount} adults, {booking.childCount} children
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
