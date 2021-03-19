import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { SideMenuContent } from "./SideMenuContent";
import { SideMenuContentSmall } from "./SideMenuContentSmall";
interface SideMenuProps {
  isMinimized: boolean;
}

export const SideMenu: React.FC<SideMenuProps> = ({ isMinimized }) => {
  const bg = useColorModeValue("white", "#202020");

  return (
    <>
      <Box
        display={{ base: "none", xl: "block" }}
        className="sidebar scrollbar"
        w={isMinimized ? "xxs" : "2sm"}
        minW={isMinimized ? "xxs" : "2sm"}
        maxH="94vh"
        top="3.5em"
        zIndex={1}
        bg={bg}
      >
        {isMinimized ? <SideMenuContentSmall /> : <SideMenuContent />}
      </Box>
    </>
  );
};
