import { useMemo } from "react";
import { Visit } from "../../types";
import moment from "moment";
import { Section, Wrapper, Info, Icon } from "./VisitTile.styles";
import Flex from "../Flex.styles";
import { getFormattedTime } from "../utils";
import { GiHighGrass, GiPlantSeed, GiShears } from "react-icons/gi";
import { H3 } from "../Header.styles";

const getTaskMapping = (
  taskName: string
): { humanReadable?: string; icon?: React.ReactElement } => {
  switch (taskName) {
    case "LAWN_SOWING":
      return {
        humanReadable: "Lawn sowing",
        icon: <GiPlantSeed />,
      };
    case "LAWN_MOWING":
      return {
        humanReadable: "Lawn mowing",
        icon: <GiHighGrass />,
      };
    case "HEDGE_PRUNING":
      return {
        humanReadable: "Hedge pruning",
        icon: <GiShears />,
      };
    default:
      return { humanReadable: undefined, icon: undefined };
  }
};

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

  const taskMapping = useMemo(() => {
    return getTaskMapping(visit.task);
  }, [visit.task]);

  return (
    <Wrapper>
      <Flex justifyContent="space-around">
        <Section size={2}>
          <Flex>
            <Icon>{taskMapping.icon}</Icon>
            <div>
              <H3>{taskMapping.humanReadable}</H3>
              <p>{visitDuration}</p>
            </div>
          </Flex>
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
