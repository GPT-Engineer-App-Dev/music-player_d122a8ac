import { Box, Container, Heading, VStack, Image, Text, HStack, Spacer, IconButton, Progress, useBoolean } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useBoolean();

  // This is a placeholder function to simulate play/pause functionality
  const togglePlay = () => {
    setIsPlaying.toggle();
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Chakra Beats
        </Heading>
        <Box bg="gray.900" borderRadius="md" p={4} color="white">
          <VStack spacing={5}>
            <Image src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEyMzU5NDI5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="100%" objectFit="cover" />
            <VStack spacing={1}>
              <Heading as="h3" size="lg">
                Song Title
              </Heading>
              <Text>Artist Name</Text>
            </VStack>
            <Progress colorScheme="green" size="sm" value={40} />
            <HStack spacing={4}>
              <IconButton icon={<FaBackward />} aria-label="Previous song" variant="ghost" colorScheme="whiteAlpha" />
              <IconButton icon={isPlaying ? <FaPause /> : <FaPlay />} aria-label={isPlaying ? "Pause" : "Play"} onClick={togglePlay} colorScheme="whiteAlpha" size="lg" borderRadius="full" />
              <IconButton icon={<FaForward />} aria-label="Next song" variant="ghost" colorScheme="whiteAlpha" />
            </HStack>
          </VStack>
        </Box>
        <Spacer />
        {/* Additional content can go here */}
      </VStack>
    </Container>
  );
};

export default Index;
