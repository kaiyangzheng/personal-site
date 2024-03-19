import { Box, Flex, Text, HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaSpotify } from "react-icons/fa";
import { useColorMode, Icon } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Divider from "./Divider";

export default function Profile() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        justifyContent="space-between"
        width={["100%", "80%"]}
        mx="auto"
        mt={10}
      >
        <Box>
          <Text fontSize="3xl" fontWeight={800}>
            Kaiyang Zheng
          </Text>
          <HStack spacing={4} mt={3}>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedinIn />}
              size="sm"
              onClick={() => {
                window.open("https://www.linkedin.com/in/kaiyang-zheng/");
              }}
            />
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="sm"
              onClick={() => {
                window.open("https://github.com/kaiyangzheng");
              }}
            />
            <IconButton
              aria-label="Spotify"
              icon={<FaSpotify />}
              size="sm"
              onClick={() => {
                window.open(
                  "https://open.spotify.com/user/ls3o2qimmcepi0z4o0gxil388"
                );
              }}
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              size="sm"
              onClick={() => {
                window.open("https://www.instagram.com/kaiyangzheng1/");
              }}
            />
          </HStack>
        </Box>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
      <Divider />
    </>
  );
}
