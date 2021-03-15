import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { SortItem } from "./SortItem";

interface SortProps {}

export const Sort: React.FC<SortProps> = ({}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const changeActiveItem = (activeItemIndex: number) =>
    setActiveItemIndex(activeItemIndex);
  return (
    <ItemsCarousel
      // Carousel configurations
      numberOfCards={13}
      gutter={30}
      showSlither={true}
      firstAndLastGutter={true}
      freeScrolling={false}
      // Active item configurations
      requestToChangeActive={changeActiveItem}
      activeItemIndex={activeItemIndex}
      activePosition={"center"}
      chevronWidth={24}
      rightChevron={">"}
      leftChevron={"<"}
      outsideChevron={false}
    >
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
      <SortItem title="All" />
    </ItemsCarousel>
    // <HStack
    //   className="carousel"
    //   spacing={4}
    //   borderY="1px"
    //   borderColor="gray.600"
    //   p="0.5em"
    //   top="3.5em"
    //   bg="gray.800"
    //   zIndex={2}
    // >
    //   <IconButton
    //     aria-label="prev"
    //     icon={<GrFormPrevious />}
    //     onClick={(e) => prevClick(e)}
    //   />
    //   <SortItem title="All" />
    //   <SortItem title="Playlists" />
    //   <SortItem title="Chill-out music" />
    //   <SortItem title="Melodramas" />
    //   <SortItem title="All" />
    //   <SortItem title="Playlists" />
    //   <SortItem title="Chill-out music" />
    //   <SortItem title="Melodramas" />
    //   <SortItem title="All" />
    //   <SortItem title="Playlists" />
    //   <SortItem title="Chill-out music" />
    //   <SortItem title="Melodramas" />
    //   <SortItem title="All" />
    //   <SortItem title="Playlists" />
    //   <SortItem title="Chill-out music" />
    //   <SortItem title="Melodramas" />
    //   <IconButton
    //     aria-label="next"
    //     icon={<GrFormNext />}
    //     onClick={(e) => nextClick(e)}
    //   />
    // </HStack>
  );
};
