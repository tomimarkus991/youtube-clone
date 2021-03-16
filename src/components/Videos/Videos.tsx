import { Grid } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { getVideos } from "../../utils/getData";
import { Video } from "./Video";

interface VideosProps {}

export const Videos: React.FC<VideosProps> = ({}) => {
  // react scroll pagination
  // what stuff bar
  const [data, setData] = useState([]);
  const up = async () => {
    let data = await getVideos();
    setData(data.items);
  };
  useEffect(() => {
    up();
  }, []);
  return (
    <Grid
      boxSizing="border-box"
      marginY="1em"
      marginX={{ base: "1em", xl: "1.5em", xsl: "1em", xxl: "4.5em" }}
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
      w="100%"
      justifyItems="center"
    >
      {data.map((video: any) => {
        return <Video video={video} id={video.id} />;
      })}
    </Grid>
  );
};
