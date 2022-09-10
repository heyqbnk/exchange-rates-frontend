import React from "react";
import { Box } from "./Box.js";

interface ILayotProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayotProps) => {
  return (
    <Box
      css={{
        maxW: "100%",
        position: "relative",
        overflow: "visible scroll",
      }}
    >
      {children}
    </Box>
  );
};
