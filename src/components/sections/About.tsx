import React from "react";
import { Text } from "@chakra-ui/react";
import SectionLayout from "../SectionLayout";
import MarkdownWrapper from "../MarkdownWrapper";

export default function About() {
  return (
    <>
      <SectionLayout>
        <Text fontSize="3xl" fontWeight={800}>
          About
        </Text>
      </SectionLayout>
    </>
  );
}
