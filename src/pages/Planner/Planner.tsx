import useFetch from "../../hooks/useFetch";
import ScheduleDay from "../../components/ScheduleDay/ScheduleDay";
import { ScheduleItem } from "../../types.js";
import Container from "./Planner.styles";
import Flex from "../../components/Flex.styles";
import styled from "styled-components";
import colors from "../../contants/colors";

const Background = styled(Flex)`
  background-color: ${colors.background};
`;
const Planner = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8080/schedule");

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops, something went wrong</p>;
  }

  return (
    <Background flexDirection="column" alignItems="center">
      <Container>
        {data.map((item: ScheduleItem) => {
          return <>{item.visits.length !== 0 && <ScheduleDay item={item} />}</>;
        })}
      </Container>
    </Background>
  );
};

export default Planner;
