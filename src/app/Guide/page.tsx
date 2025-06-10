import styled from 'styled-components/native';
import { useState } from 'react';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { getGuides } from '../../apis/guids';
import { useQuery } from '@tanstack/react-query';
import { GuideItemType, TipItemType } from '../../interface';

const QuestionIcon = require("../../assets/Question.png")
const AnswerIcon = require("../../assets/AnswerImage.png")

const Guide = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const { data: GuideListData } = useQuery({
    queryKey: [getGuides],
    queryFn: getGuides
  });

  return (
    <Container>
      <TopBar
        text="가이드"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <GuideListWrapper>
          {GuideListData?.guide_list.map((item: GuideItemType) => (
            <GuideItem key={item.guide_id} onPress={() => navigation.navigate("GuideDetail", { selectedId: item.guide_id })}>
              <GuideImage source={{ uri: item.image_url }} />
              <InfoWrapper>
                <Font text="렌즈 기초 TIP" kind="medium16" color="gray400" />
                <Font
                  text={item.title}
                  kind="bold24"
                  numberOfLines={2}
                  ellipsizeMode="tail"
                />
              </InfoWrapper>
            </GuideItem>
          ))}
        </GuideListWrapper>

        <QuestionContent>
          <Font text="자주 묻는 질문 (FAQ)" kind="bold24" />

          <QuestionListWrapper>
            {GuideListData?.tip_list.map((item: TipItemType, index: number) => {
              const isOpen = openIndexes.includes(index);
              return (
                <QuestionItem key={index} onPress={() => toggleOpen(index)}>
                  <QuestionWrap>
                    <TitleWrapper>
                      <Image source={QuestionIcon} />
                      <Font text={item.question} kind="medium16" color="gray600" />
                    </TitleWrapper>
                    <Arrow size={20} color={color.gray600} rotate={isOpen ? "top" : "bottom"} />
                  </QuestionWrap>

                  {isOpen && (
                    <AnswerWrap>
                      <Image source={AnswerIcon} />
                      <Font text={item.answer} kind="medium16" color="gray600" />
                    </AnswerWrap>
                  )}
                </QuestionItem>
              );
            })}
          </QuestionListWrapper>
        </QuestionContent>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.gray50};
`;

const GuideListWrapper = styled.View`
  flex-direction: column;
  background-color: ${color.white};
`;

const GuideItem = styled.TouchableOpacity`
  padding: 14px 20px;
`;

const GuideImage = styled.Image`
  width: 100%;
  height: 145px;
  border-radius: 20px;
  background-color: ${color.gray200};
`;

const InfoWrapper = styled.View`
  flex-direction: column;
  padding: 20px 7px;
  gap: 7px;
`;

const QuestionContent = styled.View`
  flex-direction: column;
  padding: 24px 20px 72px;
  gap: 25px;
  background-color: ${color.white};
`;

const QuestionWrap = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const QuestionListWrapper = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const QuestionItem = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 18px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${color.gray300};
  background-color: ${color.gray50};
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const Image = styled.Image`
  width: 24px;
  height: 18px;
`;

const AnswerWrap = styled.View`
  flex-direction: row;
  gap: 6px;
  padding: 0 18px;
`

export default Guide
