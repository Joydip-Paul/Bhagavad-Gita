import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

export default function learnScreen() {
  return (
    <Container
      colors={["#fff5ec", "#fdf2f6", "#eaf3ff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollContent contentContainerStyle={{ paddingBottom: 80 }}>
        <WelcomeSection>
        <View>
          <Text>Hello</Text>
        </View>
        <View>
          <Text>Hello</Text>
        </View>
        </WelcomeSection>
      </ScrollContent>
    </Container>
  );
}

const Container = styled(LinearGradient)`
  flex: 1;
  background-color: "#fff";
`;

const ScrollContent = styled.ScrollView`
  padding: 20px;
`;

const WelcomeSection = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;