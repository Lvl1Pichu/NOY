import { useEffect } from "react";

const useCardMouseTracker = (containerId: string): void => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const cards = document.getElementsByClassName(
        "card"
      ) as HTMLCollectionOf<HTMLElement>;

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const container = document.getElementById(containerId);

    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerId]);
};

export default useCardMouseTracker;
