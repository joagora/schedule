import { useMemo } from "react";
import { ScheduleItem } from "../../types";
import moment from "moment";
import { Visit } from "../../types";
import VisitTile from "../VisitTile/VisitTile";
import Flex from "../Flex.styles";
import {
  Heading,
  Container,
  VisitBody,
  Subtitle,
  SubtitleContainer,
} from "./ScheduleDay.styles";
import { H1, H3 } from "../Header.styles";
import { getFormattedDate, getFormattedTime, getWeekDay } from "../utils";
import {
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";
import Card from "../Card.styles";

const ScheduleDay = ({ item }: { item: ScheduleItem }) => {
  const numberOfOperatives = useMemo(() => {
    return item.visits.reduce(
      (total, visit) => total + visit.operatives.length,
      0
    );
  }, [item]);

  const scheduleStartTime = useMemo(() => {
    if (item.visits?.length === 0) return;
    return item.visits.sort((a, b) =>
      moment(a.start_time).diff(moment(b.start_time))
    )[0].start_time;
  }, [item]);
  return (
    <Container>
      <Card>
        <Flex>
          <Heading>
            <H1>{getWeekDay(item.date)}</H1>
            <H3>{getFormattedDate(item.date)}</H3>
            <SubtitleContainer>
              <Subtitle>Operatives: {numberOfOperatives}</Subtitle>
              <Subtitle>
                Start time:{" "}
                {scheduleStartTime && getFormattedTime(scheduleStartTime)}
              </Subtitle>
            </SubtitleContainer>
          </Heading>
          <VisitBody>
            <Droppable key={`${item.date}`} droppableId={`${item.date}`}>
              {(provided: DroppableProvided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {item.visits.length === 0 && (
                    <Flex justifyContent="center">
                      <p>No visits yet</p>
                    </Flex>
                  )}
                  {item.visits?.map((visit: Visit, index) => {
                    return (
                      <Draggable
                        draggableId={`${visit.id}`}
                        key={`${visit.id}`}
                        index={index}
                      >
                        {(provided: DraggableProvided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <VisitTile visit={visit} index={index} />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </VisitBody>
        </Flex>
      </Card>
    </Container>
  );
};

export default ScheduleDay;
