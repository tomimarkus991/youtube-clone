import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { SideMenu } from "../components/SideMenu/SideMenu";
import { Videos } from "../components/Videos/Videos";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <>
      <Navbar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      <Flex flexDirection="row" position="sticky">
        <SideMenu isMinimized={isMinimized} />
        {/* <Flex flexDirection="column"> */}
        {/* <Divider orientation="horizontal" /> */}
        <Videos />
        {/* </Flex> */}
      </Flex>
    </>
  );
};
export default Index;
