import { Box, IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { SignInButton } from "../Buttons/SignInButton";
import { Settings } from "./Settings";
import { YoutubeApps } from "./YoutubeApps";

interface NavbarRightSideProps {}

export const NavbarRightSide: React.FC<NavbarRightSideProps> = ({}) => {
  return (
    <Box marginRight={{ base: 0, sm: "5px", md: "20px" }}>
      <Tooltip label="Search" aria-label="Search">
        <IconButton
          icon={<AiOutlineSearch />}
          display={{ base: "inline-flex", md: "none" }}
          aria-label="search"
          variant="ghost"
        />
      </Tooltip>
      <Tooltip
        label="Search with your voice"
        aria-label="Search with your voice"
      >
        <IconButton
          icon={<BiMicrophone />}
          aria-label="search"
          display={{ base: "inline-flex", md: "none" }}
          variant="ghost"
        />
      </Tooltip>
      <YoutubeApps />
      <Settings />
      <SignInButton />
    </Box>
  );
};
