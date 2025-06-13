import { useState } from "react"
import styled from "styled-components/native";
import { Font, color } from "../../styles"
import { Arrow } from "../../assets";

interface DropdownPropsType {
  value: string,
  setValue: (value: string) => void,
  items: Array<string>,
}

export const Dropdown = ({
  value,
  setValue,
  items = []
}: DropdownPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setIsFocused((prev) => !prev);
  };

  const clickItem = (item: string) => {
    setValue(item);
    toggleOpen();
  };

  return (
    <DropDownContainer>
      <DropdownBoxWrapper
        isFocused={isFocused}
        onTouchEnd={toggleOpen}
      >
        <DropWrapper isFocused={isFocused}>
          <Font text="근시 도수 (SPH)" kind="medium16" color="gray400" />
          <Arrow size={20} color="gray600" rotate={isOpen ? "bottom" : "top"} />
        </DropWrapper>

        {isOpen && (
          <DropdownList>
            {items.map((item, index) =>
              <ItemWrapper
                key={index}
                isOdd={index % 2 == 0}
                onPress={() => clickItem(item)}
              >
                <Font text={item} kind="medium16" />
              </ItemWrapper>
            )}
          </DropdownList>
        )}
      </DropdownBoxWrapper>
    </DropDownContainer>
  )
}

const DropDownContainer = styled.View`
  width: 100%;
  position: absolute;
  top: 70px;
`

const DropdownBoxWrapper = styled.View<{ isFocused: boolean }>`
  border-radius: 10px;
  border-width: ${({ isFocused }) => isFocused ? '1px' : '0px'};
  border-color: ${({ isFocused }) => isFocused ? color.black : color.white};
  background-color: ${color.white};
  overflow: hidden;
`

const DropWrapper = styled.View<{ isFocused: boolean }>`
  position: relative; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px; 
  border-radius: 10px;
  border-width: ${({ isFocused }) => isFocused ? '0px' : '1px'};
  border-color: ${({ isFocused }) => isFocused ? color.white : color.gray300};
`

const DropdownList = styled.ScrollView`
  max-height: 162px;
  flex-direction: column;
  padding: 16px;
`

const ItemWrapper = styled.TouchableOpacity<{ isOdd: boolean }>`
  padding: 12px;
  background-color: ${({ isOdd }) => isOdd ? color.gray50 : color.white};
  margin-bottom: 4px;
`