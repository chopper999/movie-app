import React, { ReactNode } from "react";
import { Header } from "./Header";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: 1 }}>
      <Header />
      <div
        style={{
          paddingInline: "80px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
