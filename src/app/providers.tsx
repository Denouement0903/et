"use client";

import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <FluentProvider theme={teamsLightTheme}>
        {children}
      </FluentProvider>
    </SessionProvider>
  );
}