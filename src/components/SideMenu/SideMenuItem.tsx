import { Flex } from "@chakra-ui/layout";
import React from "react";

interface SideMenuItemProps {}

export const SideMenuItem: React.FC<SideMenuItemProps> = ({ children }) => {
  return (
    <Flex borderTopWidth="1px" flex={1} flexDirection="column">
      {children}
    </Flex>
  );
};
