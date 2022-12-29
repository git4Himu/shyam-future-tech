import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import { store } from "./src/store";
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from "react";

// For Fake Promise
const fakePromisse = ()=> {
  new Promise<boolean>((resolve, reject)=> {
    setInterval(()=> {resolve(true)}, 5000)
  })
}
SplashScreen.preventAutoHideAsync();
export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(()=> {
    (async ()=> {
      await fakePromisse();
      await SplashScreen.hideAsync();
      setAppIsReady(true);
    })()
  },[]);

  if(!appIsReady){
    return null;
  }

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
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
