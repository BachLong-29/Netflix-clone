import { Button } from "@/components/ui/button";
import MovieButton from "./MovieButton";
import React from "react";
import prisma from "../utils/db";

const getData = async () => {
  const data = prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      youtubeString: true,
      duration: true,
      age: true,
      id: true,
    },
  });
  return data;
};

const MovieVideo = async () => {
  const data = await getData();
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md: text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
        <div className="flex gap-x-3 mt-4">
          <MovieButton
            overview={data?.overview}
            youtubeUrl={data?.youtubeString}
            id={data?.id}
            age={data?.age}
            title={data?.title}
            releaseDate={data?.release}
            duration={data?.duration}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieVideo;
