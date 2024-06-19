import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Your Booking Details</h2>

      <div className="border-b border-gray-300 pb-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Location:</h3>
        <p className="text-gray-600">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</p>
      </div>

      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Check-in:</h3>
          <p className="text-gray-600">{checkIn.toDateString()}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Check-out:</h3>
          <p className="text-gray-600">{checkOut.toDateString()}</p>
        </div>
      </div>

      <div className="border-t border-b border-gray-300 py-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Total length of stay:</h3>
        <p className="text-gray-600">{numberOfNights} nights</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Guests:</h3>
        <p className="text-gray-600">
          {adultCount} adults & {childCount} children
        </p>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
