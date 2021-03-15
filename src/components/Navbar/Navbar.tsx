import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import { NavbarLeftSide } from "./NavbarLeftSide";
import { NavbarRightSide } from "./NavbarRightSide";
import { Search } from "./Search";

interface NavbarProps {
  isMinimized: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMinimized, setIsMinimized }) => {
  const bg = useColorModeValue("white", "gray.700");
  return (
    <Flex
      position="sticky"
      top={0}
      zIndex={2}
      p={2}
      bg={bg}
      borderBottomWidth="1px"
    >
      <Flex flex={1} align="center" m="auto">
        <NavbarLeftSide
          isMinimized={isMinimized}
          setIsMinimized={setIsMinimized}
        />
        <Spacer />

        <Search />

        <Spacer />

        <NavbarRightSide />
      </Flex>
    </Flex>
  );
};
export default Navbar;
