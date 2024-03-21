import React from "react";
import {
  Box,
  Link,
  Text,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import SectionLayout from "../SectionLayout";

export default function About() {
  return (
    <>
      <SectionLayout>
        <Text fontSize="3xl" fontWeight={800}>
          Experience
        </Text>
        <Box mt={5}>
          <Text fontSize="xl" fontWeight={600}>
            Incoming Software Engineering Co-op @{" "}
            <Link href="https://www.linkedin.com/company/emoney-advisor/">
              eMoney Advisor
            </Link>
          </Text>
          <Text fontSize="l">Fall 2024</Text>
        </Box>
        <Box mt={5}>
          <Text fontSize="xl" fontWeight={600}>
            Software Engineer Intern @{" "}
            <Link href="https://www.linkedin.com/company/dimaag/">
              DIMAAG-AI
            </Link>
          </Text>
          <Text fontSize="l">May 2022 - August 2022</Text>
          <UnorderedList mt={2}>
            <ListItem>
              Developed data analysis platform for Off Road EVs to support
              testing of vehicle operational accuracy in the field
            </ListItem>
            <ListItem>
              Normalized rosbag data, including geolocation and data messages,
              into <b>JSON</b> format for analysis with <b>Python</b>
            </ListItem>
            <ListItem>
              Generated charts with <b>Matplotlib</b> to visualize EV location
              and task accuracy over time, supporting decision making for a team
              of 20+ engineers
            </ListItem>
            <ListItem>
              Built a satellite map interface with <b>React</b> and the{" "}
              <b>Google Maps API</b> showing live EV path and task markers
            </ListItem>
            <ListItem>
              Integrated data analysis platform with map to support
              visualization of task accuracy at markers during real-time testing
            </ListItem>
          </UnorderedList>
        </Box>
      </SectionLayout>
    </>
  );
}
