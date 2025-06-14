import Logo from '../../assets/images/logo.png';
import MenuItem from './MenuItem';
import { menuItems } from '../../data/data';
import { TbLogout } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../helper/SessionHelper';


const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <>
      <div
        className="w-[250px] h-screen fixed left-0 top-0 bg-white flex flex-col justify-between"
      >
        <div className="flex flex-col flex-1 overflow-y-auto ">
          {/* Logo */}
          <div className="flex items-center justify-center h-[85px]">
            <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="Logo"
              className="h-16 object-contain cursor-pointer"
            />
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-1 px-4 pt-4 text-primary font-medium">
            {menuItems?.map((item, index) => (
              <MenuItem item={item} key={index} />
            ))}
          </nav>
        </div>

        {/* Fixed Logout Button */}
        <div className="px-4 py-3 w-full absolute bottom-10">
          <div
            onClick={() => logout()}
            className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-gray-100 text-primary font-medium"
          >
            <TbLogout className="text-[20px]" />{" "}
            <span className="text-lg">Logout</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar