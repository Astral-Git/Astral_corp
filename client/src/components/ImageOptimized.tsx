import { useState, useRef, useEffect } from 'react';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const ImageOptimized = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: ImageOptimizedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority && imgRef.current) {
      imgRef.current.loading = 'eager';
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Generate optimized image URLs
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.includes('unsplash.com')) {
      return `
        ${baseSrc}&w=400 400w,
        ${baseSrc}&w=800 800w,
        ${baseSrc}&w=1200 1200w
      `;
    }
    if (baseSrc.includes('cloudinary.com')) {
      const transformedSrc = baseSrc.replace('/upload/', '/upload/f_auto,q_auto,');
      return `
        ${transformedSrc.replace('q_auto,', 'q_auto,w_400,')} 400w,
        ${transformedSrc.replace('q_auto,', 'q_auto,w_800,')} 800w,
        ${transformedSrc.replace('q_auto,', 'q_auto,w_1200,')} 1200w
      `;
    }
    return undefined;
  };

  if (error) {
    return (
      <div 
        className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={`Failed to load: ${alt}`}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          style={{ width, height }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover`}
      />
    </div>
  );
};

export default ImageOptimized;