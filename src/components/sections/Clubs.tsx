import React from "react";
import { Box, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import SectionLayout from "../SectionLayout";

export default function Clubs() {
  return (
    <>
      <SectionLayout>
        <Text fontSize="3xl" fontWeight={800}>
          Clubs
        </Text>
        <Box mt={5}>
          <Box>
            <Text fontSize="xl" fontWeight={600}>
              <Link href="https://www.sandboxnu.com/" target="_blank">
                Sandbox @ Northeastern
              </Link>
            </Text>
          </Box>
          <Box>
            <Text fontSize="l">
              Sandbox is Northeastern's student-led software development
              consultancy building custom software solution for clients in the
              Northeastern and Boston community. I'm currently working on{" "}
              <b>MFA Forms</b>, a form management and automation platform for
              the <b>Museum of Fine Arts, Boston</b>. MFA Forms is built with{" "}
              <b>Next.js</b>, <b>Nest.js</b>, <b>Prisma ORM</b>, and{" "}
              <b>Microsoft Azure</b>. The project is currently in the
              development, but you can check out the{" "}
              <Link
                href="https://github.com/sandboxnu/mfa-form-automator"
                target="_blank"
              >
                <b>GitHub repository</b>
              </Link>{" "}
              for more information.
            </Text>
          </Box>
          <Box mt={2}>
            <Text fontSize="l" fontWeight={600}>
              Technical Lead
            </Text>
            <Text fontSize="l">January 2024 - Present</Text>
            <UnorderedList mt={1}>
              <ListItem>
                Communicate with MFA’s IT department to understand expectations,
                deadlines, and constraints of the platform
              </ListItem>
              <ListItem>
                Design and present system architecture, libraries and processes
                to validate integration with the MFA’s existing services
              </ListItem>
              <ListItem>
                Provide mentorship to team of 4+ developers by reviewing code,
                providing feedback, and contributing to technical articles
              </ListItem>
              <ListItem>
                Manage <b>AGILE</b> methodologies by assigning tickets and code
                reviews off a <b>JIRA</b> board
              </ListItem>
            </UnorderedList>
          </Box>
          <Box mt={2}>
            <Text fontSize="l" fontWeight={600}>
              Software Developer
            </Text>
            <Text fontSize="l">January 2023 - Present</Text>
            <UnorderedList mt={1}>
              <ListItem>
                Built 20+ core backend services, routes, and models with{" "}
                <b> Nest.js</b> and <b>Prisma ORM</b> regarding <b>REST API</b>{" "}
                operations on departments, signatures, and forms
              </ListItem>
              <ListItem>
                Integrated backend user and form services with frontend using
                custom <b>React</b> hooks and <b>Context API</b> to support code
                reuse
              </ListItem>
              <ListItem>
                Upgraded JWT authentication with <b>Azure Entra</b> and{" "}
                <b>NextAuth</b>, ensuring access to users in the MFA’s active
                directory
              </ListItem>
              <ListItem>
                Implemented <b>Azure Blob Storage</b> integration within{" "}
                <b>Next.js</b> frontend, enabling seamless upload and rendering
                of PDFs
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box mt={10}>
          <Box>
            <Text fontSize="xl" fontWeight={600}>
              <Link href="https://oasisneu.com/" target="_blank">
                Oasis @ Northeastern
              </Link>
            </Text>
          </Box>
          <Box>
            <Text fontSize="l">
              Oasis is a eight-week long web development bootcamp where students
              learn to build full-stack web applications with modern
              technologies. In this program, I built <b>TransitNU</b>, a mobile
              application that provides real-time tracking of MBTA trains in the
              Boston area. The app is built with <b>React Native</b>,{" "}
              <b>Django</b> and <b>PostgreSQL</b>. You can check out the the
              project on the featured projects at{" "}
              <Link href="https://oasisneu.com/join" target="_blank">
                <b>Oasis</b>
              </Link>{" "}
              or the{" "}
              <Link
                href="https://www.notion.so/oasisneu/TransitNU-37f3b4ed2c8c48a6b8b57d309c5480d1"
                target="_blank"
              >
                <b>Notion</b>
              </Link>{" "}
              page for more information. You can find the source code of the app
              on the{" "}
              <Link
                href="https://github.com/kaiyangzheng/transitnu-frontend"
                target="_blank"
              >
                <b>frontend GitHub repository</b>
              </Link>{" "}
              and the{" "}
              <Link
                href="https://github.com/kaiyangzheng/transitnu-api"
                target="_blank"
              >
                <b>backend GitHub repository</b>
              </Link>
              .
            </Text>
          </Box>
          <Box mt={2}>
            <Text fontSize="l" fontWeight={600}>
              Software Developer
            </Text>
            <Text fontSize="l">Septemeber 2022 - December 2022</Text>
            <UnorderedList mt={1}>
              <ListItem>
                Developed a mobile application to display real-time public
                transit information for the MBTA, supporting Northeastern
                specific features, such as popular stops, find-your-friend,
                efficient routes from buildings on campus
              </ListItem>
              <ListItem>
                Designed and implemented backend services to support
                asynchronous data retrieval, storage and indexing (from the MBTA
                API) with <b>APScheduler</b> and <b>Django</b> that allowed for
                real-time display of 100+ vehicles and 150+ stops
              </ListItem>
              <ListItem>
                Constructed an intuitive user interface using{" "}
                <b>React Native</b>, incorporating a real-time map component;
              </ListItem>
              <ListItem>
                Implemented backend polling logic that optimally reduces API
                calls by 200%+ by querying for significant transit data updates
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </SectionLayout>
    </>
  );
}
