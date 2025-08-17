"use client";

import { useState } from "react";
import Image from "next/image";
import { LoadingSpinner } from "./LoadingSpinner";

export interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  sizes,
  priority = false,
  placeholder = "empty",
  blurDataURL
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-[--color-neutral-100] flex items-center justify-center ${className}`}>
        <div className="text-center text-[--color-neutral-500]">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="mx-auto mb-2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
          <p className="text-xs">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[--color-neutral-100] flex items-center justify-center z-10">
          <LoadingSpinner size="sm" className="text-[--color-neutral-400]" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${fill ? 'object-cover' : ''}`}
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}

// Preset image components for common use cases
export function PropertyImage({ 
  src, 
  alt, 
  className = "",
  priority = false 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  priority?: boolean;
}) {
  return (
    <LazyImage
      src={src}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
    />
  );
}

export function ThumbnailImage({ 
  src, 
  alt, 
  className = "" 
}: { 
  src: string; 
  alt: string; 
  className?: string;
}) {
  return (
    <LazyImage
      src={src}
      alt={alt}
      width={80}
      height={80}
      className={className}
      sizes="80px"
    />
  );
}
