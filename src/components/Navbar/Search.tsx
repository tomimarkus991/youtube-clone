import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
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
        className="search"
        flexDirection="row"
        display={{ base: "none", md: "flex" }}
        w={["0em", "0em", "15em", "28em", "30em"]}
        // w={{ md: "10em" }}
      >
        <InputGroup>
          <Input type="text" placeholder="Search" w="lg" />
          <Tooltip label="Search" aria-label="Search">
            <InputRightElement
              children={
                <IconButton
                  icon={<AiOutlineSearch />}
                  aria-label="search"
                  variant="ghost"
                />
              }
            />
          </Tooltip>
        </InputGroup>
      </Box>
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
    </>
  );
};
