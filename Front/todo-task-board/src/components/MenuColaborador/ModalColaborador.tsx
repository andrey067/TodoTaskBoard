import CargoService from "@/Services/CargoService";
import ColaboradorService from "@/Services/ColaboradorService";
import { Cargo } from "@/types/Cargo";
import { Colaborador } from "@/types/Colaborador";
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  UseToastOptions,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type ModalType = {
  isOpen: boolean;
  heEditar: boolean;
  colaboradorId: number | null;
  onColaboradorChange: (colaborador: Colaborador) => void;
  onClose: () => void;
};

const ModalColaborador: React.FC<ModalType> = ({
  isOpen,
  onClose,
  heEditar,
  colaboradorId,
  onColaboradorChange,
}) => {
  const colaboradorService = new ColaboradorService();
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [cargoselecionado, setCargoSelecionado] = useState<number>();
  const [nome, setNome] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [situacao, setSituacao] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const [nomeError, setNomeError] = useState<string>("");
  const [telefoneError, setTelefoneError] = useState<string>("");
  const toast = useToast();

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

  useEffect(() => {
    const carregarCargos = async () => {
      try {
        const cargoService = new CargoService();
        const resultRequest = await cargoService.obterTodos();
        setCargos(resultRequest.data as Cargo[]);
      } catch (error) {
        console.error("Erro ao buscar os cargos:", error);
      }
    };

    carregarCargos();
  }, []);

  useEffect(() => {
    if (heEditar && colaboradorId) {
      const carregarColaborador = async () => {
        try {
          const resultRequest = await colaboradorService.obterColaborador(
            colaboradorId
          );
          if (resultRequest.isSuccess) {
            const { nome, telefone, link, situacao, cargoId } =
              resultRequest.data as Colaborador;

            setNome(nome || "");
            setTelefone(telefone || "");
            setLink(link || "");
            setSituacao(situacao || false);
            setCargoSelecionado(cargoId);
          }
        } catch (error) {
          console.error("Erro ao carregar colaborador:", error);
        }
      };
      carregarColaborador();
    }
  }, []);

  const salvarColaboradorHandler = async () => {
    if (!nome) {
      setNomeError("Campo obrigatório");
    } else {
      setNomeError("");
    }

    if (!telefone) {
      setTelefoneError("Campo obrigatório");
    } else {
      setTelefoneError("");
    }

    if (nome && telefone && cargoselecionado) {
      let colaborador = criarColaborador();

      try {
        let resultrequest = await colaboradorService.cadastrarColaborador(
          colaborador
        );

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
    }
  };

  const editarColaboradorHandler = async () => {
    let colaborador = criarColaborador();

    try {
      let resultrequest = await colaboradorService.atualizarColaborador(
        colaborador
      );

      resultrequest.isSuccess
        ? showNotification(toast, {
            title: "Cadastro",
            description: "Colaborador salvo com sucesso",
            status: "success",
          })
        : showNotification(toast, {
            title: "Cadastro",
            description: "Erro ao salvar o colaborador",
            status: "error",
          });

      onColaboradorChange(colaborador);
      onClose();
    } catch (error) {
      showNotification(toast, {
        title: "Cadastro",
        description: "Erro ao salvar o colaborador",
        status: "error",
      });
      console.error("Falha ao editar o colaborador:", error);
    }
  };

  const criarColaborador = (): Colaborador => {
    return {
      id: heEditar ? colaboradorId : 0,
      createAt: null,
      updateAt: null,
      nome,
      telefone,
      situacao,
      cargoId: cargoselecionado as number,
      link,
    };
  };

  const handleSubmit =
    heEditar && colaboradorId
      ? editarColaboradorHandler
      : salvarColaboradorHandler;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Colaborador</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired isInvalid={!!nomeError}>
              <FormLabel>Nome</FormLabel>
              <Input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <FormErrorMessage>{nomeError}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isRequired isInvalid={!!telefoneError}>
              <FormLabel>Telefone</FormLabel>
              <Input
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <FormErrorMessage>{telefoneError}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Situação</FormLabel>
              <Checkbox
                isChecked={situacao}
                onChange={(e) => setSituacao(e.target.checked)}
              >
                Situação
              </Checkbox>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Selecione o cargo</FormLabel>
              <Select
                placeholder="Selecione o cargo"
                onChange={(e) => setCargoSelecionado(Number(e.target.value))}
                value={cargoselecionado}
              >
                {cargos?.map((cargo) => {
                  return (
                    <option key={cargo.id} value={cargo.id as number}>
                      {cargo.nome}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalColaborador;
