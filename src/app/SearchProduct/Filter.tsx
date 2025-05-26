import { useState } from "react";
import styled from "styled-components/native";
import { color, Font } from "../../styles";
import { Arrow, Reset, X } from "../../assets"
import { TopBar } from "../../components"
import { TouchableOpacity, View } from "react-native"
import { useNavigation, NavigationProp } from '@react-navigation/native'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  FrameShapeMap,
  FrameMaterialMap,
  LensColorMap,
  LensDateTypeMap,
  LensDateType,
  FrameShapeType,
  FrameMaterialType,
  LensColorType,
  LensColorCodeMap
} from '../Data';

const Filter = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [selectedFrameShape, setSelectedFrameShape] = useState<FrameShapeType | null>(null);
  const [selectedFrameMaterial, setSelectedFrameMaterial] = useState<FrameMaterialType | null>(null);
  const [selectedLensColor, setSelectedLensColor] = useState<LensColorType | null>(null);
  const [selectedLensDate, setSelectedLensDate] = useState<LensDateType | null>(null);
  const [values, setValues] = useState<[number, number]>([11.6, 13.9]);

  const [isFrameOpen, setIsFrameOpen] = useState(true);
  const [isLensOpen, setIsLensOpen] = useState(true);

  return (
    <>
      <TopBar
        leftIcon={
          <TouchableOpacity onPress={() => navigation.navigate('SearchProduct')}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
        text="필터 적용하기"
      />
      <PageContainer>
        <SelectedFilterTagWrapper>
          <SelectedTag>
            <Font text="선택태그" kind="medium16" color="white" />
            <X size={20} color={color.gray500} />
          </SelectedTag>
        </SelectedFilterTagWrapper>

        <FilterSections>
          <SectionWrapper>
            <SectionHeader onPress={() => setIsFrameOpen(!isFrameOpen)}>
              <Font text="안경" kind="semi20" />
              <Arrow size={28} rotate={isFrameOpen ? "bottom" : "top"} />
            </SectionHeader>

            {isFrameOpen && (
              <FilterGroup>
                <FilterItem>
                  <Font text="프레임 모양" kind="semi18" />
                  <TagList>
                    {Object.entries(FrameShapeMap).map(([key, label]) => (
                      <TouchableOpacity key={key} onPress={() => setSelectedFrameShape(key as FrameShapeType)}>
                        <Tag isSelected={selectedFrameShape === key}>
                          <Font text={label} kind="semi16" />
                        </Tag>
                      </TouchableOpacity>
                    ))}
                  </TagList>
                </FilterItem>

                <FilterItem>
                  <Font text="프레임 형태" kind="semi18" />
                  <TagList>
                    {Object.entries(FrameMaterialMap).map(([key, label]) => (
                      <TouchableOpacity key={key} onPress={() => setSelectedFrameMaterial(key as FrameMaterialType)}>
                        <Tag isSelected={selectedFrameMaterial === key}>
                          <Font text={label} kind="semi16" />
                        </Tag>
                      </TouchableOpacity>
                    ))}
                  </TagList>
                </FilterItem>
              </FilterGroup>
            )}
          </SectionWrapper>

          <SectionWrapper>
            <SectionHeader onPress={() => setIsLensOpen(!isLensOpen)}>
              <Font text="렌즈" kind="semi20" />
              <Arrow size={28} rotate={isLensOpen ? "bottom" : "top"} />
            </SectionHeader>

            {isLensOpen && (
              <FilterGroup>
                <FilterItem>
                  <Font text="주기" kind="semi18" />
                  <TagList>
                    {Object.entries(LensDateTypeMap).map(([key, label]) => (
                      <TouchableOpacity key={key} onPress={() => setSelectedLensDate(key as LensDateType)}>
                        <Tag isSelected={selectedLensDate === key}>
                          <Font text={label} kind="semi16" />
                        </Tag>
                      </TouchableOpacity>
                    ))}
                  </TagList>
                </FilterItem>

                <FilterItem>
                  <Font text="색상" kind="semi18" />
                  <Font
                    text={`${values[0].toFixed(1)}mm ~ ${values[1].toFixed(1)}mm`}
                    color="pink300"
                    kind="medium20"
                  />
                  <MultiSlider
                    values={values}
                    min={11.6}
                    max={14.5}
                    step={0.1}
                    trackStyle={{ height: 6, borderRadius: 10 }}
                    markerStyle={{
                      height: 20,
                      width: 20,
                      backgroundColor: color.white,
                      borderColor: color.gray400,
                      borderWidth: 1,
                      marginTop: 7,
                    }}
                    onValuesChange={setValues}
                    selectedStyle={{ backgroundColor: color.pink300 }}
                    unselectedStyle={{ backgroundColor: color.gray300 }}
                    containerStyle={{ height: 24, justifyContent: 'center' }}
                  />
                </FilterItem>

                <FilterItem>
                  <Font text="색상" kind="semi18" />
                  <TagList>
                    {Object.entries(LensColorMap).map(([key, label]) => (
                      <TouchableOpacity key={key} onPress={() => setSelectedLensColor(key as LensColorType)}>
                        <Tag isSelected={selectedLensColor === key}>
                          {key === 'OTHER' ? null : (
                            <View
                              style={{
                                backgroundColor: LensColorCodeMap[key as LensColorType],
                                width: 24,
                                height: 24,
                                borderRadius: 12,
                              }}
                            />
                          )}
                          <Font text={label} kind="semi16" />
                        </Tag>
                      </TouchableOpacity>
                    ))}
                  </TagList>
                </FilterItem>
              </FilterGroup>
            )}
          </SectionWrapper>
        </FilterSections>
      </PageContainer>

      <ControlBar>
        <ResetButton>
          <Reset />
          <Font text="선택 초기화" kind="semi16" />
        </ResetButton>
        <Button>
          <Font text="29,000개의 상품보기" color="white" kind="semi16" />
        </Button>
      </ControlBar>
    </>
  );
};

const PageContainer = styled.ScrollView`
  flex: 1;
  padding-top: 72px;
  background-color: ${color.white};
`;

const FilterSections = styled.View`
  flex-direction: column;
  padding-bottom: 148px;
`;

const SectionWrapper = styled.View``;

const SectionHeader = styled.TouchableOpacity`
  padding: 18px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FilterGroup = styled.View`
  padding: 0 20px;
`;

const FilterItem = styled.View`
  flex-direction: column;
  gap: 22px;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-color: ${color.gray200};
`;

const TagList = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;

const Tag = styled.View<{ isSelected: boolean }>`
  padding: 10px 16px;
  border-radius: 8px;
  border-width: 1px;
  flex-direction: row;
  gap: 8px;
  border-color: ${color.gray300};
  background-color: ${color.white};
`;

const ControlBar = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 12px;
  flex-direction: row;
  gap: 20px;
  background-color: ${color.white}; 
`;

const ResetButton = styled.TouchableOpacity`
  flex-direction: row;
  gap: 7px;
  align-items: center;
`;

const Button = styled.View`
  flex: 1;
  padding: 14px 0;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${color.black};
`

const SelectedFilterTagWrapper = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  gap: 10px;
`

const SelectedTag = styled.View`
  flex-direction: row;
  padding: 10px 16px;
  gap: 8px;
  border-radius: 8px;
  align-items: center;
  background-color: ${color.black};
`

export default Filter;
