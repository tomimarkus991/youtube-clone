import { Box, Text } from "@chakra-ui/layout";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";
import { FaEllipsisV, FaMoon, FaSun, FaTh, FaYoutube } from "react-icons/fa";
import { HiOutlineTranslate } from "react-icons/hi";
import { IoGlobeOutline } from "react-icons/io5";
import { MdFeedback, MdKeyboard, MdSettings } from "react-icons/md";
import { RiShieldUserFill } from "react-icons/ri";
import { SiYoutubetv } from "react-icons/si";
import { SignInButton } from "../Buttons/SignInButton";

interface NavbarRightSideProps {}

export const NavbarRightSide: React.FC<NavbarRightSideProps> = ({}) => {
  const iconColor = useColorModeValue("#2D3748", "white");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box marginRight={{ md: "20px", sm: "0px" }}>
      <Menu autoSelect={false}>
        <Tooltip label="YouTube Apps" aria-label="YouTube Apps">
          <MenuButton
            as={IconButton}
            icon={<FaTh color={iconColor} />}
            variant="ghost"
            mr="0.5em"
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

      <Menu autoSelect={false}>
        <Tooltip label="Settings" aria-label="A tooltip">
          <MenuButton
            as={IconButton}
            icon={<FaEllipsisV color={iconColor} />}
            variant="ghost"
            mr="1em"
          />
        </Tooltip>
        <MenuList>
          <MenuItem>
            <IconButton
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              aria-label="Switch color-mode"
              variant="ghost"
              w="100%"
            />
          </MenuItem>

          <MenuItem as={Menu} autoSelect={false}>
            <MenuButton
              as={Button}
              leftIcon={<HiOutlineTranslate size={25} />}
              rightIcon={<CgChevronDown size={18} />}
              variant="ghost"
            >
              Language: English
            </MenuButton>
            <MenuList>
              <MenuOptionGroup
                defaultValue="english"
                title="Language"
                type="radio"
              >
                <MenuItemOption value="english">English</MenuItemOption>
                <MenuItemOption value="estonian">Estonian</MenuItemOption>
                <MenuItemOption value="portugese">Portugese</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </MenuItem>

          <MenuItem>
            <MdSettings size={25} />
            <Text marginLeft={3}>Settings</Text>
          </MenuItem>

          <MenuItem>
            <RiShieldUserFill size={25} />
            <Text marginLeft={3}>Your data in YouTube</Text>
          </MenuItem>
          <MenuItem>
            <BiHelpCircle size={25} />
            <Text marginLeft={3}>Help</Text>
          </MenuItem>
          <MenuItem>
            <MdFeedback size={25} />
            <Text marginLeft={3}>Send feedback</Text>
          </MenuItem>
          <MenuItem>
            <MdKeyboard size={25} />
            <Text marginLeft={3}>Keyboard shortcuts</Text>
          </MenuItem>
          <MenuItem as={Menu} autoSelect={false}>
            <MenuButton
              as={Button}
              leftIcon={<IoGlobeOutline size={25} />}
              rightIcon={<CgChevronDown size={18} />}
              variant="ghost"
            >
              Location: Estonia
            </MenuButton>
            <MenuList>
              <MenuOptionGroup
                defaultValue="estonia"
                title="Location"
                type="radio"
              >
                <MenuItemOption value="england">England</MenuItemOption>
                <MenuItemOption value="estonia">Estonia</MenuItemOption>
                <MenuItemOption value="portugal">Portugal</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Text marginLeft={3}>Restricted Mode: Off</Text>
          </MenuItem>
        </MenuList>
      </Menu>

      <SignInButton />
    </Box>
  );
};
