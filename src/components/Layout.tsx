import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from "usehooks-ts";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Flex maxWidth="80%" mx="auto" justifyContent="center" flexDir={"column"}>
        {children}
      </Flex>
    </>
  );
};

export default Layout;
