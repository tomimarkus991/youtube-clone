import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BsList } from "react-icons/bs";
import { ImYoutube, ImYoutube2 } from "react-icons/im";
import { SideMenuContent } from "./SideMenuContent";

interface DrawerMenuProps {}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconColor = useColorModeValue("#2D3748", "white");
  return (
    <>
      <IconButton
        icon={<BsList size={25} />}
        aria-label="List"
        variant="ghost"
        size="md"
        onClick={onOpen}
        display={{ base: "inline-flex", xl: "none" }}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Button variant="ghost">
              <Box marginRight={{ sm: "5px" }}>
                <ImYoutube size={35} color="red" />
              </Box>
              <Box>
                <ImYoutube2 size={50} color={iconColor} />
              </Box>
            </Button>
          </DrawerHeader>
          <DrawerBody className="scrollbar" paddingX={0}>
            <SideMenuContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
