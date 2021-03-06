import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMiniPlayer } from "react-icons/cg";
import { useStoreState } from "easy-peasy";
import Player from "./player";

const defaultImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-YpFHvvLWH7c%2FUcQFriyLFjI%2FAAAAAAAACgw%2FSNi-PZdRy04%2Fs1600%2FUsher.jpg&f=1&nofb=1";

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs);
  const activeSong = useStoreState((state: any) => state.activeSong);
  return (
    <Box
      width="100vw"
      height="100px"
      bg="gray.900"
      padding="10px"
      overflow="hidden"
    >
      <Flex align="center">
        {/* artist name/ song name */}
        <Flex padding="20px" color="white" width="30%" align="center">
          {activeSong ? (
            <>
              <Image
                src={defaultImage}
                alt="default"
                objectFit="cover"
                boxSize="50px"
                marginRight="20px"
                borderRadius="50%"
              />
              <Box marginRight="20px">
                <Text fontSize="large">{activeSong.name}</Text>
                <Text fontSize="sm">{activeSong.artist.name}</Text>
              </Box>
              <Flex align="center">
                <AiOutlineHeart
                  size={25}
                  style={{ marginRight: "20px", color: "darkgray" }}
                  color="gray.600"
                />
                <CgMiniPlayer size={25} style={{ color: "darkgray" }} />
              </Flex>
            </>
          ) : null}
        </Flex>
        {/* controls */}
        <Box width="40%">
          {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
