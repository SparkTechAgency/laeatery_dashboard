import { useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../../redux/features/user/userApi";
import { useAppSelector } from "../../redux/hooks/hooks";
import UserLoading from "../loader/UserLoading";
import profile_placeholder from "../../assets/images/profile_placeholder.png";

const Header = () => {
  const navigate = useNavigate();
  const { isLoading } = useGetMeQuery(undefined);
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <header className="w-full flex justify-end items-center h-[85px] bg-white pr-12">
        <div className="flex items-center gap-4">
          {/* <button
            onClick={() => navigate("/notifications")}
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 relative"
          >
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button> */}
          {isLoading ? (
            <UserLoading />
          ) : (
            <div
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src={"http://10.0.60.118:5003"+user?.profile_image || profile_placeholder}
                alt="Profile"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = profile_placeholder;
                }}
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-gray-800 font-medium">{user?.name}</span>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
