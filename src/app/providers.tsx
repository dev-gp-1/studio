"use client";

import type { ReactNode } from 'react';

// This component can be used to wrap your application with any client-side context providers.
// For now, it's a simple pass-through, but can be extended for React Query, Theme providers, etc.
export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
