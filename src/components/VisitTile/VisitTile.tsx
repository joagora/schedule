import { useMemo } from "react";
import { Visit } from "../../types";
import moment from "moment";
import { H3 } from "../Header.styles";
import { Section, Wrapper, Info } from "./VisitTile.styles";
import Flex from "../Flex.styles";
import { getFormattedTime } from "../utils";

const VisitTile = ({ visit }: { visit: Visit }) => {
  const visitDuration = useMemo(() => {
    const duration = moment.duration(
      moment(visit.estimated_completion_time).diff(moment(visit.start_time))
    );

    const totalDiffInMinutes = duration.asMinutes();
    const minutes = totalDiffInMinutes % 60;
    const hours = (totalDiffInMinutes - minutes) / 60;
    const hoursHumanReadable =
      hours > 0 ? `${hours} ${hours > 1 ? "hours" : "hour"}` : "";
    const minutesHumanReadable = minutes > 0 ? `${minutes} minutes` : "";
    return `${hoursHumanReadable} ${minutesHumanReadable}`;
  }, [visit]);

  return (
    <Wrapper>
      <Flex justifyContent="space-around">
        <Section size={2}>
          <H3>{visit.task}</H3>
          <p>{visitDuration}</p>
        </Section>
        <Section size={2}>
          <p>Client: {visit.site.client}</p>
          <p>Address: {visit.site.post_code}</p>
        </Section>
        <Section size={1}>
          <Info>Start time: {getFormattedTime(visit.start_time)}</Info>
          <Info>
            Completion time: {getFormattedTime(visit.estimated_completion_time)}
          </Info>
        </Section>
      </Flex>
    </Wrapper>
  );
};

export default VisitTile;
