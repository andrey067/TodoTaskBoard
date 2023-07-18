import TarefaService from "@/Services/TarefaService";
import { ColumnProps } from "@/types/ColumnProps";
import { Tarefa } from "@/types/Tarefa";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
  StackDivider,
  Box,
  IconButton,
  useToast,
  UseToastOptions,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column: React.FC<ColumnProps> = ({ tarefa }) => {
  const tarefaService = new TarefaService();
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

  const deletarTarefaHandler = async (tarefaId: number) => {
    var requestResult = await tarefaService.excluirTarefa(tarefaId);

    requestResult.isSuccess
      ? showNotification(toast, {
          title: "Tarefa",
          description: "Tarefa deletada com sucesso",
          status: "success",
        })
      : showNotification(toast, {
          title: "Tarefa",
          description: "Erro ao deletar o tarefa",
          status: "error",
        });
  };

  const atualizarNomeTarefaHandler = async (
    novoNome: string,
    tarefaId: number
  ) => {
    let tarefaAlterada: Tarefa = {
      id: tarefaId,
      createAt: null,
      updateAt: null,
      nome: novoNome,
      cards: [],
    };
    await tarefaService.atualizarTarefa(tarefaAlterada);
  };

  return (
    <Card w="400px" h="620px">
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Editable
          defaultValue={tarefa.nome}
          onChange={(nome) =>
            atualizarNomeTarefaHandler(nome, tarefa.id as number)
          }
        >
          <EditablePreview />
          <EditableInput />
        </Editable>

        <Text>Clique para editar o nome</Text>

        <IconButton
          icon={<CloseIcon />}
          size="sm"
          color="red.500"
          onClick={() => deletarTarefaHandler(tarefa.id as number)}
          aria-label="Close"
        />
      </CardHeader>
      <Droppable droppableId={tarefa.id?.toString() || ""}>
        {(droppableProvided) => (
          <CardBody>
            <Stack
              px="1.5rem"
              flex={1}
              flexDir="column"
              divider={<StackDivider />}
              spacing="2"
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {tarefa.cards
                .sort((a, b) => a.posicao - b.posicao)
                .map((card, index) => (
                  <Draggable
                    key={card.id}
                    draggableId={`${card.id}`}
                    index={index}
                  >
                    {(draggableProvided, draggableSnapshot) => (
                      <Box
                        bg="card-bg"
                        outline="2px solid"
                        outlineColor={
                          draggableSnapshot.isDragging
                            ? "card-border"
                            : "transparent"
                        }
                        boxShadow={
                          draggableSnapshot.isDragging
                            ? "0 5px 10px rgba(0, 0, 0, 0.6)"
                            : "unset"
                        }
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <Heading size="xs" textTransform="uppercase">
                          {card.nome}
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {card.atividade}
                        </Text>
                      </Box>
                    )}
                  </Draggable>
                ))}
              {droppableProvided.placeholder}
            </Stack>
          </CardBody>
        )}
      </Droppable>
    </Card>
  );
};

export default Column;
