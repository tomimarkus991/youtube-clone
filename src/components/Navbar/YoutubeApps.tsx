import { Text } from "@chakra-ui/layout";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaTh, FaYoutube } from "react-icons/fa";
import { SiYoutubetv } from "react-icons/si";
interface YoutubeAppsProps {}

export const YoutubeApps: React.FC<YoutubeAppsProps> = ({}) => {
  const iconColor = useColorModeValue("#2D3748", "white");
  return (
    <Menu autoSelect={false}>
      <Tooltip label="YouTube Apps" aria-label="YouTube Apps">
        <MenuButton
          as={IconButton}
          icon={<FaTh color={iconColor} />}
          variant="ghost"
          mr={{ base: "0em", md: "0.5em" }}
        />
      </Tooltip>
      <MenuList>
        <MenuItem>
          <SiYoutubetv size={25} color="red" />
          <Text marginLeft={3}>YouTube TV</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <FaYoutube size={25} color="red" />
          <Text marginLeft={3}>YouTube Music</Text>
        </MenuItem>
        <MenuItem>
          <FaYoutube size={25} color="red" />
          <Text marginLeft={3}>YouTube Kids</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <FaYoutube size={25} color="red" />
          <Text marginLeft={3}>Creator Academy</Text>
        </MenuItem>
        <MenuItem>
          <FaYoutube size={25} color="red" />
          <Text marginLeft={3}>YouTube for Artists</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
