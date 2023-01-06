import { NativeBaseProvider, View, Box } from "native-base";
import React from 'react'
import Home from './src/Home'

const BlackBackground = ({ children }) => {
  return (
    <View bgColor="black." flex={1}>
      {children}
    </View>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <BlackBackground>
   <Home></Home>
      </BlackBackground>
    </NativeBaseProvider>
  )
}

export default App