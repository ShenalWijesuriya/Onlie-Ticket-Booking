import { Link, Route, Routes } from "react-router-dom";
import { FaFilm } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoPeople, IoSettings } from "react-icons/io5";

import MoviesAdminPage from "./admin/moviesAdminPage";
import AddMoviePage from "./admin/addMovieAdminPage";
import UpdateMoviePage from "./admin/updateMovieAdminPage";

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[300px] h-full flex flex-col items-center bg-gray-100">
        <span className="text-3xl font-bold my-5">Admin Panel</span>

        <Link
          className="flex flex-row h-[60px] w-full border p-[20px] items-center text-xl gap-[25px]"
          to="/admin/movies"
        >
          <FaFilm /> Movies
        </Link>

        <Link
          className="flex flex-row h-[60px] w-full border p-[20px] items-center text-xl gap-[25px]"
          to="/admin/orders"
        >
          <GiShoppingBag /> Orders
        </Link>

        <Link
          className="flex flex-row h-[60px] w-full border p-[20px] items-center text-xl gap-[25px]"
          to="/admin/users"
        >
          <IoPeople /> Users
        </Link>

        <Link
          className="flex flex-row h-[60px] w-full border p-[20px] items-center text-xl gap-[25px]"
          to="/admin/settings"
        >
          <IoSettings /> Settings
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[calc(100%-300px)] h-full">
        <Routes path="/*">
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/movies" element={<MoviesAdminPage />} />
          <Route path="/newMovie" element={<AddMoviePage />} />
          <Route path="/updateMovie" element={<UpdateMoviePage />} />

        </Routes>
      </div>
    </div>
  );
}
