import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image as ChakraImage } from "@chakra-ui/image";
import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/layout";
import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
import { getUserProfile } from "../../utils/getData";
interface VideoProps {
  video: any;
  id: string;
}
// thumbnail verified
export const Video: React.FC<VideoProps> = ({ video, id }) => {
  let { contentDetails, snippet, statistics } = video;
  let { channelTitle, publishedAt, title, thumbnails } = snippet;
  const [user, setUser] = useState<any>();

  const up = async () => {
    let user = await getUserProfile(snippet.channelId);
    setUser(user);
  };

  useEffect(() => {
    up();
  }, []);

  const seconds = moment.duration(contentDetails.duration).asSeconds();
  let duration = moment.utc(seconds * 1000).format("m:ss");

  const textColor = useColorModeValue("#2D3748", "white");
  const underTextColor = useColorModeValue("#676767", "#A3A3A3");
  return (
    <Box maxW="360px" maxH="300px" mb="1.5em" color={textColor} key={id}>
      <Box position="relative">
        <ChakraImage
          w={{ base: "29em", md: "27em", lg: "25em", xl: "23em" }}
          src={thumbnails.medium.url}
          alt="Thumbnail"
        />
        <Badge
          position="absolute"
          bottom={1}
          right={1}
          bg="gray.900"
          fontSize="14px"
          color="white"
        >
          {duration}
        </Badge>
      </Box>
      <Flex mt="0.5em" boxSizing="border-box" marginX="1em">
        {user ? (
          <Avatar src={user.items[0].snippet.thumbnails.default.url} />
        ) : (
          <Avatar src="https://bit.ly/broken-link" />
        )}

        <Box ml="3">
          <Text fontWeight="bold" maxW="25em" maxH="3em" overflow="hidden">
            {title}
          </Text>
          <HStack color={underTextColor}>
            <Text fontSize="sm">{channelTitle}</Text>
            <Text fontSize="sm">{true ? <GoVerified /> : null}</Text>
          </HStack>
          <HStack spacing="0.1em" minW="160px" color={underTextColor}>
            <Text fontSize="sm">
              {numeral(statistics.viewCount).format("Oa").toUpperCase()}
            </Text>
            •<Text fontSize="sm">{moment(publishedAt).fromNow()}</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
