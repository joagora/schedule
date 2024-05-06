import styled from "styled-components";

interface FlexProps {
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between";
  children: React.ReactNode;
}
const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;

export default Flex;
