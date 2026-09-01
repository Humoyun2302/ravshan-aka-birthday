import { useEffect } from "react";

export default function PhotoLightbox({ photos, index, onClose, onChange }) {
  const open = index !== null && index >= 0;
  const photo = open ? photos[index] : null;

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % photos.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + photos.length) % photos.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, photos.length, onClose, onChange]);

  useEffect(() => {
    if (!open) return undefined;
    let startX = 0;

    const onTouchStart = (event) => {
      startX = event.changedTouches[0].clientX;
    };
    const onTouchEnd = (event) => {
      const delta = event.changedTouches[0].clientX - startX;
      if (Math.abs(delta) < 48) return;
      if (delta < 0) onChange((index + 1) % photos.length);
      else onChange((index - 1 + photos.length) % photos.length);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [open, index, photos.length, onChange]);

  if (!open || !photo) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Сурат">
      <button type="button" className="lightbox-backdrop" onClick={onClose} aria-label="Ёпиш" />
      <img src={photo.src} alt={photo.alt} />
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Ёпиш">
        ×
      </button>
      <button
        type="button"
        className="lightbox-nav prev"
        onClick={() => onChange((index - 1 + photos.length) % photos.length)}
        aria-label="Олдинги сурат"
      >
        ‹
      </button>
      <button
        type="button"
        className="lightbox-nav next"
        onClick={() => onChange((index + 1) % photos.length)}
        aria-label="Кейинги сурат"
      >
        ›
      </button>
    </div>
  );
}
