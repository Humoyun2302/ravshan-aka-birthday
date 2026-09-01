export default function AlbumPhoto({
  photo,
  onOpen,
  priority = false,
  className = "",
  sizes = "(max-width: 720px) 92vw, 1100px",
}) {
  return (
    <button
      type="button"
      className={`album-photo ${className}`}
      onClick={() => onOpen(photo)}
      aria-label={`${photo.alt}. Катталаштириш`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
      />
    </button>
  );
}
