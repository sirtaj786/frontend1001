import {
    Box,
    Flex,
    HStack,
    Button,
    Heading,
    useColorMode,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
  import { Link as RouterLink, useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";


  import { getItem } from "../Utils/localstorage";
  
  export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const dispatch = useDispatch();
    const { isAuth } = useSelector((store) => store.reducer);
    const { user } = useSelector((store) => store);
    console.log(user)
    console.log("Is auth navbar", isAuth);
    
  
    return (
      <>
        <Box
          py={[2, 3]}
          px={[null, 10]}
          bg={useColorModeValue("white", "#001429")}
          borderBottom={useColorModeValue("5px solid #001429", "5px solid white")}
        >
          <Flex
            h={[10, 16]}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack spacing={8} alignItems={"center"}>
              <Box >
                <RouterLink to={"/"}>
                  <Heading textShadow="1px 1px #ff0000">10001tech</Heading>
                </RouterLink>
              </Box>
            </HStack>
            {isAuth ? (
              <Box mr={"20rem"}>
              <TableContainer>
        <Table variant='simple' mt={"25rem"} mr={"15rem"}>
          
          <Thead>
            <Tr>
              <Th>Emp Name</Th>
              <Th>Email</Th>
              <Th isNumeric>Age</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>ABCD</Td>
              <Td>abc@gmail.com</Td>
              <Td isNumeric>25</Td>
            </Tr>
            <Tr>
            <Td>xyz</Td>
              <Td>xyz@gmail.com</Td>
              <Td isNumeric>30</Td>
            </Tr>
            <Tr>
            <Td>test</Td>
              <Td>test@gmail.com</Td>
              <Td isNumeric>27</Td>
            </Tr>
          </Tbody>
         
        </Table>
      </TableContainer>
              </Box>            ) : (
              <Flex alignItems={"center"}>
                <Button
                  onClick={toggleColorMode}
                  bgColor={"transparent"}
                  _hover={{ bgColor: "transparent" }}
                >
                 
                </Button>
                <Button
                  variant={"ghosted"}
                  colorScheme={"blue"}
                  size={["xs", "sm"]}
                  mr={4}
                >
                  <RouterLink to={"/login"}>LOG IN</RouterLink>
                </Button>
                <Button
                  variant={"outline"}
                  color={"blue.400"}
                  borderColor={"blue.400"}
                  borderRadius={"sm"}
                  _hover={{ color: "white", bg: "blue.400" }}
                  size={["xs", "sm"]}
                  mr={4}
                  px={7}
                  py={5}
                >
                  <RouterLink to={"/register"}>SIGN UP</RouterLink>
                </Button>
              </Flex>
            )}
          </Flex>
        </Box>
        
      </>
    );
  }