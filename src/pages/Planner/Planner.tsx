import useFetch from "../../hooks/useFetch";
import ScheduleDay from "../../components/ScheduleDay/ScheduleDay";
import { ScheduleItem } from "../../types.js";
import Container from "./Planner.styles";
import Flex from "../../components/Flex.styles";
import styled from "styled-components";
import colors from "../../contants/colors";
import {
  DragDropContext,
  DropResult,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";
import { useEffect, useState } from "react";

const Background = styled(Flex)`
  background-color: ${colors.background};
`;
const Planner = () => {
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [days, setDays] = useState<string[]>([]);
  const { data, isLoading, error } = useFetch("http://localhost:8080/schedule");

  useEffect(() => {
    setItems(data);
    setDays(
      data.map((item: ScheduleItem) => {
        return item.date;
      })
    );
  }, [data]);

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops, something went wrong</p>;
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const itemsCopy = [...items];
    const sourceDay = itemsCopy.find(
      (item) => JSON.stringify(item.date) === source.droppableId
    );
    const destinationDay = items.find(
      (item) => JSON.stringify(item.date) === destination.droppableId
    );

    if (!sourceDay) {
      return;
    }
    const removedItem = sourceDay.visits.splice(source.index, 1)[0];
    destinationDay?.visits.splice(destination.index, 0, removedItem);
    setItems(itemsCopy);
  };

  return (
    <Background flexDirection="column" alignItems="center">
      <Container>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            key="schedule-days"
            droppableId="schedule-days"
            type="droppableItem"
          >
            {(provided: DroppableProvided) => (
              <div ref={provided.innerRef}>
                {data.map((item: ScheduleItem, index: number) => {
                  return (
                    <>
                      {item.visits.length !== 0 && (
                        <ScheduleDay item={item} index={index} />
                      )}
                    </>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </Background>
  );
};

export default Planner;
