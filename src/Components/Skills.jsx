import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WordpressProjects from "./WordpressProjects";
import WebflowProjects from "./WebflowProjects";
import EmailtemplateProjects from "./EmailtemplateProjects";
import HtmlProjects from "./HtmlProjects";
import FigmaToReact from "./FigmaToReact";
import MarketingLandingPages from "./MarketingLandingPages";

function Skills() {
  return (
    <div id="expertise" className="w-full">
      <div className="container relative h-full py-20 flex-col px-4 sm:px-6 md:px-8 lg:px-0">
        <h3 className="text-center font-bold text-[28px]">
          In the past few years I have worked on lots of web and Graphic related
          projects
        </h3>
        <h4 className="text-center text-[24px]">
          Below are the list of few projects that will showcase my strength.
        </h4>
        <Tabs className={"mt-10"}>
          <TabList  className={ "flex flex-wrap justify-center items-center lg:gap-x-5 lg:gap-y-5 gap-4"}>
            
            <Tab  className={ "text-black lg:px-4 px-4 py-2 font-bold text-center rounded-full border lg:text-[20px] text-[14px] hover:bg-[#391d5d] hover:text-white cursor-pointer"}>Wordpress</Tab>
            <Tab  className={ "text-black lg:px-4 px-4 py-2 font-bold text-center rounded-full border lg:text-[20px] text-[14px] hover:bg-[#391d5d] hover:text-white cursor-pointer"}>Webflow</Tab>
            <Tab  className={ "text-black lg:px-4 px-4 py-2 font-bold text-center rounded-full border lg:text-[20px] text-[14px] hover:bg-[#391d5d] hover:text-white cursor-pointer"}>Email Template</Tab>
            <Tab  className={ "text-black lg:px-4 px-4 py-2 font-bold text-center rounded-full border lg:text-[20px] text-[14px] hover:bg-[#391d5d] hover:text-white cursor-pointer"}>Figma to HTML</Tab>
            <Tab  className={ "text-black lg:px-4 px-4 py-2 font-bold text-center rounded-full border lg:text-[20px] text-[14px] hover:bg-[#391d5d] hover:text-white cursor-pointer"}>Figma to React</Tab>
            <Tab  className={ "text-black lg:px-4 px-4 py-2 font-bold text-center rounded-full border lg:text-[20px] text-[14px] hover:bg-[#391d5d] hover:text-white cursor-pointer"}>Marketing Landing Pages</Tab>
            
          </TabList>
<div className="py-5 mt-5">
          <TabPanel>
           <WordpressProjects />
          </TabPanel>
          <TabPanel>
           <WebflowProjects />
          </TabPanel>
          <TabPanel>
           <EmailtemplateProjects />
          </TabPanel>
          <TabPanel>
           <HtmlProjects />
          </TabPanel>
          <TabPanel>
           <FigmaToReact />
          </TabPanel>
          <TabPanel>
           <MarketingLandingPages />
          </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Skills;
