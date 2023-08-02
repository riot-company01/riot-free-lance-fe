import { useState, useEffect } from "react";

const pcQuery = "(max-width:1024px)";

const runningInBrowser = typeof window !== "undefined";

/**
 * BREAK POINT
 * */
export const useMatchMedia = () => {
  const [mediaType, setMediaType] = useState({
    isPcSize: runningInBrowser ? window.innerWidth >= 1024 : true,
  });

  const onChangeMediaByPcWidth = (event: MediaQueryListEvent) => {
    setMediaType((prev) => ({
      ...prev,
      isPcSize: !event.matches,
    }));
  };

  useEffect(() => {
    const pcMediaQueryList = window.matchMedia(pcQuery);
    pcMediaQueryList.addEventListener("change", onChangeMediaByPcWidth, {
      passive: true,
    });
    return () => {
      pcMediaQueryList.removeEventListener("change", onChangeMediaByPcWidth);
    };
  }, []);

  return mediaType;
};
