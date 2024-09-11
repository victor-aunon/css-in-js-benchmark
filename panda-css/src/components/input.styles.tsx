import { styled } from "../../styled-system/jsx";

interface InputContainerProps {
  hint?: string;
}

const InputContainer = styled("div", {
  base: {
    maxWidth: "100%",
    position: "relative",
    "--hint-translation": "0.25rem",

    "&.full-width": {
      width: "100%",
    },

    "&.from-hidden": {
      opacity: "0",
      animation: "0.5s fromHidden linear forwards",
    },

    "& label.default": {
      padding: "0",
      margin: "0",
      display: "block",
      fontSize: "0.85rem",
      textTransform: "uppercase",
      marginBottom: "0.3rem",
      fontWeight: "500",
      color: "{colors.titleColor}",
      transition: "all 0.2s ease-in-out",
    },

    "& .asterisk": {
      color: "{colors.danger}",
      fontWeight: "bold",
    },

    "& .optional": {
      color: "{colors.danger}",
      fontStyle: "italic",
    },

    "& .hint": {
      height: "0px",
      width: "100%",
      fontSize: "0.85rem",
      display: "block",
      visibility: "hidden",
      opacity: "0",
      transform: "translateY(calc(-1 * var(--hint-translation)))",
      transition: "all 0.3s",
    },

    "& input,textarea": {
      width: "100%",
      padding: "0.6rem 0.8rem",
      backgroundColor: "{colors.white}",
      borderRadius: "0.5rem",
      border: "1px solid {colors.primaryColor}",
      color: "{colors.titleColor}",
      outlineWidth: "0px",
      fontSize: "1rem",
      fontWeight: "500",

      // Outline instead of border so the input height remains constant
      "&:focus,:focus-visible": {
        outline: "2px solid {colors.primaryColor}",
      },

      "&::placeholder": {
        fontSize: "0.9rem",
        color: "{colors.placeholderColor}",
      },
      "&::-webkit-input-placeholder": {
        fontSize: "0.9rem",
        color: "{colors.placeholderColor}",
        opacity: "0.6",
      },

      "&[readonly]": {
        borderColor: "{colors.disabled}",
      },
      "&[disabled]": {
        borderColor: "{colors.disabled}",
      },

      // Input invalid when is required
      '&:not(:placeholder-shown):not(:is(input[type="file"], input[type="password"])):invalid':
        {
          borderColor: "{colors.danger}",
          outline: "2px solid {colors.danger}",

          "& ~ .hint": {
            visibility: "visible",
            height: "auto",
            width: "100%",
            opacity: "1",
            transform: "translateY(var(--hint-translation))",
          },

          // Hide copy content button while invalid
          "& ~ button": {
            display: "none",
          },
        },

      // Input invalid by other condition
      '&:not(:is(input[type="file"], input[type="password"])).invalid': {
        borderColor: "{colors.danger}",
        outline: "2px solid {colors.danger}",

        // Hide copy content button while invalid
        "& ~ button": {
          display: "none",
        },
      },

      "&.invalid ~ .hint,&.info-hint ~ .hint": {
        visibility: "visible",
        opacity: "1",
        height: "auto",
        width: "100%",
        textOverflow: "clip",
        transform: "translateY(var(--hint-translation))",
      },
    },
  },
});

export { InputContainer };
