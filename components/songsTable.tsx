import {
  Box,
  Table,
  Flex,
  Thead,
  Td,
  Tr,
  Th,
  Tbody,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { AiOutlineClockCircle, AiFillHeart } from "react-icons/ai";

const defaultImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-YpFHvvLWH7c%2FUcQFriyLFjI%2FAAAAAAAACgw%2FSNi-PZdRy04%2Fs1600%2FUsher.jpg&f=1&nofb=1";

const SongTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Flex padding="10px" marginBottom="20px" align="center">
        <IconButton
          icon={<BsFillPlayFill fontSize="30px" />}
          colorScheme="green"
          aria-label="play"
          size="lg"
          isRound
        />
        <AiFillHeart size={30} color="#38A168" style={{ marginLeft: "20px" }} />
        <BsThreeDots
          size={30}
          color="lightgray"
          style={{ marginLeft: "20px" }}
        />
      </Flex>
      <Table variant="unstyled">
        <Thead borderBottom="1px solid rgba(255,255,255,0.2)">
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Date Added</Th>
            <Th>
              <AiOutlineClockCircle />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {songs?.map((song, i) => (
            <Tr
              sx={{
                transition: ".3s all",
                "&:hover": {
                  bg: "rgba(255,255,255,.1)",
                },
              }}
              key={song.id}
              cursor="pointer"
            >
              <Td>{i}</Td>
              <Td>
                <Image
                  src={defaultImage}
                  boxSize="40px"
                  objectFit="cover"
                  alt="default"
                  borderRadius="3px"
                  marginRight="10px"
                  display="inline-block"
                />
                {song.name}
              </Td>
              <Td>{song.createdAt.toString()}</Td>
              <Td>{song.duration}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SongTable;
