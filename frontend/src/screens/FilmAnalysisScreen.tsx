// screens/FilmAnalysisScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Video from 'react-native-video';
import { useRoute } from '@react-navigation/native';

const FilmAnalysisScreen = () => {
  const route = useRoute();
  const { gameId } = route.params;
  const [playData, setPlayData] = useState(null);

  useEffect(() => {
    fetch(`http://YOUR_BACKEND_API/plays?gameId=${gameId}`)
      .then(res => res.json())
      .then(data => setPlayData(data));
  }, [gameId]);

  return (
    <View style={{ flex: 1 }}>
      <Video
        source={{ uri: 'http://YOUR_VIDEO_STORAGE/game_film.mp4' }}
        style={{ width: '100%', height: 300 }}
        controls={true}
      />
      {playData && (
        <View style={{ padding: 20 }}>
          <Text>Down: {playData.down}</Text>
          <Text>Distance: {playData.distance}</Text>
          <Text>Formation: {playData.formation}</Text>
          <Text>Predicted Play: {playData.predicted_play}</Text>
        </View>
      )}
    </View>
  );
};

export default FilmAnalysisScreen;
