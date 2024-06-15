import { useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md shadow-lg flex items-center space-x-3 transition-transform transform-gpu translate-y-0 opacity-100 animate-slide-in"
      : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md shadow-lg flex items-center space-x-3 transition-transform transform-gpu translate-y-0 opacity-100 animate-slide-in";

  return (
    <div className={styles}>
      {type === "SUCCESS" ? (
        <FaCheckCircle size={24} className="text-white" />
      ) : (
        <FaTimesCircle size={24} className="text-white" />
      )}
      <span className="text-lg font-semibold">{message}</span>
    </div>
  );
};

export default Toast;
