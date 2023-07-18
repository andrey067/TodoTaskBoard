import { Flex, Spacer, Box, Link } from "@chakra-ui/react";
import React from "react";
import CreateTaskDrawer from "./CreateTaskDrawer";
import MenuColaborador from "./MenuColaborador/MenuColaborador";

const Navbar: React.FC = () => {
  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        p="4"
        bg="blue.500"
        color="white"
      >
        <Box>
          <CreateTaskDrawer />
        </Box>
        <Spacer />
        <Box>
          <MenuColaborador />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
