
import { Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    
    <NativeBaseProvider >
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      <Text>Open up App.tsx to start working on your app!</Text>
    </NativeBaseProvider>
  );
}

