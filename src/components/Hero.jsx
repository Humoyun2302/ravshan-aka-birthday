import { photos } from "../data/photos.js";
import AlbumPhoto from "./AlbumPhoto.jsx";

export default function Hero({ onOpenPhoto }) {
  return (
    <header className="hero">
      <p className="hero-date reveal-hero delay-1">01.09.2026</p>
      <p className="hero-name reveal-hero delay-2">Равшан ака</p>
      <h1 className="hero-title reveal-hero delay-3">
        Таваллуд айёмингиз
        <span>муборак бўлсин!</span>
      </h1>
      <p className="hero-note reveal-hero delay-4">
        Энг самимий тилаклар билан — оилангиздан.
      </p>
      <div className="hero-frame reveal-hero delay-5">
        <AlbumPhoto
          photo={photos.shipSunset}
          onOpen={onOpenPhoto}
          priority
          className="hero-photo"
          sizes="(max-width: 720px) 94vw, 1080px"
        />
      </div>
    </header>
  );
}
