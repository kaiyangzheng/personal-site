import { Box } from "@chakra-ui/react";
import React from "react";

const Divider = () => {
  return (
    <>
      <Box
        width={["100%", "80%"]}
        mx="auto"
        mt={5}
        mb={5}
        borderBottom="1px solid"
        borderColor="gray.200"
      ></Box>
    </>
  );
};

export default Divider;
