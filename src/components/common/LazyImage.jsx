import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component - Lazy loads images when they enter viewport
 * Reduces initial bundle size and improves page load performance
 * 
 * Usage:
 * <LazyImage 
 *   src="image.jpg" 
 *   alt="Description"
 *   className="w-full h-auto"
 *   placeholder="https://placehold.co/400x300?text=Loading"
 * />
 */
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E',
  onLoad,
  width,
  height
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    // Create Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Image is in viewport, start loading
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setImageSrc(src);
            setIsLoading(false);
            onLoad?.();
          };
          img.onerror = () => {
            setImageSrc(placeholder);
            setIsLoading(false);
          };
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, placeholder, onLoad]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default LazyImage;
