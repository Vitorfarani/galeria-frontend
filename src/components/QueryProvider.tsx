"use client";

import { ReactNode, useState } from "react";       // 👉 aqui importamos useState
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function QueryProvider({ children }: { children: ReactNode }) {
  // agora não vai dar erro de React undefined
  const [client] = useState(() => new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
