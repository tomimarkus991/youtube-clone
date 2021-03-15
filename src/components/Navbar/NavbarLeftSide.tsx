import { Box, Button, IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BsList } from "react-icons/bs";
import { ImYoutube, ImYoutube2 } from "react-icons/im";
import { DrawerMenu } from "../SideMenu/DrawerMenu";

interface NavbarLeftSideProps {
  isMinimized: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarLeftSide: React.FC<NavbarLeftSideProps> = ({
  isMinimized,
  setIsMinimized,
}) => {
  const iconColor = useColorModeValue("#2D3748", "white");

  return (
    <Box marginLeft={{ base: "0px", md: "20px" }}>
      <IconButton
        icon={<BsList size={25} />}
        aria-label="List"
        variant="ghost"
        size="md"
        onClick={() => setIsMinimized(!isMinimized)}
        display={{ base: "none", xl: "inline-flex" }}
      />
      <DrawerMenu />
      <Button variant="ghost">
        <Box marginRight={{ sm: "2px", md: "5px" }}>
          <ImYoutube size={35} color="red" />
        </Box>
        <Box display={{ base: "none", sm: "block" }}>
          <ImYoutube2 size={50} color={iconColor} />
        </Box>
      </Button>
    </Box>
  );
};
