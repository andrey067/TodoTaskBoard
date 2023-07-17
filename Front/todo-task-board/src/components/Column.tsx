import { ColumnProps } from "@/types/ColumnProps";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
  StackDivider,
  Box,
} from "@chakra-ui/react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <Card w="400px" h="620px">
      <CardHeader>
        <Heading size="md"> {column.title} </Heading>
      </CardHeader>
      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
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
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
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
                        Summary
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        {task.nome}
                      </Text>
                    </Box>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}{" "}
            </Stack>
          </CardBody>
        )}
      </Droppable>
    </Card>
  );
};

export default Column;
