"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)]">
      <h1 className="text-4xl font-bold text-destructive mb-4">Something went wrong!</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
        {error.message && <span className="block mt-2 text-sm">Details: {error.message}</span>}
      </p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        variant="destructive"
        size="lg"
      >
        Try again
      </Button>
      <p className="mt-8 text-sm text-muted-foreground">
        If the problem persists, please contact support.
      </p>
    </div>
  );
}
