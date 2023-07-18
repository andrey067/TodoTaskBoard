import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from "react-beautiful-dnd";
import dynamic from "next/dynamic";
import { Tarefa } from "@/types/Tarefa";
import Navbar from "@/components/Navbar";
import TarefaService from "@/Services/TarefaService";
import { Card } from "@/types/Card";
import CardService from "@/Services/CardService";

const reordenarLista = async (
  sourceCol: Tarefa,
  startIndex: number,
  endIndex: number
): Promise<Tarefa | void> => {
  let cardService = new CardService();

  const newArrayCards = Array.from(sourceCol.cards);
  const [removed] = newArrayCards.splice(startIndex, 1);
  newArrayCards.splice(endIndex, 0, removed);

  const newCards = newArrayCards.map((card, index) => ({
    ...card,
    posicao: sourceCol.cards[index].posicao,
  }));

  let result = await Promise.all(
    newCards.map((card) => cardService.atualizarCard(card))
  );

  if (result.every((r) => r.isSuccess)) {
    const newColumn: Tarefa = {
      ...sourceCol,
      cards: newCards,
    };
    return newColumn;
  }
};

const validarSeCardFoiMovimentadoValido = (
  destination: DraggableLocation | null | undefined,
  source: DraggableLocation
): boolean => {
  // Se o destino for desconhecido, não faz nada e retorna.
  if (!destination) return true;

  // Se o usuário arrastar e soltar no mesmo local de origem, não faz nada e retorna.
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return true;
  }

  return false;
};

const moverTarefaParaOutraColuna = async (
  sourceCol: Tarefa,
  destinationCol: Tarefa,
  sourceIndex: number,
  destinationIndex: number,
  tarefas: Tarefa[]
) => {
  let tarefaService = new TarefaService();

  const cards = sourceCol.cards.slice();
  const [removed] = cards.splice(sourceIndex, 1);
  const cardsRetirado: Card[] = cards.map((card) => ({
    ...card,
    posicao: card.posicao,
  }));

  const cards2 = destinationCol.cards.slice();
  cards2.splice(destinationIndex, 1, removed);
  const cardsDestino: Card[] = cards2.map((card) => ({
    ...card,
    posicao: card.posicao,
  }));

  // const updatePromises = [];

  // for (const tarefa of tarefas) {
  //   if (tarefa.id === sourceCol.id) {
  //     updatePromises.push(
  //       tarefaService.atualizarTarefa({ ...tarefa, cards: cardsRetirado })
  //     );
  //   } else if (tarefa.id === destinationCol.id) {
  //     updatePromises.push(
  //       tarefaService.atualizarTarefa({ ...tarefa, cards: cardsDestino })
  //     );
  //   }
  // }

  // const resultPromises = await Promise.all(updatePromises);

  const newTarefas = tarefas.map((t) => {
    if (t.id === sourceCol.id) {
      return { ...t, cards: cardsRetirado };
    }
    if (t.id === destinationCol.id) {
      return { ...t, cards: cardsDestino };
    }
    return t;
  });

  return newTarefas;
};

const ColumnCompoent = dynamic(() => import("@/components/Column"), {
  ssr: false,
});

const Home: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const tarefaService = new TarefaService();

  useEffect(() => {
    const obterTarefas = async () => {
      try {
        let requestResult = await tarefaService.obtertarefasEcards();
        console.log("requestResult", requestResult);
        setTarefas(requestResult.data as Tarefa[]);
      } catch (error) {
        console.error("Falha ao obter a tarefa:");
      }
    };

    obterTarefas();
  }, []);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source } = result;

    if (validarSeCardFoiMovimentadoValido(destination, source)) return;

    // Se o usuário arrastar e soltar no mesmo column (coluna) mas em uma posição diferente.
    const sourceCol =
      tarefas[tarefas.findIndex((t) => t.id === Number(source.droppableId))];
    const destinationCol =
      tarefas[
        tarefas.findIndex((t) => t.id === Number(destination?.droppableId))
      ];

    // Reordena a lista de tarefas na mesma coluna (coluna de destino).
    if (sourceCol.id === destinationCol.id) {
      const newColumnResult = await reordenarLista(
        sourceCol,
        source.index,
        (destination as DraggableLocation).index
      );

      if (newColumnResult) {
        const newTarefas = tarefas.map((t) =>
          t.id === newColumnResult.id ? newColumnResult : t
        );

        setTarefas(newTarefas);
      }
      return;
    }

    let newTarefas = await moverTarefaParaOutraColuna(
      sourceCol,
      destinationCol,
      source.index,
      (destination as DraggableLocation).index,
      tarefas
    );

    if (newTarefas) setTarefas(newTarefas);
  };

  return (
    <Box>
      <Navbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex
          flexDir="column"
          bg="main-bg"
          minH="100vh"
          w="full"
          color="white-text"
          pb="2rem"
        >
          <Flex py="4rem" flexDir="column" align="center">
            <Heading fontSize="3xl" fontWeight={800}>
              TaskBoard
            </Heading>
          </Flex>

          <Flex justify="space-between" px="4rem">
            {tarefas.map((tarefa) => {
              return (
                <ColumnCompoent key={tarefa.id} tarefa={tarefa as Tarefa} />
              );
            })}
          </Flex>
        </Flex>
      </DragDropContext>
    </Box>
  );
};

export default Home;
