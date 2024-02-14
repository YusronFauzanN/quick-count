import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">My Website</div>
        <ul className="flex">
          
          <li className="mr-6">
            <button href="#" className="text-white hover:text-gray-300" onClick={() => {
                navigate('/home');
            }}>Data</button>
          </li>
          <li>
            <button href="#" className="text-white hover:text-gray-300" onClick={() => {
                navigate('/form-count');
            }}>Count</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
