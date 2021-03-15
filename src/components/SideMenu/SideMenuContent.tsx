import { Text } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BiHelpCircle, BiNews } from "react-icons/bi";
import { BsCameraVideoFill } from "react-icons/bs";
import { CgLivePhoto } from "react-icons/cg";
import { FaFlag, FaHome, FaTrophy } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { IoAddCircle, IoMusicalNotesSharp } from "react-icons/io5";
import {
  MdFeedback,
  MdHistory,
  MdSettings,
  MdSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { SideMenuItemButton } from "../Buttons/SideMenuItemButton";
import { SignInButton } from "../Buttons/SignInButton";
import { SideMenuItem } from "./SideMenuItem";
import { SideMenuItemHeading } from "./SideMenuItemHeading";

interface SideMenuContentProps {}

export const SideMenuContent: React.FC<SideMenuContentProps> = ({}) => {
  return (
    <Flex direction="column">
      <SideMenuItemButton
        icon={<FaHome size={25} />}
        active={true}
        title="Home"
      />
      <SideMenuItemButton icon={<IoMdFlame size={25} />} title="Trending" />
      <SideMenuItemButton
        icon={<MdSubscriptions size={25} />}
        title="Subscriptions"
      />

      <SideMenuItem>
        <SideMenuItemButton
          icon={<MdVideoLibrary size={25} />}
          title="Library"
        />
        <SideMenuItemButton icon={<MdHistory size={25} />} title="History" />
      </SideMenuItem>

      <SideMenuItem>
        <Box boxSizing="border-box" margin="20px">
          <Text marginBottom="0.6em">
            Sign in to like videos, comment, and subscribe.
          </Text>
          <SignInButton />
        </Box>
      </SideMenuItem>

      <SideMenuItem>
        <SideMenuItemHeading title="BEST OF YOUTUBE" />
        <SideMenuItemButton
          icon={<IoMusicalNotesSharp size={25} />}
          title="Music"
        />
        <SideMenuItemButton icon={<FaTrophy size={25} />} title="Sports" />
        <SideMenuItemButton
          icon={<SiYoutubegaming size={25} />}
          title="Gaming"
        />
        <SideMenuItemButton icon={<BiNews size={25} />} title="News" />
        <SideMenuItemButton icon={<CgLivePhoto size={25} />} title="Live" />
        <SideMenuItemButton
          icon={<BsCameraVideoFill size={25} />}
          title="360* video"
        />
      </SideMenuItem>

      <SideMenuItem>
        <SideMenuItemButton
          icon={<IoAddCircle size={25} />}
          title="Browse channels"
        />
      </SideMenuItem>

      <SideMenuItem>
        <SideMenuItemHeading title="MORE FROM YOUTUBE" />
        <SideMenuItemButton
          icon={<AiFillYoutube size={25} />}
          title="YouTube Premium"
        />
        <SideMenuItemButton icon={<CgLivePhoto size={25} />} title="Live" />
      </SideMenuItem>

      <SideMenuItem>
        <SideMenuItemButton icon={<MdSettings size={25} />} title="Settings" />
        <SideMenuItemButton
          icon={<FaFlag size={25} />}
          title="Report history"
        />
        <SideMenuItemButton icon={<BiHelpCircle size={25} />} title="Help" />
        <SideMenuItemButton
          icon={<MdFeedback size={25} />}
          title="Send feedback"
        />
      </SideMenuItem>

      <SideMenuItem>
        <Box boxSizing="border-box" margin="1em">
          <Box marginBottom={2}>
            <Text fontSize="sm">
              About Press Copyright Contact us Creators Advertise Developers
            </Text>
          </Box>
          <Box marginBottom={2}>
            <Text fontSize="sm">
              Terms Privacy Policy & Safety How YouTube works Test new features
            </Text>
          </Box>
          <Box>
            <Text color="gray.400" fontSize="sm">
              © 2021 Google LLC
            </Text>
          </Box>
        </Box>
      </SideMenuItem>
    </Flex>
  );
};
