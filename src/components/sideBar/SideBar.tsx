import { FaHome, FaCalendarAlt, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center bg-[#0F033F] h-screen w-[100px]">
      <Link to="/" className="self-center">
        <FaHome className="text-white text-2xl mb-10 cursor-pointer" />
      </Link>
      <Link to="/calendar" className="self-center">
        <FaCalendarAlt className="text-white text-2xl mb-10 cursor-pointer" />
      </Link>
      <FaTasks className="text-white text-2xl mb-10 self-center cursor-pointer" />
    </div>
  );
};
export default SideBar;
