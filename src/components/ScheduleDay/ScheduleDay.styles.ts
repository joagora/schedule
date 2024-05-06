import styled from "styled-components";
import sizes from "../../contants/sizes";

const Heading = styled.div`
  width: 40%;
  padding: ${sizes.spacer};
`;

const Container = styled.li`
  width: 100%;
  margin: ${sizes.spacer2} 0;
`;

const VisitBody = styled.div`
  padding: ${sizes.spacer};
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: ${sizes.subtitle};
`;

const SubtitleContainer = styled.div`
  padding: ${sizes.spacer2} 0;
`;
export { Container, Heading, VisitBody, Subtitle, SubtitleContainer };
