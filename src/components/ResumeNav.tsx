import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "./Divider";
import LinkButton from "./LinkButton";

const ResumeNav = ({
  location,
  setLocation,
}: {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const tabs = ["About", "Experience", "Clubs", "Projects"];
  return (
    <>
      <Flex justifyContent="space-between" width={["100%", "80%"]} mx="auto">
        <HStack spacing={4}>
          {tabs.map((tab) => (
            <LinkButton
              name={tab}
              location={location}
              setLocation={setLocation}
            />
          ))}
        </HStack>
      </Flex>
      <Divider />
    </>
  );
};
export default ResumeNav;
