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
  Icon,
} from "@chakra-ui/react";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { AiOutlineClockCircle, AiFillHeart } from "react-icons/ai";

const SongTable = ({ songs }) => {
  return (
    <Box bg="transparent">
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
      <Table></Table>
    </Box>
  );
};

export default SongTable;
