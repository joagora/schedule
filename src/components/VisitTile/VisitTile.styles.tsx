import styled from "styled-components";
import sizes from "../../contants/sizes";
import colors from "../../contants/colors";

const Subtitle = styled.div``;

const Section = styled.div<{ size: 1 | 2 | 3 }>`
  flex: ${(props) => props.size};
`;

const Wrapper = styled.div`
  padding: ${sizes.spacer2};
  margin: ${sizes.spacer};
  border: 1px solid ${colors.border};
  border-radius: ${sizes.radius};
  background-color: ${colors.foreground};
`;

const Info = styled.p`
  font-size: xx-small;
`;

const Icon = styled.i`
  color: ${colors.success};
  padding: 0 ${sizes.spacer};
`;
export { Subtitle, Section, Wrapper, Info, Icon };
