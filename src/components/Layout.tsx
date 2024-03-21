import * as React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import useWindowDimensions from "../hooks/useDimensions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex
        maxWidth={["100%", "80%"]}
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
