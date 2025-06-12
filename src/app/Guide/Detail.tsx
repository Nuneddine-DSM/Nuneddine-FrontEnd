import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { useNavigation, useRoute, } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from '@tanstack/react-query';
import { getGuidesDetail } from '../../apis/guids';
import { marked } from 'marked';
import RenderHTML from 'react-native-render-html';
import { Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

const contentWidth = Dimensions.get('window').width;

const GuideDetail = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute();
  const { selectedId } = route.params as { selectedId: number }

  const {
    data: guideData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["guides", selectedId],
    queryFn: () => getGuidesDetail(selectedId),
  });

  const [html, setHtml] = useState('');

  useEffect(() => {
    const convertMarkdown = async () => {
      const result = await marked.parse(guideData.content);
      setHtml(result);
    };
    convertMarkdown();
  }, [guideData?.content]);

  if (isLoading) return <><Font text="로딩중" /></>
  if (isError || !guideData) return <></>

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
        <GuideImage source={{ uri: guideData.image_url }} />

        <GuideContent>
          <TitleWrapper>
            <Font text={guideData.title} kind="semi24" />
          </TitleWrapper>
          <Description>
            <RenderHTML
              contentWidth={contentWidth}
              source={{ html }}
              baseStyle={{
                fontSize: 18,
                lineHeight: 28,
                fontFamily: 'Pretendard-Medium',
                color: '#000'
              }}
              tagsStyles={{
                h1: { fontSize: 24, fontWeight: 'bold' },
                h2: { fontSize: 20, fontWeight: 'bold' },
                h3: { fontSize: 18, fontWeight: 'bold' },
                a: { color: color.gray500, textDecorationLine: 'underline' },
                strong: { fontSize: 22, fontWeight: '600' },
                ul: { paddingLeft: 20, marginBottom: 10 },
                li: { marginBottom: 6 },
                table: {
                  overflow: 'hidden',
                },
                th: {
                  padding: 10,
                  borderBottomWidth: 1,
                  borderColor: color.black,
                  fontSize: 16,
                  fontWeight: '600',
                },
                td: {
                  paddingTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderBottomWidth: 1,
                  borderColor: color.black,
                },
                br: { height: 10 },
              }}
            />
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
  flex: 1;
`

export default GuideDetail