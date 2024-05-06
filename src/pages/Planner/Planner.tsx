import useFetch from "../../hooks/useFetch";
import ScheduleDay from "../../components/ScheduleDay/ScheduleDay";
import { ScheduleItem } from "../../types.js";
import Container from "./Planner.styles";
import Flex from "../../components/Flex.styles";

const Planner = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8080/schedule");
  console.log("data: ", data);

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops, something went wrong</p>;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <Container>
        {data.map((item: ScheduleItem) => {
          return <>{item.visits.length !== 0 && <ScheduleDay item={item} />}</>;
        })}
      </Container>
    </Flex>
  );
};

export default Planner;
