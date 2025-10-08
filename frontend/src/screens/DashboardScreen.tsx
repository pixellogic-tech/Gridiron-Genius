// screens/DashboardScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const [games, setGames] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://YOUR_BACKEND_API/games')
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Recent Games</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.game_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FilmAnalysis', { gameId: item.game_id })}
            style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
          >
            <Text>{item.home_team} vs {item.away_team}</Text>
            <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DashboardScreen;
