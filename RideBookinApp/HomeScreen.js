import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Ride-Booking App</Text>
      <Button
        title="Go to Map"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
};

export default HomeScreen;
