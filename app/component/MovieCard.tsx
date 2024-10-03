"use client";

import { Heart, PlayCircle } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { LargeNumberLike } from "crypto";
import PlayVideoModal from "./PlayVideoModal";

interface iMovieCard {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

const MovieCard = ({
  movieId,
  overview,
  title,
  watchList,
  watchListId,
  youtubeUrl,
  age,
  time,
  year,
}: iMovieCard) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <Button variant="outline" size="icon">
            <Heart className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal tex-sm">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {age} +
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        title={title}
        overview={overview}
        youtubeUrl={youtubeUrl}
        state={open}
        changeState={setOpen}
        year={year}
        age={age}
        time={time}
      />
    </>
  );
};

export default MovieCard;
