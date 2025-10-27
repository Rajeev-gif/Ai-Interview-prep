import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layoutes/Navbar";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const GetProfile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const formatDate = (iso) => {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      return d.toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return iso;
    }
  };

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-24">
          <div className="animate-pulse h-24 w-24 rounded-full bg-gray-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
            <div className="flex-shrink-0">
              {user?.profileImageUrl ? (
                <img
                  src={user.profileImageUrl}
                  alt={`${user.name} profile`}
                  className="w-70 h-70 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-100"
                />
              ) : (
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-2xl md:text-3xl font-semibold border-2 border-gray-100">
                  {getInitials(user?.name)}
                </div>
              )}
            </div>

            <div className="flex-1 w-full">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {user?.name || "No Name"}
              </h1>

              <p className="mt-2 text-sm md:text-base text-gray-600">
                <span className="font-medium text-gray-800">Email: </span>
                <span className="break-words">{user?.email || "N/A"}</span>
              </p>

              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium text-gray-800">
                  Member since:{" "}
                </span>
                <span>{formatDate(user?.createdAt)}</span>
              </p>

              {/* Optional extra info */}
              {user?.bio && (
                <p className="mt-4 text-sm text-gray-700">{user.bio}</p>
              )}
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-right">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-sm rounded-md shadow-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetProfile;
