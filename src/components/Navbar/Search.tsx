import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        w={{ base: "0em", sm: "5em", md: "15em", lg: "30em", xl: "30em" }}
      >
        <InputGroup>
          <Input type="text" placeholder="Search" borderRadius="0" />
          <Tooltip label="Search" aria-label="Search">
            <InputRightAddon
              children={<AiOutlineSearch />}
              cursor="pointer"
              w="4em"
              justifyContent="center"
            />
          </Tooltip>
        </InputGroup>
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Tooltip
          label="Search with your voice"
          aria-label="Search with your voice"
        >
          <IconButton
            marginLeft="1em"
            icon={<BiMicrophone />}
            aria-label="search"
            variant="ghost"
          />
        </Tooltip>
      </Box>
    </>
  );
};
