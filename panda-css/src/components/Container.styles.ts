import { styled } from "../../styled-system/jsx";

export interface StyledContainerProps {
  bgColor?: string;
}

// A base section
const StyledContainer = styled("section", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "{sizes.medium}",

    "&.condensed": {
      gap: "0",

      "&>section": {
        paddingBottom: "0",
      },
    },

    // Class applied when the container is inside a TabbedGroup
    "&.tab-content": {
      borderRadius: "0 0 {radii.small} {radii.small}",
      boxShadow: "{shadows.down} {colors.shadow}",
    },

    "&.no-shadow": {
      boxShadow: "none",
    },

    // This class is equivalent to old card.big so the container takes 60% of
    // the width within the home layout
    "&.preserve-layout": {
      flex: "1 1 60%",
    },

    "&.preserve-layout-secondary": {
      minWidth: "280px",
      flex: "1 1 30%",
    },

    "&.full-width": {
      width: "100%",
    },
  },
});
StyledContainer.displayName = "StyledContainer";

export { StyledContainer };
