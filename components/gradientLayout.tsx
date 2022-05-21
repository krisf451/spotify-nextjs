import { Box, Flex, Text, Image } from "@chakra-ui/react";

const GradientLayout = ({
  image,
  title,
  subtitle,
  description,
  color,
  children,
  roundImage,
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
          ></Image>
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="sm" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="sm" fontWeight="300">
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default GradientLayout;
