import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import SectionLayout from "../SectionLayout";

export default function About() {
  return (
    <>
      <SectionLayout>
        <Text fontSize="3xl" fontWeight={800}>
          About
        </Text>
        <Box mt={5}>
          <Text fontSize="xl">Hi, I'm Kaiyang Zheng.</Text>
          <Text fontSize="l" mt={2}>
            I am a second-year student at <b>Northeastern University</b>{" "}
            studying <b>Computer Science</b> with a concentration in Software.
          </Text>
          <Text fontSize="l">
            As a software developer, I'm passionate about building scalable and
            maintainable systems that solve real-world problems.
          </Text>
        </Box>
        <Box mt={5}>
          <Text fontSize="l">
            My interests in computer science include{" "}
            <b>Full-stack Web and Mobile Development</b>, <b>Databases</b>, and{" "}
            <b>Computer Networks</b>.
          </Text>
          <Text fontSize="l">
            I am also interested in <b>Data Engineering</b> and learning
            concepts in <b>AI</b> and <b>Machine Learning</b>.
          </Text>
        </Box>
        <Box mt={5}>
          <Text fontSize="l">
            I am currently seeking a <b>Software Engineering Internship</b> for{" "}
            <b>Summer 2024</b> or <b>Summer 2025</b>
          </Text>
          <Text fontSize="l">
            If you would like to get in touch, reach out to me at{" "}
            <Link href="mailto:zheng.kaiy@northeastern.edu" isExternal>
              <b>zheng.kaiy@northeastern.edu</b>
            </Link>{" "}
            or connect with me on{" "}
            <Link href="https://www.linkedin.com/in/kaiyang-zheng/" isExternal>
              <b>LinkedIn</b>
            </Link>
            .
          </Text>
        </Box>
        <Box mt={5}>
          My resume is available{" "}
          <Link
            href="https://drive.google.com/file/d/1AWzNBFfPOUe-n2cLDOsH92OFw_-b4Aq_/view?usp=sharing"
            isExternal
          >
            <b>here</b>
          </Link>
          .
        </Box>
      </SectionLayout>
    </>
  );
}
