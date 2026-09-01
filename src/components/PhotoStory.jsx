import { photos } from "../data/photos.js";
import AlbumPhoto from "./AlbumPhoto.jsx";
import Reveal from "./Reveal.jsx";

export default function PhotoStory({ onOpenPhoto }) {
  return (
    <>
      <div className="date-rule" aria-hidden="true">
        <span>01 · 09 · 2026</span>
      </div>

      <section className="chapter family" aria-labelledby="family-title">
        <Reveal className="chapter-head">
          <p className="chapter-kicker">II</p>
          <h2 id="family-title">Оила — энг катта бойлик</h2>
        </Reveal>

        <Reveal>
          <AlbumPhoto photo={photos.coupleTable} onOpen={onOpenPhoto} className="photo-full" />
        </Reveal>

        <div className="pair uneven">
          <Reveal>
            <AlbumPhoto photo={photos.familyHome} onOpen={onOpenPhoto} />
          </Reveal>
          <Reveal delay={80}>
            <AlbumPhoto photo={photos.gardenBench} onOpen={onOpenPhoto} />
          </Reveal>
        </div>

        <Reveal>
          <AlbumPhoto photo={photos.fiveMen} onOpen={onOpenPhoto} className="photo-full" />
        </Reveal>

        <div className="pair">
          <Reveal>
            <AlbumPhoto photo={photos.kitchen} onOpen={onOpenPhoto} />
          </Reveal>
          <Reveal delay={80}>
            <AlbumPhoto photo={photos.courtyardTea} onOpen={onOpenPhoto} />
          </Reveal>
        </div>

        <Reveal>
          <AlbumPhoto photo={photos.familyTerrace} onOpen={onOpenPhoto} className="photo-full" />
        </Reveal>
      </section>

      <section className="chapter travel" aria-labelledby="travel-title">
        <Reveal className="chapter-head">
          <p className="chapter-kicker">III</p>
          <h2 id="travel-title">Гўзал манзиллар, қадрли инсонлар</h2>
        </Reveal>

        <Reveal>
          <AlbumPhoto photo={photos.kazanCathedral} onOpen={onOpenPhoto} className="photo-bleed" />
        </Reveal>

        <div className="portraits">
          <Reveal>
            <AlbumPhoto photo={photos.eiffel} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
          <Reveal delay={70}>
            <AlbumPhoto photo={photos.versailles} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
          <Reveal delay={140}>
            <AlbumPhoto photo={photos.sagrada} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
        </div>

        <Reveal>
          <AlbumPhoto photo={photos.shipFriends} onOpen={onOpenPhoto} className="photo-full" />
        </Reveal>

        <div className="pair">
          <Reveal>
            <AlbumPhoto photo={photos.cityDeck} onOpen={onOpenPhoto} />
          </Reveal>
          <Reveal delay={80}>
            <AlbumPhoto photo={photos.citySelfie} onOpen={onOpenPhoto} />
          </Reveal>
        </div>

        <div className="portraits two">
          <Reveal>
            <AlbumPhoto photo={photos.petronas} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
          <Reveal delay={80}>
            <AlbumPhoto photo={photos.pavilion} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
        </div>

        <Reveal>
          <AlbumPhoto photo={photos.mountainSelfie} onOpen={onOpenPhoto} className="photo-full" />
        </Reveal>

        <div className="portraits two">
          <Reveal>
            <AlbumPhoto photo={photos.mountainValley} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
          <Reveal delay={80}>
            <AlbumPhoto photo={photos.mountainPortrait} onOpen={onOpenPhoto} className="portrait" />
          </Reveal>
        </div>

        <Reveal>
          <AlbumPhoto photo={photos.whiteHouse} onOpen={onOpenPhoto} className="photo-wide" />
        </Reveal>
      </section>
    </>
  );
}
