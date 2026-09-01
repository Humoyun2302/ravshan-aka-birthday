import { useCallback, useMemo, useState } from "react";
import { albumOrder } from "./data/photos.js";
import Hero from "./components/Hero.jsx";
import MemorySection from "./components/MemorySection.jsx";
import PhotoStory from "./components/PhotoStory.jsx";
import Wishes from "./components/Wishes.jsx";
import FinalMessage from "./components/FinalMessage.jsx";
import PhotoLightbox from "./components/PhotoLightbox.jsx";
import MusicButton from "./components/MusicButton.jsx";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const gallery = useMemo(() => albumOrder, []);

  const openPhoto = useCallback((photo) => {
    const index = gallery.findIndex((item) => item.src === photo.src);
    setActiveIndex(index >= 0 ? index : 0);
  }, [gallery]);

  return (
    <>
      <MusicButton />
      <main>
        <Hero onOpenPhoto={openPhoto} />
        <MemorySection onOpenPhoto={openPhoto} />
        <PhotoStory onOpenPhoto={openPhoto} />
        <Wishes />
        <FinalMessage onOpenPhoto={openPhoto} />
      </main>
      <PhotoLightbox
        photos={gallery}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </>
  );
}
