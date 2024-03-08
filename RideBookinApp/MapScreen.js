import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Your Location"
          description="This is you!"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
