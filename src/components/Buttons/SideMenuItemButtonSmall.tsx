import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Text } from "@chakra-ui/layout";
import React, { JSXElementConstructor, ReactElement } from "react";

interface SideMenuItemButtonSmallProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  title: string;
  active?: boolean;
}

export const SideMenuItemButtonSmall: React.FC<SideMenuItemButtonSmallProps> = ({
  icon,
  active,
  title,
}) => {
  const color = useColorModeValue("gray.700", "white");
  return (
    <Button
      color={color}
      size="sm"
      h="5.3em"
      borderRadius={0}
      variant="ghost"
      isActive={active}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      {icon}
      <Text fontSize="x-small" marginTop="1em">
        {title}
      </Text>
    </Button>
  );
};
