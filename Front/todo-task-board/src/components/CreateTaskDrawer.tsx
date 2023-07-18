import TarefaService from "@/Services/TarefaService";
import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  UseToastOptions,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Tarefa } from "../types/Tarefa";

function CreateTaskDrawer() {
  const tarefaService = new TarefaService();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nome, setNome] = useState<string>("");
  const [nomeError, setNomeError] = useState<string>("");

  const showNotification = (
    toast: ReturnType<typeof useToast>,
    options: UseToastOptions
  ) => {
    toast({
      position: "top-right",
      ...options,
      duration: 9000,
      isClosable: true,
    });
  };

  const salvarTarefaHandler = async () => {
    if (!nome) {
      setNomeError("Campo obrigatório");
    } else {
      setNomeError("");
    }
    const tarefaASerCriada: Tarefa = {
      id: 0,
      createAt: null,
      updateAt: null,
      nome: nome,
      cards: [],
    };
    try {
      let resultrequest = await tarefaService.cadastrarTarefa(tarefaASerCriada);

      resultrequest.isSuccess
        ? showNotification(toast, {
            title: "Cadastro",
            description: "Colaborador cadastrado com sucesso",
            status: "success",
          })
        : showNotification(toast, {
            title: "Cadastro",
            description: "Erro ao cadastrar o colaborador",
            status: "error",
          });

      onClose();
    } catch (error) {
      showNotification(toast, {
        title: "Cadastro",
        description: "Erro ao cadastrar o colaborador",
        status: "error",
      });
      console.error("Falha ao cadastrar o colaborador:", error);
    }
  };
  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Criar Tarefa
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Criar uma nova Tarefa
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormControl isRequired isInvalid={!!nomeError}>
                  <FormLabel>Tarefa</FormLabel>
                  <Input
                    placeholder="Nome da Tarefa"
                    onChange={(e) => setNome(e.target.value)}
                  />
                </FormControl>
                <FormErrorMessage>{nomeError}</FormErrorMessage>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={salvarTarefaHandler}>
              Criar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default CreateTaskDrawer;
