import ColaboradorService from "@/Services/ColaboradorService";
import { Colaborador } from "@/types/Colaborador";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalColaborador from "./ModalColaborador";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalGerenciarColaborador: React.FC<ModalType> = ({
  isOpen,
  onClose,
}) => {
  const colaboradorService = new ColaboradorService();
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [isOpenModalEditar, setisOpenModalEditar] = useState<boolean>(false);
  const [colaboradorId, setColaboradorId] = useState<number>(0);

  const alterarColaboradorEditadoHandle = (colaboradorEditado: Colaborador) => {    
    const index = colaboradores.findIndex(
      (colaborador) => colaborador.id === colaboradorEditado.id
    );
    if (index !== -1) {
      const novosColaboradores = [...colaboradores];
      novosColaboradores[index] = colaboradorEditado;
      setColaboradores(novosColaboradores);
    }
  };

  const toastErro = useToast({
    position: "top-right",
    title: "Erro",
    description: "Erro",
    status: "error",
    duration: 9000,
    isClosable: true,
  });
  const toastSuccess = useToast({
    position: "top-right",
    title: "Colaborador excluido com sucesso",
    status: "success",
    duration: 9000,
    isClosable: true,
  });

  useEffect(() => {
    const obterTarefas = async () => {
      try {
        const colaboradores = await colaboradorService.obterTodos();
        setColaboradores(colaboradores.data as Colaborador[]);
      } catch (error) {
        console.error("Falha ao obter a tarefa");
      }
    };

    obterTarefas();
  }, []);

  const deletarColaboradorHandler = async (id: number): Promise<void> => {
    const resultRequest = await colaboradorService.excluirColaborador(id);
    if (!resultRequest.isSuccess) {
      toastErro();
      return;
    }
    setColaboradores(colaboradores.filter((c) => c.id != id));
    toastSuccess();
  };

  const editarColaboradorHandler = (colaboradorId: number) => {
    setColaboradorId(colaboradorId);
    setisOpenModalEditar(true);
  };

  console.log("colaboradores", colaboradores);

  return (
    <>
      {isOpenModalEditar && (
        <ModalColaborador
          isOpen={isOpenModalEditar}
          heEditar={true}
          colaboradorId={colaboradorId}
          onColaboradorChange={alterarColaboradorEditadoHandle}
          onClose={() => setisOpenModalEditar(false)}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gerenciar Colaboradores</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Lista de Colaboradores</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Situação</Th>
                    <Th>LinkedIn</Th>
                    <Th>Opções</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {colaboradores.map((colaborador) => (
                    <Tr key={colaborador.id}>
                      <Td>{colaborador.nome}</Td>
                      <Td>{colaborador.situacao ? "Ativo" : "Desativado"}</Td>
                      <Td>{colaborador.link}</Td>
                      <Td>
                        <Flex>
                          <Button
                            colorScheme="yellow"
                            mr="4px"
                            onClick={() =>
                              editarColaboradorHandler(colaborador.id as number)
                            }
                          >
                            Editar
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() =>
                              deletarColaboradorHandler(
                                colaborador.id as number
                              )
                            }
                          >
                            Excluir
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Situação</Th>
                    <Th>LinkedIn</Th>
                    <Th>Opções</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Flex justify="center" w="100%">
              <Button onClick={onClose}>Fechar</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalGerenciarColaborador;
