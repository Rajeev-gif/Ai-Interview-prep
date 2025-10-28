import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const getFirstName = (fullName) => {
    if (!fullName) return "";
    return fullName.split(" ")[0];
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center border-l border-gray-400">
        <Link to="/user-profile">
          {user?.profileImageUrl ? (
            <img
              src={user.profileImageUrl}
              alt=""
              className="w-11 h-11 bg-gray-300 rounded-full mx-3 object-cover"
            />
          ) : (
            <div className="w-11 h-11 mx-3 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[1rem] font-semibold border-2 border-gray-100">
              {getInitials(user?.name)}
            </div>
          )}
        </Link>
        <div>
          <Link to="/user-profile">
            <div className="text-[15px] text-black font-bold leading-3 hover:underline">
              {getFirstName(user.name) || ""}
            </div>
          </Link>
          <button
            className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
