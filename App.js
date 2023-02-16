import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import * as TaskManager from "expo-task-manager";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Geojson, Polyline } from 'react-native-maps';

export default function App() {
  // for navigation
  const Stack = createNativeStackNavigator();

  return (
    <Map />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

// create a marker

// const myPlace = {
//   type: 'FeatureCollection',
//   features: [
//     {
//       type: 'Feature',
//       properties: {},
//       geometry: {
//         type: 'Point',
//         coordinates: [-0.06390620316532036, 51.50475442686777],
//       }
//     }
//   ]
// };

// <MapView style={styles.map}>
//   <Geojson
//     geojson={myPlace}
//     strokeColor="red"
//     fillColor="green"
//     strokeWidth={2}
//   />
// </MapView>

function testRoute() {
  return [
    { latitude: 37.8025259, longitude: -122.4351431 },
    { latitude: 37.7896386, longitude: -122.421646 },
    { latitude: 37.7665248, longitude: -122.4161628 },
    { latitude: 37.7734160, longitude: -122.4577787 },
    { latitude: 37.7948605, longitude: -122.4596065 },
    { latitude: 37.8025259, longitude: -122.4351431 }
  ]
}

const Map = props => (
  <MapView style={styles.map} initialRegion={{
    latitude: 37.8025259,
    longitude: -122.4351431,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}>
    <Polyline
      coordinates={testRoute()}
      strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
      strokeColors={[
        '#7F0000',
        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
        '#B24112',
        '#E5845C',
        '#238C23',
        '#7F0000'
      ]}
      strokeWidth={6}
    />
  </MapView>
)

