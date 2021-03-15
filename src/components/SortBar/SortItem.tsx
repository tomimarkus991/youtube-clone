import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import React from "react";

interface SortItemProps {
  title: string;
}

export const SortItem: React.FC<SortItemProps> = ({ title }) => {
  return (
    <Button borderRadius="3xl">
      <Text>{title}</Text>
    </Button>
  );
};
