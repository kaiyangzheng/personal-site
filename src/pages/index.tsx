import * as React from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import ResumeNav from "../components/ResumeNav";
import { About, Experience, Clubs, Projects } from "../components/Sections";

const getSection = (location: string) => {
  switch (location) {
    case "About":
      return <About />;
    case "Experience":
      return <Experience />;
    case "Clubs":
      return <Clubs />;
    case "Projects":
      return <Projects />;
  }
};

const IndexPage = () => {
  const [location, setLocation] = React.useState("About");
  return (
    <>
      <Layout>
        <Profile />
        <ResumeNav location={location} setLocation={setLocation} />

        {getSection(location)}
      </Layout>
    </>
  );
};

export const Head = () => {
  return <title>Kaiyang Zheng</title>;
};

export default IndexPage;
