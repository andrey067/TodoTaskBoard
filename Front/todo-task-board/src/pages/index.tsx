import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Column } from "@/types/Column";
import dynamic from "next/dynamic";
import { Task } from "@/types/Task";
import Navbar from "@/components/Navbar";
import TarefaService from "@/Services/TarefaService";

const ColumnCompoent = dynamic(() => import("@/components/Column"), {
  ssr: false,
});

const reorderColumnList = (
  sourceCol: Column,
  startIndex: number,
  endIndex: number
): Column => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn: Column = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

const Home: React.FC = () => {
  const [tarefas, setTarefa] = useState<Task[]>([]);

  useEffect(() => {
    const obterTarefas = async () => {
      const tarefaAPI = new TarefaService();
      try {
        const tarefasObtida = await tarefaAPI.obterTodos();
        setTarefa(tarefasObtida as any);
      } catch (error) {
        console.error("Falha ao obter a tarefa:");
      }
    };

    obterTarefas();
  }, []);

  const [columns, setColumns] = useState<Array<Column>>([
    {
      id: "column-1",
      title: "TO-DO",
      taskIds: [1, 2, 3, 4, 5, 6],
    },
    {
      id: "column-2",
      title: "IN-PROGRESS",
      taskIds: [],
    },
    {
      id: "column-3",
      title: "COMPLETED",
      taskIds: [],
    },
  ]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumnIndex = columns.findIndex(
      (col) => col.id === source.droppableId
    );
    const sourceCol = columns[startColumnIndex];

    const destinationColumnIndex = columns.findIndex(
      (col) => col.id === destination.droppableId
    );
    const destinationCol = columns[destinationColumnIndex];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newColumns = [...columns];
      newColumns[startColumnIndex] = newColumn;
      setColumns(newColumns);
      return;
    }

    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol: Column = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol: Column = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newColumns = [...columns];
    newColumns[startColumnIndex] = newStartCol;
    newColumns[destinationColumnIndex] = newEndCol;
    setColumns(newColumns);
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
            {/* {columns.map((column) => {
              const tasksInColumn = column.taskIds.map((taskId) =>
                tarefas.find((task) => task.id === taskId)
              );
              return (
                <ColumnCompoent
                  key={column.id}
                  column={column}
                  tasks={tasksInColumn as Task[]}
                />
              );
            })} */}
          </Flex>
        </Flex>
      </DragDropContext>
    </Box>
  );
};

export default Home;
