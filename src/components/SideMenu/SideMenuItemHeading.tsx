import { Text } from "@chakra-ui/layout";
import React from "react";

interface SideMenuItemHeadingProps {
  title: string;
}

export const SideMenuItemHeading: React.FC<SideMenuItemHeadingProps> = ({
  title,
}) => {
  return (
    <Text color="gray.400" fontWeight="semibold" marginLeft="1em" mt="0.3em">
      {title}
    </Text>
  );
};
