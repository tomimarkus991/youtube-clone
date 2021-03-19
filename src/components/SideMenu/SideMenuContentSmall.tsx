import { Flex } from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { MdHistory, MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SideMenuItemButtonSmall } from "../Buttons/SideMenuItemButtonSmall";

interface SideMenuContentSmallProps {}

export const SideMenuContentSmall: React.FC<SideMenuContentSmallProps> = ({}) => {
  return (
    <Flex direction="column" alignSelf="flex-start">
      <SideMenuItemButtonSmall
        icon={<FaHome size={24} />}
        active={true}
        title="Home"
      />
      <SideMenuItemButtonSmall
        icon={<IoMdFlame size={24} />}
        title="Trending"
      />
      <SideMenuItemButtonSmall
        icon={<MdSubscriptions size={24} />}
        title="Subscriptions"
      />

      <SideMenuItemButtonSmall
        icon={<MdVideoLibrary size={24} />}
        title="Library"
      />
      <SideMenuItemButtonSmall icon={<MdHistory size={24} />} title="History" />
    </Flex>
  );
};
