import { Box, Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { BsList } from "react-icons/bs";
import { DrawerMenu } from "../SideMenu/DrawerMenu";
import { YTIcon } from "../YTIcon";

interface NavbarLeftSideProps {
  isMinimized: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarLeftSide: React.FC<NavbarLeftSideProps> = ({
  isMinimized,
  setIsMinimized,
}) => {
  return (
    <Box marginLeft={{ base: "0px", md: "10px" }}>
      <IconButton
        icon={<BsList size={25} />}
        aria-label="List"
        variant="ghost"
        size="md"
        onClick={() => setIsMinimized(!isMinimized)}
        display={{ base: "none", xl: "inline-flex" }}
      />
      <DrawerMenu />
      <Icon
        ml={{ base: "0.3em", sm: "1em" }}
        mr={{ base: "0.2em", sm: "0" }}
        as={YTIcon}
        w={{ base: "5em", sm: "6em" }}
        h="2em"
        cursor="pointer"
      />
    </Box>
  );
};
