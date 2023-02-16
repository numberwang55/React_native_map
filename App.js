import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import * as TaskManager from "expo-task-manager";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let info = await Location.getProviderStatusAsync();
      console.log("gps status", info);

      // setLocation(location);
      let location = await Location.watchPositionAsync(
        {
          distanceInterval: 1000,
        },
        (loc) => {
          console.log("new watch position", loc);
        }
      );

      //start location
      // let location = await Location.startLocationUpdatesAsync("task", {
      //   accuracy: Location.Accuracy.BestForNavigation,
      //   timeInterval: 0,
      //   deferredUpdatesInterval: 0,
      //   deferredUpdatesDistance: 0,
      //   distanceInterval: 0,
      // });
      // TaskManager.defineTask("task", ({ data: { locations }, error }) => {
      //   if (error) {
      //     // check `error.message` for more details.
      //     return;
      //   }
      //   console.log("Received new locations", locations);
      // });

      setLocation(location);
    })();
  }, []);

  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }

  console.log(
    "distance",
    calcCrow(59.3293371, 13.4877472, 59.3225525, 13.4619422).toFixed(1)
  );

  return (
    <View style={styles.container}>
      <Text>App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>stuff</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
