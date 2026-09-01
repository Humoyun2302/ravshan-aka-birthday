import { photos } from "../data/photos.js";
import AlbumPhoto from "./AlbumPhoto.jsx";
import Reveal from "./Reveal.jsx";

export default function MemorySection({ onOpenPhoto }) {
  return (
    <section className="chapter memories" aria-labelledby="memories-title">
      <Reveal className="chapter-head">
        <p className="chapter-kicker">I</p>
        <h2 id="memories-title">Хотиралар</h2>
        <p className="chapter-caption">
          Йиллар ўтади, қадрли хотиралар эса қолади.
        </p>
      </Reveal>

      <Reveal>
        <AlbumPhoto
          photo={photos.archivalFamily}
          onOpen={onOpenPhoto}
          className="photo-full archival"
        />
      </Reveal>

      <div className="pair">
        <Reveal>
          <AlbumPhoto photo={photos.youngFamily} onOpen={onOpenPhoto} className="archival" />
        </Reveal>
        <Reveal delay={80}>
          <AlbumPhoto photo={photos.banquet} onOpen={onOpenPhoto} className="archival" />
        </Reveal>
      </div>

      <Reveal>
        <AlbumPhoto photo={photos.generationsWall} onOpen={onOpenPhoto} className="photo-full archival" />
      </Reveal>

      <Reveal>
        <AlbumPhoto photo={photos.dastarkhan} onOpen={onOpenPhoto} className="photo-wide archival" />
      </Reveal>
    </section>
  );
}
