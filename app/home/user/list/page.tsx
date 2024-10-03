import Image from "next/image";
import MovieCard from "@/app/component/MovieCard";
import React from "react";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import prisma from "@/app/utils/db";

const getData = async (userId: string) => {
  const data = await prisma.watchList.findMany({
    where: {
      userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });
  return data;
};

const WatchList = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);
  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your watchlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
        {data.map((movie) => (
          <div key={movie.Movie?.id} className="relative h-60">
            <Image
              src={movie.Movie?.imageString as string}
              alt="movie"
              className="rounded-sm absolute w-full h-full object-cover"
              width={500}
              height={400}
            />
            <div className="h-60 relative z-10 w-full transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt="movie"
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />
                <MovieCard
                  title={movie.Movie?.title as string}
                  overview={movie.Movie?.overview as string}
                  movieId={movie.Movie?.id as number}
                  watchList={(movie.Movie?.WatchLists.length as number) > 0}
                  watchListId={movie.Movie?.WatchLists[0]?.id as string}
                  youtubeUrl={movie.Movie?.youtubeString as string}
                  age={movie.Movie?.age as number}
                  time={movie.Movie?.duration as number}
                  year={movie.Movie?.release as number}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchList;
