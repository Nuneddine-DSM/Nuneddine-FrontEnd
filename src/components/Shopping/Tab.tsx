import styled from "styled-components/native";
import { CategoryData } from "../../app/Main/Data"
import { color, Font } from "../../styles"

interface TabData {
  id: number;
  text: string;
  icon?: (selected: boolean) => React.ReactNode;
}

interface PropsType {
  selectedTab: number;
  setSelectedTab: (id: number) => void;
  tabData: TabData[];
}

const Tab = ({ selectedTab, setSelectedTab, tabData = CategoryData }: PropsType) => {

  return (
    <CategoryTabContainer>
      {tabData.map(({ id, text, icon }) => (
        <CategoryTab
          key={id}
          onPress={() => setSelectedTab(id!)}
          selected={selectedTab === id}
        >
          {icon && <IconWrapper>{icon(selectedTab === id)}</IconWrapper>}
          <Font
            text={text}
            kind="semi18"
            color={selectedTab === id ? "black" : "gray400"}
          />
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
  border-bottom-color: ${({ selected }) => selected ? color.pink300 : color.gray100};
`

const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
`

export default Tab