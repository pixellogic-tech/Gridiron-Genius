// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/DashboardScreen';
import FilmAnalysisScreen from './screens/FilmAnalysisScreen';
import ScoutingReportScreen from './screens/ScoutingReportScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="FilmAnalysis" component={FilmAnalysisScreen} />
        <Stack.Screen name="ScoutingReport" component={ScoutingReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
