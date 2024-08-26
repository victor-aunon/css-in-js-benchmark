import React, { forwardRef } from 'react'
import { InputContainer } from './input.styles'

type CommonInputProps = {
  name: string
  label?: string
  hint?: string
  containerClassName?: string
  showRequired?: boolean
  showOptional?: boolean
  allowCopyContent?: boolean
}

type TextInputProps = React.ComponentPropsWithRef<'input'> & CommonInputProps

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      name,
      label,
      hint,
      required,
      showRequired,
      showOptional,
      containerClassName,
      ...props
    },
    ref
  ) => {

    return (
      <InputContainer className={containerClassName ?? ''}>
        {label && (
          <label htmlFor={id || name} className="default">
            {label}
            {required && showRequired && (
              <span aria-hidden className="asterisk">{` *`}</span>
            )}
            {showOptional && (
              <span aria-hidden className="optional">
               {' (Optional)'}
              </span>
            )}
          </label>
        )}
        <input
          id={id || name}
          name={name}
          ref={ref}
          required={required}
          placeholder={label || ''}
          aria-label={label}
          {...props}
        />
        {hint !== '' && <span className="hint">{hint}</span>}
      </InputContainer>
    )
  }
)

TextInput.displayName = 'TextInput'
export { TextInput }
