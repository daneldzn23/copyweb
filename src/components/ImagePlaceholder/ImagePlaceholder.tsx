import './ImagePlaceholder.css';

interface ImagePlaceholderProps {
  label: string;
  ratio?: string;
  className?: string;
}

function ImagePlaceholder({ label, ratio = '16 / 10', className }: ImagePlaceholderProps) {
  return (
    <div
      className={['image-placeholder', className].filter(Boolean).join(' ')}
      style={{ aspectRatio: ratio }}
    >
      <svg className="image-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 15l-5-5-9 9" />
      </svg>
      <span className="image-placeholder__label">{label}</span>
      <span className="image-placeholder__hint">imagem do produto — a substituir</span>
    </div>
  );
}

export default ImagePlaceholder;
