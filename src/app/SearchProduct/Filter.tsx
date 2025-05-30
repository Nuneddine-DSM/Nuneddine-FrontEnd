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
import { useSearchStore } from "../../stores/useSearchStore";
import { ScrollView } from "react-native"

const Filter = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [values, setValues] = useState<[number, number]>([11.6, 13.9]);

  const [isFrameOpen, setIsFrameOpen] = useState(true);
  const [isLensOpen, setIsLensOpen] = useState(true);

  const handleSliderChange = (newValues: number[]) => {
    setValues([newValues[0], newValues[1]]);
  };

  const {
    frame_shape,
    frame_material,
    lens_color,
    lens_date_type,
    toggleFilterValue,
    resetFilters
  } = useSearchStore();

  const allSelectedFilters = [
    ...frame_shape,
    ...frame_material,
    ...lens_color,
    ...lens_date_type,
  ];

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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SelectedFilterTagWrapper>
            {allSelectedFilters.map((value, index) => {
              const translatedValue =
                FrameShapeMap[value as keyof typeof FrameShapeMap] ||
                FrameMaterialMap[value as keyof typeof FrameMaterialMap] ||
                LensColorMap[value as keyof typeof LensColorMap] ||
                LensDateTypeMap[value as keyof typeof LensDateTypeMap] ||
                value;

              const getFilterKey = () => {
                if (frame_shape.includes(value as FrameShapeType)) return 'frame_shape';
                if (frame_material.includes(value as FrameMaterialType)) return 'frame_material';
                if (lens_color.includes(value as LensColorType)) return 'lens_color';
                if (lens_date_type.includes(value as LensDateType)) return 'lens_date_type';
                return null;
              };

              const filterKey = getFilterKey();

              return (
                <SelectedTag key={index}>
                  <Font text={translatedValue} kind="medium16" color="white" />
                  {filterKey && (
                    <X
                      size={20}
                      color={color.gray500}
                      onPress={() => toggleFilterValue(filterKey, value)}
                    />
                  )}
                </SelectedTag>
              );
            })}
          </SelectedFilterTagWrapper>
        </ScrollView>

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
                    {Object.entries(FrameShapeMap).map(([key, value]) => (
                      <TouchableOpacity
                        key={key}
                        onPress={() => toggleFilterValue('frame_shape', key as FrameShapeType)}
                      >
                        <Tag isSelected={frame_shape.includes(key as FrameShapeType)}>
                          <Font
                            text={value}
                            kind="medium16"
                            color={frame_shape.includes(key as FrameShapeType) ? "white" : "black"}
                          />
                        </Tag>
                      </TouchableOpacity>
                    ))}
                  </TagList>
                </FilterItem>

                <FilterItem>
                  <Font text="프레임 형태" kind="semi18" />
                  <TagList>
                    {Object.entries(FrameMaterialMap).map(([key, value]) => (
                      <TouchableOpacity
                        key={key}
                        onPress={() => toggleFilterValue('frame_material', key as FrameMaterialType)}
                      >
                        <Tag key={key} isSelected={frame_material.includes(key as FrameMaterialType)}>
                          <Font
                            text={value}
                            kind="medium16"
                            color={frame_material.includes(key as FrameMaterialType) ? "white" : "black"}
                          />
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
                    {Object.entries(LensDateTypeMap).map(([key, value]) => (
                      <TouchableOpacity
                        key={key}
                        onPress={() => toggleFilterValue('lens_date_type', key as LensDateType)}
                      >
                        <Tag isSelected={lens_date_type.includes(key as LensDateType)}>
                          <Font
                            text={value}
                            kind="medium16"
                            color={lens_date_type.includes(key as LensDateType) ? "white" : "black"}
                          />
                        </Tag>
                      </TouchableOpacity>
                    ))}
                  </TagList>
                </FilterItem>

                <FilterItem>
                  <Font text="직경" kind="semi18" />
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
                    onValuesChange={handleSliderChange}
                    selectedStyle={{ backgroundColor: color.pink300 }}
                    unselectedStyle={{ backgroundColor: color.gray300 }}
                    containerStyle={{ height: 24, justifyContent: 'center' }}
                  />
                </FilterItem>

                <FilterItem>
                  <Font text="색상" kind="semi18" />
                  <TagList>
                    {Object.entries(LensColorMap).map(([key, label]) => (
                      <TouchableOpacity
                        key={key}
                        onPress={() => toggleFilterValue('lens_color', key as LensColorType)}
                      >
                        <Tag isSelected={lens_color.includes(key as LensColorType)}>
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
                          <Font
                            text={label}
                            kind="semi16"
                            color={lens_color.includes(key as LensColorType) ? "white" : "black"}
                          />
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
        <ResetButton onPress={resetFilters}>
          <Reset />
          <Font text="선택 초기화" kind="semi16" />
        </ResetButton>
        <Button onPress={() => navigation.navigate("SearchProduct")}>
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
  border-color: ${({ isSelected }) => isSelected ? color.black : color.gray300};
  background-color: ${({ isSelected }) => isSelected ? color.black : color.white};
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

const Button = styled.TouchableOpacity`
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
