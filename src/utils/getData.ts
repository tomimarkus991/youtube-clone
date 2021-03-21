import axios from "axios";

export const getVideos = async (next: any) => {
  let response = await axios.get(
    "https://www.googleapis.com/youtube/v3/videos",
    {
      params: {
        key: process.env.NEXT_PUBLIC_API_KEY,
        part: "snippet,status,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 20,
        pageToken: next,
      },
    }
  );

  let data = await response.data;
  return data;
};

export const getUserProfile = async (id: string) => {
  console.log(id);

  let response = await axios.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      params: {
        key: process.env.NEXT_PUBLIC_API_KEY,
        part: "snippet",
        id,
      },
    }
  );

  let data = await response.data;
  return data;
};
