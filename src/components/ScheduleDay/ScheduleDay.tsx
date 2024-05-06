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
import { H3 } from "../Header.styles";
import { getFormattedDate, getFormattedTime } from "../utils";

const ScheduleDay = ({ item }: { item: ScheduleItem }) => {
  console.log("item: ", item);
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

  const visitsByCompletionTime = useMemo(() => {
    if (item.visits?.length === 0) return;
    return item.visits.sort((a, b) =>
      moment(a.estimated_completion_time).diff(
        moment(b.estimated_completion_time)
      )
    );
  }, [item]);

  return (
    <Container>
      <Flex>
        <Heading>
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
          {visitsByCompletionTime?.map((visit: Visit) => {
            return <VisitTile visit={visit} />;
          })}
        </VisitBody>
      </Flex>
    </Container>
  );
};

export default ScheduleDay;
