import React, { ReactNode } from "react";

export const metadata = {
  title: {
    default: "Test",
    template: "%s | Test",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
