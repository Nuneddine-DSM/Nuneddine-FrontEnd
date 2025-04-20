import styled from "styled-components/native";
import { CategoryData } from "../../app/Main/Data"
import { useState } from "react"
import { color, Font } from "../../styles"

const GlassesLensTab = () => {
  const [tabSelected, setTabSelected] = useState<number>(1);

  return (
    <CategoryTabContainer>
      {CategoryData.map(({ id, text, icon }) => (
        <CategoryTab
          key={id}
          onPress={() => setTabSelected(id!)}
          selected={tabSelected === id}
        >
          {icon}
          <Font text={text} kind="semi18" />
        </CategoryTab>
      ))}
    </CategoryTabContainer>
  )
}

const CategoryTabContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${color.white};
`

const CategoryTab = styled.TouchableOpacity<{
  selected?: boolean
}>`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 5px;
  border-bottom-width: 3px;
  border-bottom-color: ${({ selected }) => selected ? color.pink300 : color.gray100 };
`

export default GlassesLensTab