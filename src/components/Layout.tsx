import * as React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import useWindowDimensions from "../hooks/useDimensions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Flex
        maxWidth={width > 768 ? "80%" : "100%"}
        mx="auto"
        justifyContent="center"
        flexDir={"column"}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;