import MovieVideo from "../component/MovieVideo";
import React from "react";
import RecentlyAdded from "../component/RecentlyAdded";

const HomePage = () => {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </div>
  );
};

export default HomePage;
