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
import useUpdateFetch from "../../hooks/useUpdateFetch";

const Background = styled(Flex)`
  background-color: ${colors.background};
`;
const Planner = () => {
  const [items, setItems] = useState<ScheduleItem[]>([]);

  const { data, isLoading, error } = useFetch("http://localhost:8080/schedule");
  const { usePost: updateSchedule, error: isUpdateError } = useUpdateFetch();

  useEffect(() => {
    if (!data) return;
    setItems(data.schedule);
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
    removedItem.order = destination.index + 1;
    destinationDay?.visits.splice(destination.index, 0, removedItem);
    setItems(itemsCopy);

    updateSchedule("http://localhost:8080/schedule", { schedule: itemsCopy });
  };

  if (isUpdateError) {
    return <p>Oops, something went wrong updating your schedule</p>;
  }

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
                {items.map((item: ScheduleItem, index: number) => {
                  return <ScheduleDay key={`${item.id}`} item={item} />;
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
