import styled from "styled-components";
import colors from "../contants/colors";
import sizes from "../contants/sizes";
interface HeaderProps {
  children: React.ReactNode | React.ReactNode[];
  color?: string;
}
const H1 = styled.h1<HeaderProps>`
  color: ${(props) => props.color || colors.text};
  font-size: ${sizes.typographyH1};
`;

const H2 = styled.h2<HeaderProps>`
  color: ${(props) => props.color || colors.text};
  font-size: ${sizes.typographyH2};
`;

const H3 = styled.h3<HeaderProps>`
  color: ${(props) => props.color || colors.text};
  font-size: ${sizes.typographyH3};
`;

export { H1, H2, H3 };
