import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span className="text-gray-600 text-lg">Loading...</span>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-bold hover:bg-blue-500 transition duration-300"
        >
          Add Hotel
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {hotelData.map((hotel) => (
          <div
            key={hotel._id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
          >
            <img
              src={hotel.imageUrls[0]}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-700">
                  <BsMap className="mr-2" />
                  <span>
                    {hotel.city}, {hotel.country}
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BsBuilding className="mr-2" />
                  <span>{hotel.type}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BiMoney className="mr-2" />
                  <span>₹{hotel.pricePerNight} per night</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BiHotel className="mr-2" />
                  <span>
                    {hotel.adultCount} adults, {hotel.childCount} children
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BiStar className="mr-2" />
                  <span>{hotel.starRating} Star Rating</span>
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  to={`/edit-hotel/${hotel._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-bold hover:bg-blue-500 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
