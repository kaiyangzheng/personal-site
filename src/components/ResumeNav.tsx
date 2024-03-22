import { Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Divider from "./Divider";
import LinkButton from "./LinkButton";
import { useMediaQuery } from "usehooks-ts";

const ResumeNav = ({
  location,
  setLocation,
}: {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const tabs = ["About", "Experience", "Clubs", "Projects"];
  return (
    <>
      {!isMobile ? (
        <HStack spacing={4} width={["100%", "80%"]} mx="auto">
          {tabs.map((tab) => (
            <LinkButton
              name={tab}
              location={location}
              setLocation={setLocation}
            />
          ))}
        </HStack>
      ) : (
        <Flex width="100%" justifyContent="center">
          <VStack spacing={4}>
            {tabs.map((tab) => (
              <LinkButton
                name={tab}
                location={location}
                setLocation={setLocation}
              />
            ))}
          </VStack>
        </Flex>
      )}
      <Divider />
    </>
  );
};
export default ResumeNav;
