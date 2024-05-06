import styled from "styled-components";
import sizes from "../../contants/sizes";
import colors from "../../contants/colors";

const Subtitle = styled.div``;

const Section = styled.div<{ size: 1 | 2 | 3 }>`
  flex: ${(props) => props.size};
`;

const Wrapper = styled.div`
  padding: ${sizes.spacer2};
  border: 1px solid ${colors.borderOpaque};
  border-radius: ${sizes.radius};
`;

const Info = styled.p`
  font-size: xx-small;
`;
export { Subtitle, Section, Wrapper, Info };
