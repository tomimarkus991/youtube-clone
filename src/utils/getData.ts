export const getVideos = async () => {
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_API_KEY}&chart=mostPopular&maxResults=20&part=snippet,status,contentDetails,statistics`
  );
  let data = await response.json();
  return data;
};

export const getNextVideos = async (next: any) => {
  console.log("token", next);

  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_API_KEY}&chart=mostPopular&maxResults=20&part=snippet,status,contentDetails,statistics&pageToken=${next}`
  );
  let data = await response.json();
  return data;
};

export const getUserProfile = async (id: string) => {
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${process.env.NEXT_PUBLIC_API_KEY}&part=snippet&id=${id}`
  );
  let data = await response.json();
  return data;
};
