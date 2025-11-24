import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
}

export function ImageLoader({ src, alt, className, skeletonClassName }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton className={cn("absolute inset-0", skeletonClassName)} />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
      {hasError && (
        <div className={cn("flex items-center justify-center bg-muted", className)}>
          <span className="text-muted-foreground">Failed to load image</span>
        </div>
      )}
    </div>
  );
}
