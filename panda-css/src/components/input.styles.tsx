import { styled } from "../../styled-system/jsx";

interface InputContainerProps {
  hint?: string
}

const InputContainer = styled.div`
  max-width: 100%;
  position: relative;
  --hint-translation: 0.25rem;

  &.full-width {
    width: 100%;
  }

  &.from-hidden {
    opacity: 0;
    animation: 0.5s from-hidden linear forwards;
  }

  @keyframes from-hidden {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  label.default {
    padding: 0;
    margin: 0;
    display: block;
    font-size: 0.85rem;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
    font-weight: 500;
    color: {colors.titleColor};
    transition: all 0.2s ease-in-out;
  }

  .asterisk {
    color: {colors.danger};
    font-weight: bold;
  }

  .optional {
    color: {colors.danger};
    font-style: italic;
  }

  .hint {
    height: 0px;
    width: 100%;
    font-size: 0.85rem;
    display: block;
    visibility: hidden;
    opacity: 0;
    transform: translateY(calc(-1 * var(--hint-translation)));
    transition: all 0.3s;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.6rem 0.8rem;
    background-color: {colors.white};
    border-radius: 0.5rem;
    border: 1px solid {colors.primaryColor};
    color: {colors.titleColor};
    outline-width: 0px;
    font-size: 1rem;
    font-weight: 500;

    // Outline instead of border so the input height remains constant
    &:focus,
    :focus-visible {
      outline: 2px solid {colors.primaryColor};
    }

    &::placeholder {
      font-size: 0.9rem;
      color: {colors.placeholderColor};
    }
    &::-webkit-input-placeholder {
      font-size: 0.9rem;
      color: {colors.placeholderColor};
      opacity: 0.6;
    }

    &[readonly] {
      border-color: {colors.disabled};
    }
    &[disabled] {
      border-color: {colors.disabled};
    }

    // Input invalid when is required
    &:not(:placeholder-shown):not(
        :is(input[type='file'], input[type='password'])
      ):invalid {
      border-color: {colors.danger};
      outline: 2px solid {colors.danger};

      & ~ .hint {
        visibility: visible;
        height: auto;
        width: 100%;
        opacity: 1;
        transform: translateY(var(--hint-translation));
      }

      // Hide copy content button while invalid
      & ~ button {
        display: none;
      }
    }

    // Input invalid by other condition
    &:not(:is(input[type='file'], input[type='password'])).invalid {
      border-color: {colors.danger};
      outline: 2px solid {colors.danger};

      // Hide copy content button while invalid
      & ~ button {
        display: none;
      }
    }

    &.invalid ~ .hint,
    &.info-hint ~ .hint {
      visibility: visible;
      opacity: 1;
      height: auto;
      width: 100%;
      text-overflow: clip;
      transform: translateY(var(--hint-translation));
    }
  }
`

export { InputContainer }
