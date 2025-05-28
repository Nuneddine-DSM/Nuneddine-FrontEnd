import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from '@tanstack/react-query';
import { getGuidesDetail } from '../../apis/guids';
import Markdown from 'react-native-markdown-display';

const QuestionIcon = require("../../assets/Question.png")

const GuideDetail = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const route = useRoute();
  const { selectedId } = route.params as { selectedId: number }

  const { data } = useQuery({
    queryKey: ["guides", selectedId],
    queryFn: () => getGuidesDetail(selectedId)
  })

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
        <GuideImage source={{ uri: data.imageUrl }} />

        <GuideContent>
          <TitleWrapper>
            <QuestionImage source={QuestionIcon} resizeMode="cover" />
            <Font text={data.title} kind="extraBold20" />
          </TitleWrapper>
          <Description>
            <Markdown
              style={{
                body: { color: "black", fontSize: 18 },
                heading1: { fontSize: 22, fontWeight: 'bold' },
                u: { textDecorationLine: 'underline', color: `${color.pink300}` },
                blockquote: {
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  borderLeftColor: "black",
                  borderLeftWidth: 4,
                },
                bullet_list: { marginVertical: 8 },
                list_item: { flexDirection: 'row', marginBottom: 15 },
              }}
            >
              {data.content}
            </Markdown>
          </Description>
        </GuideContent>
      </ScrollView>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding-top: 62px;
  background-color: ${color.white};
`

const GuideImage = styled.Image`
  width: 100%;
  height: 200px;
  background-color: ${color.gray100};
`

const GuideContent = styled.View`
  flex-direction: column;
  padding: 34px 20px 52px;
  gap: 28px;
`

const TitleWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`

const QuestionImage = styled.Image`
  width: 28px;
  height: 22px;
`

const Description = styled.View`
  width: 100%;
  height: 500px;
  background-color: ${color.gray100};
`

export default GuideDetail