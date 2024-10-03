import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";

interface iPlayVideoModal {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: (state: boolean) => void;
  year: number;
  age: number;
  time: number;
}
const PlayVideoModal = ({
  state,
  changeState,
  overview,
  title,
  youtubeUrl,
  age,
  time,
  year,
}: iPlayVideoModal) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{year}</p>
            <p className="border py-0.5 px-1 border-gray-200 rounded">
              {age} +
            </p>
            <p>{time}</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModal;
