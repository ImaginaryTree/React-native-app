import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import News from "./screens/news";
import NewsDetail from "./screens/news_detail";
import BottomTabs from "./navigations/BottomTabs"

const Stack = createNativeStackNavigator();

const App = () => {
  const headerStyle = {
    headerTitleStyle: { color: "black" },
    headerStyle: {
      backgroundColor: "#dddddd",
    },
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'}/>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "ITTS News",
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="News"
          component={News}
          options={{
            title: "Techno News",
            ...headerStyle,
          }}
        />
        <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          title: "News Detail",
          ...headerStyle,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
};

export default App;
