import { finalSequence } from "../data/photos.js";
import AlbumPhoto from "./AlbumPhoto.jsx";
import Reveal from "./Reveal.jsx";

export default function FinalMessage({ onOpenPhoto }) {
  return (
    <section className="finale" aria-labelledby="finale-title">
      <div className="finale-photos">
        <Reveal>
          <AlbumPhoto photo={finalSequence[0]} onOpen={onOpenPhoto} className="photo-full" />
        </Reveal>
        <div className="pair finale-pair">
          <Reveal>
            <AlbumPhoto photo={finalSequence[1]} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
          <Reveal delay={80}>
            <AlbumPhoto photo={finalSequence[2]} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
        </div>
        <Reveal>
          <AlbumPhoto photo={finalSequence[3]} onOpen={onOpenPhoto} className="photo-wide" />
        </Reveal>
      </div>

      <div className="closing">
        <Reveal>
          <p className="hero-date">01.09.2026</p>
          <h2 id="finale-title">Таваллуд айёмингиз муборак!</h2>
          <p className="closing-line">Доимо соғ-омон ва бахтли бўлинг.</p>
          <p className="from-family">
            Оилангиздан <span aria-hidden="true">♥</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
