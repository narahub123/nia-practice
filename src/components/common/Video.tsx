import { twMerge } from "tailwind-merge";
import type { ReactVideoProps } from "../../types";
import { forwardRef, type MouseEvent } from "react";

type VideoProps = ReactVideoProps & {};

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ className: _className, ...props }, ref) => {
    const className = twMerge("cursor-pointer", _className);

    const handleVideoClick = async (e: MouseEvent<HTMLVideoElement>) => {
      const video = e.currentTarget;

      if (!video) return;

      if (video.paused) {
        try {
          await video.play();
        } catch (error) {
          console.error("Video play failed (Policy blocked):", error);
        }
      } else {
        video.pause();
      }
    };

    return (
      <video
        className={className}
        preload="auto"
        {...props}
        ref={ref}
        onClick={handleVideoClick}
      />
    );
  }
);

Video.displayName = "Video";
