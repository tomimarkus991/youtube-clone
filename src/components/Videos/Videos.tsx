import { Flex, Grid } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNextVideos, getVideos } from "../../utils/getData";
import { Video } from "./Video";

interface VideosProps {}

export const Videos: React.FC<VideosProps> = ({}) => {
  const [mainData, setData] = useState<any>([]);
  const [nextPageToken, setNextPageToken] = useState();
  const [hasMore, setHasMore] = useState(true);

  const up = async () => {
    let response = await getVideos();

    setData(response.items);
    setNextPageToken(response.nextPageToken);
  };
  const next = async () => {
    let data = await getNextVideos(nextPageToken);

    setData((oldState: any) => [...oldState, ...data.items]);
    setNextPageToken(data.nextPageToken);
  };
  useEffect(() => {
    up();
  }, []);
  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);
  useEffect(() => {
    if (nextPageToken === "") {
      setHasMore(false);
    }
  }, [nextPageToken]);
  return (
    <Flex
      className="scrollbar"
      boxSizing="border-box"
      marginY="1em"
      marginX={{ base: "1em", xl: "1.5em", xsl: "1em", xxl: "4.5em" }}
      w="100%"
      justifyContent="center"
    >
      <InfiniteScroll
        dataLength={mainData.length}
        next={next}
        hasMore={hasMore}
        loader={<div></div>}
        endMessage={<div></div>}
        scrollThreshold={0.9}
      >
        <Grid
          templateRows={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          {mainData.map((video: any) => (
            <Video video={video} id={video.id} />
          ))}
        </Grid>
      </InfiniteScroll>
    </Flex>
  );
};
