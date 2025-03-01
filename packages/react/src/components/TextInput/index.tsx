import { forwardRef, type ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<'input'> {
  prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, ...props }, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  })

TextInput.displayName = 'TextInput'
