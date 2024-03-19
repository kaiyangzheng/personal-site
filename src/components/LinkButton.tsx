import { Button } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "@chakra-ui/react";

const LinkButton = ({
  name,
  location,
  setLocation,
}: {
  name: string;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        fontSize={"lg"}
        fontWeight={600}
        variant="solid"
        colorScheme={location === name ? "gray" : "white"}
        color={colorMode === "light" ? "black" : "white"}
        _hover={{
          bg: colorMode === "light" ? "gray.200" : "gray.700",
          color: colorMode === "light" ? "black" : "white",
        }}
        onClick={() => {
          setLocation(name);
        }}
      >
        {name}
      </Button>
    </>
  );
};

export default LinkButton;
