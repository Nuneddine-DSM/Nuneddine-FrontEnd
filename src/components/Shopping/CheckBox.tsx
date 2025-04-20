import styled from "styled-components/native";
import { color } from "../../styles"
import { Check } from "../../assets"

interface PropsType {
  selected?: boolean,
  onPress?: () => void
}

const CheckBox = ({ selected = false, onPress }: PropsType) => {
  return (
    <CheckBoxContainer selected={selected} onPress={onPress}>
      <Check size={20} color={color.white} />
    </CheckBoxContainer>
  )
}

const CheckBoxContainer = styled.TouchableOpacity<{
  selected?: boolean
}>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ selected }) => selected ? color.pink300 : color.gray400};
  background-color: ${({ selected }) => selected ? color.pink300 : color.white};
`;

export default CheckBox