import { twMerge } from "tailwind-merge";
import type { MissionType, ReactVideoProps } from "../../types";
import { Video } from "../common";
import { useEffect, useLayoutEffect, useRef } from "react";

type MissionVideo = ReactVideoProps & {
  isStoryOn?: boolean;
  mission: MissionType;
};

export const MissionVideo = ({
  className: _className,
  isStoryOn = false,
  mission,
  ...props
}: MissionVideo) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const storyboardRef = useRef<HTMLParagraphElement>(null);

  const className = twMerge(
    "h-[500px] rounded-xl border-3 outline-2 outline-white/50",
    _className
  );

  useEffect(() => {
    if (!storyboardRef.current) return;

    const storyboard = storyboardRef.current;

    storyboard.innerText = mission.story;
  }, [isStoryOn]);

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    const togglePlayback = async () => {
      if (isStoryOn) {
        video.pause();
      } else {
        try {
          await video.play();
        } catch (error) {
          console.warn("Video auto-resume blocked by browser policy.", error);
        }
      }
    };

    togglePlayback();
  }, [isStoryOn]);

  return (
    <figure className="relative w-fit mx-auto">
      {isStoryOn && (
        <p
          className="absolute p-4 w-full h-full rounded-lg bg-white/50 text-white text-xl"
          ref={storyboardRef}
        >
          {mission.story}
        </p>
      )}
      <Video
        className={className}
        src={mission.videoUrl}
        {...props}
        ref={videoRef}
      />
    </figure>
  );
};
