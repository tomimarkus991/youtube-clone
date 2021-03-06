import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import React, { JSXElementConstructor, ReactElement } from "react";

interface SideMenuItemButtonProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  title: string;
  active?: boolean;
}

export const SideMenuItemButton: React.FC<SideMenuItemButtonProps> = ({
  icon,
  active,
  title,
}) => {
  const color = useColorModeValue("gray.700", "white");
  return (
    <Button
      borderRadius={0}
      variant="ghost"
      justifyContent="flex-start"
      leftIcon={icon}
      isActive={active}
      color={color}
      iconSpacing="1.5em"
      pl="1.5em"
      fontSize="md"
    >
      {title}
    </Button>
  );
};
