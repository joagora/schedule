import styled from "styled-components";
import sizes from "../contants/sizes";
import colors from "../contants/colors";

const Card = styled.div`
  border-radius: ${sizes.radius};
  border: 1px solid ${colors.border};
  padding: ${sizes.spacer};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default Card;
