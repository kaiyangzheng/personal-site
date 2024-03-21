import React from "react";
import { Box, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import SectionLayout from "../SectionLayout";

export default function Projects() {
  return (
    <>
      <SectionLayout>
        <Text fontSize="3xl" fontWeight={800}>
          Projects
        </Text>
        <Box mt={5}>
          <Text fontSize="xl" fontWeight={600}>
            NBAGopher
          </Text>
          <Text fontSize="l">January 2022 - December 2022</Text>
          <UnorderedList mt={1}>
            <ListItem>
              Developed a web application that shows how statistics are used to
              evaluate NBA performances to promote STEM learning
            </ListItem>
            <ListItem>
              Created a 24-hour web-scraping service with <b>Django</b> and{" "}
              <b>BeautifulSoup</b> to retrieve, parse, and store statistical
              data, including percentiles, regular statistics, and advanced
              metrics of 250+ NBA players and teams
            </ListItem>
            <ListItem>
              Analyzed player and team data using <b>Python</b> to identify
              trends, potential award winners like MVP and DPOY, and track
              player performance improvements and declines
            </ListItem>
            <ListItem>
              Presented statistics and data visualizations in an elegant and
              digestible format in auto-generated player and team pages, build
              with <b>React</b> and <b>Recharts</b>
            </ListItem>
            <ListItem>
              Implemented machine learning with <b>scikit-learn</b> to predict
              player performance in 15+ statistics for future seasons
            </ListItem>
          </UnorderedList>
        </Box>
        <Box mt={5}>
          <Text as="i">More to come...</Text>
        </Box>
      </SectionLayout>
    </>
  );
}
