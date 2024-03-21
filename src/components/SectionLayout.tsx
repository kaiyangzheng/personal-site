import React from "react";
import { Box } from "@chakra-ui/react";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box width={["100%", "80%"]} mx="auto" paddingBottom={10}>
        {children}
      </Box>
    </>
  );
}
