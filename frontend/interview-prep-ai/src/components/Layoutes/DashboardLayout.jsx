import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-amber-50 min-h-screen">
      <Navbar />

      {user && <div>{children}</div>}
    </div>
  );
};

export default DashboardLayout;
