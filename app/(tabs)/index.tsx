import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Container
      colors={["#fff5ec", "#fdf2f6", "#eaf3ff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollContent contentContainerStyle={{ paddingBottom: 80 }}>
        {/* ---------------- WELCOME SECTION ---------------- */}
        <WelcomeSection>
          <LogoContainer>
            <Text style={{ fontSize: 28 }}>🕉️</Text>
          </LogoContainer>

          {/* <WelcomeTitle>স্বাগতম</WelcomeTitle> */}
          <BrandText>বাংলা গীতা</BrandText>

          <WelcomeSubtitle>
            শ্রীমদ্ভগবদ্গীতার জ্ঞান অন্বেষণ করুন — এক শ্লোক একবারে।
          </WelcomeSubtitle>

          <GradientButton
            colors={["#ff4b2b", "#ff416c"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            onPress={() => router.push("/explore")}
          >
            <ButtonText onPress={() => router.push("/explore")}>শিখা শুরু করুন</ButtonText>
          </GradientButton>
        </WelcomeSection>

        {/* ---------------- HEADER CARD ---------------- */}
        <HeaderCard>
          <HeaderIcon>
            <Text style={{ fontSize: 24 }}>🕉️</Text>
          </HeaderIcon>
          <HeaderText>
            <HeaderTitle>পবিত্র জ্ঞান</HeaderTitle>
            <HeaderSmallSubtitle>
              চিরন্তন জ্ঞান এবং আধ্যাত্মিক দিকনির্দেশনা অন্বেষণ করুন
            </HeaderSmallSubtitle>
          </HeaderText>
        </HeaderCard>

        {/* ---------------- EXPLORE SECTION ---------------- */}
        <SectionTitle>অন্বেষণ করুন</SectionTitle>

        <Grid>
          <GridCard color="#FFA646" onPress={() => router.push("/explore")}>
            <CardEmoji>📖</CardEmoji>
            <CardTitle>অধ্যায়</CardTitle>
            <CardSubtitle>১৮টি দివ্য অধ্যায়</CardSubtitle>
          </GridCard>

          <GridCard color="#F76EB3" onPress={() => router.push("/explore")}>
            <CardEmoji>✨</CardEmoji>
            <CardTitle>শ্লোক</CardTitle>
            <CardSubtitle>৭০০টি পবিত্র শ্লোক</CardSubtitle>
          </GridCard>

          <GridCard color="#4CB4FF" onPress={() => router.push("/explore")}>
            <CardEmoji>☀️</CardEmoji>
            <CardTitle>দৈনিক শ্লোক</CardTitle>
            <CardSubtitle>আজকের জ্ঞান</CardSubtitle>
          </GridCard>

          <GridCard color="#A259FF" onPress={() => router.push("/explore")}>
            <CardEmoji>🎯</CardEmoji>
            <CardTitle>কুইজ</CardTitle>
            <CardSubtitle>আপনার জ্ঞান পরীক্ষা করুন</CardSubtitle>
          </GridCard>
        </Grid>

        {/* ---------------- LEARN PATH ---------------- */}
        <LearnGradient
          colors={["#FDE68A", "#FBBF24"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <LearnCard onPress={() => router.push("/learn")}>
            <LearnEmoji>🏅</LearnEmoji>
            <LearnTitle>শিখার পথ</LearnTitle>
            <LearnSubtitle>সংগঠিত শেখার যাত্রা</LearnSubtitle>
          </LearnCard>
        </LearnGradient>

        {/* ---------------- FEATURED VERSE ---------------- */}
        <VerseGradient
          colors={["#5B5FF4", "#7B61FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <VerseLabel>বিশেষ শ্লোক</VerseLabel>
          <VerseText>
            &quot; কর্তব্যের ফলের অধিকার আপনার নেই, তবে কর্তব্য পালন করতে হবে।
          </VerseText>
          <VerseSource>শ্রীমদ্ভগবদ্গীতা ২.৪৭</VerseSource>
        </VerseGradient>
      </ScrollContent>
    </Container>
  );
}

/* ---------------- STYLES ---------------- */
const Container = styled(LinearGradient)`flex: 1;`;

const ScrollContent = styled.ScrollView`padding: 20px;`;

const WelcomeSection = styled.View`align-items: center; margin-bottom: 40px;`;

const LogoContainer = styled.View`
  background-color: #e2bebeff;
  height: 80px;
  width: 80px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const WelcomeTitle = styled.Text`
  font-size: 24px;
  color: #e60074;
  font-weight: 600;
  text-align: center;
`;

const BrandText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #e60074;
  margin-bottom: 10px;
  text-align: center;
`;

const WelcomeSubtitle = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
  font-weight: 300;
`;

const GradientButton = styled(LinearGradient)`
  padding-vertical: 12px;
  padding-horizontal: 30px;
  border-radius: 25px;
  width: 200px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const HeaderCard = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  margin-bottom: 20px;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 5px;
  elevation: 2;
`;

const HeaderIcon = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #f3e6ff;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const HeaderText = styled.View`flex: 1;`;

const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

const HeaderSmallSubtitle = styled.Text`
  color: #666;
  font-size: 14px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

type CardProp = { color: string };
const GridCard = styled.TouchableOpacity<CardProp>`
  width: 48%;
  border-radius: 16px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: ${(p: any) => p.color};
`;

const CardEmoji = styled.Text`font-size: 22px; margin-bottom: 5px;`;
const CardTitle = styled.Text`font-size: 16px; font-weight: 700; color: #fff;`;
const CardSubtitle = styled.Text`font-size: 13px; color: #fff; opacity: 0.9;`;

const LearnGradient = styled(LinearGradient)`
  border-radius: 16px;
  margin-top: 5px;
  margin-bottom: 20px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 3;
`;

const LearnCard = styled.TouchableOpacity`padding: 20px;`;
const LearnEmoji = styled.Text`font-size: 22px; margin-bottom: 5px;`;
const LearnTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #5b4b00;
`;
const LearnSubtitle = styled.Text`
  font-size: 13px;
  color: #5b4b00;
  opacity: 0.8;
`;

const VerseGradient = styled(LinearGradient)`
  border-radius: 16px;
  padding: 20px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 3;
`;

const VerseLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const VerseText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 22px;
`;

const VerseSource = styled.Text`
  color: #d6d4ff;
  font-size: 13px;
`;
