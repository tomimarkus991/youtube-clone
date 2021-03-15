import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image as ChakraImage } from "@chakra-ui/image";
import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { BsDot } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
interface VideoProps {}

export const Video: React.FC<VideoProps> = ({}) => {
  const property = {
    videoUrl:
      "https://i.ytimg.com/vi/LDmj_GOeRMU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVy1F5SW6xS35HRLAf0ikHGND2fA",
    videoAlt: "Video",
    profileUrl: "../../../../public/mrbeanprofile.jpg",
    profileAlt: "Profile",
    length: "12:21",
    title:
      "FULL MATCH - John Cena & The Rock vs. The Miz & R-Truth: Survivor Series 2011 FULL MATCH - John Cena & The Rock vs. The Miz & R-Truth: Survivor Series 2011",
    channelName: "Mr Bean",
    verified: true,
    views: "23M views",
    release: "3 years ago",
  };
  // let bigTitle = property.title.substring(0, 80) + "...";
  const textColor = useColorModeValue("#2D3748", "white");
  return (
    <Box maxW="360px" maxH="300px" mb="1.5em" color={textColor}>
      <Box position="relative">
        <ChakraImage src={property.videoUrl} alt={property.videoAlt} />
        <Badge
          position="absolute"
          bottom={1}
          right={1}
          bg="gray.900"
          fontSize="14px"
        >
          {property.length}
        </Badge>
      </Box>
      <Flex mt="0.5em" boxSizing="border-box" marginX="1em">
        <Avatar src="/mrbeanprofile.jpg" />
        <Box ml="3">
          <Text fontWeight="bold" maxW="25em" maxH="3em" overflow="hidden">
            {property.title}
          </Text>
          <HStack>
            <Text fontSize="sm">{property.channelName}</Text>
            <Text fontSize="sm">
              {property.verified ? <GoVerified /> : null}
            </Text>
          </HStack>
          <HStack spacing="0.1em" minW="160px">
            <Text fontSize="sm">{property.views}</Text>
            <BsDot />
            <Text fontSize="sm">{property.release}</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
