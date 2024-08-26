import styled from "styled-components/";
import { default as baseTheme } from "../../base-theme";

export interface StyledContainerProps {
  bgColor?: string;
}

// A base section
const StyledContainer = styled.section<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${baseTheme.sizes.medium};
  background-color: ${props =>
    props.bgColor
      ? baseTheme.colors[props.bgColor]
      : baseTheme.colors.backgroundColor};

  &.condensed {
    gap: 0;

    & > section {
      padding-bottom: 0;
    }
  }

  // Class applied when the container is inside a TabbedGroup
  &.tab-content {
    border-radius: 0 0 ${baseTheme.radius.small} ${baseTheme.radius.small};
    box-shadow: ${baseTheme.boxShadows.down} ${baseTheme.colors.shadow};
  }

  &.no-shadow {
    box-shadow: none;
  }

  // This class is equivalent to old card.big so the container takes 60% of
  // the width within the home layout
  &.preserve-layout {
    flex: 1 1 60%;
  }

  &.preserve-layout-secondary {
    min-width: 280px;
    flex: 1 1 30%;
  }

  &.full-width {
    width: 100%;
  }
`;
StyledContainer.displayName = "StyledContainer";

export { StyledContainer };
