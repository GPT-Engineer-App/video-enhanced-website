import { Container, Text, VStack, Box, Button, Menu, MenuButton, MenuList, MenuItem, Flex, Heading } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" bg="white" p={4} boxShadow="md" mb={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">Kive</Text>
          <Flex>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Product
              </MenuButton>
              <MenuList>
                <MenuItem>Library</MenuItem>
                <MenuItem>Generate</MenuItem>
                <MenuItem>Search</MenuItem>
                <MenuItem>Moodboards</MenuItem>
                <MenuItem>Stories</MenuItem>
                <MenuItem>Video</MenuItem>
              </MenuList>
            </Menu>
            <Button variant="link" ml={4}>Solutions</Button>
            <Button variant="link" ml={4}>Pricing</Button>
            <Button variant="link" ml={4}>Careers</Button>
            <Button variant="link" ml={4}>Log in</Button>
            <Button colorScheme="teal" ml={4}>Sign up</Button>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={4} textAlign="center">
        <Heading fontSize="4xl">Where creative AI gets to work</Heading>
        <Text fontSize="lg">Kive is the all-in-one platform to generate ideas, produce professional content, organise assets and build brands with AI.</Text>
        <Button colorScheme="teal" size="lg">Get started</Button>
      </VStack>
    </Container>
  );
};

export default Index;