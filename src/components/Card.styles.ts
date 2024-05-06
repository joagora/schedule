import styled from "styled-components";
import sizes from "../contants/sizes";
import colors from "../contants/colors";

const Card = styled.div`
  border-radius: ${sizes.radius};
  border: 1px solid ${colors.borderOpaque};
  padding: ${sizes.spacer};
`;

export default Card;
