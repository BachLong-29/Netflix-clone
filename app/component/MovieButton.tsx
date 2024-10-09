"use client";

import { InfoIcon, PlayCircle } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import PlayVideoModal from "./PlayVideoModal";

interface iMovieButton {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}

const MovieButton = ({
  overview,
  youtubeUrl,
  age,
  title,
  releaseDate,
  duration,
}: iMovieButton) => {
  const [open, setOpen] = useState(false);
  console.log("process.env.GITHUB_ID", process);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h6 w-6" /> Play
      </Button>
      <Button className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>
      <PlayVideoModal
        title={title}
        overview={overview}
        youtubeUrl={youtubeUrl}
        state={open}
        changeState={setOpen}
        year={releaseDate}
        age={age}
        time={duration}
      />
    </>
  );
};

export default MovieButton;
