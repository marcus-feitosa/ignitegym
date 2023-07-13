
import { Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { StatusBar } from 'react-native';

import { THEME } from './src/theme';

import { Loading } from '@components/Loading';
import { SignUp } from '@screens/SignUp';
import { Routes } from '@routes/index';
import { AuthContext } from 'src/context/AuthContext';


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (

    <NativeBaseProvider theme={THEME}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      <AuthContext.Provider value={{
          user: {
            id: '1',
            name: 'Rodrigo Gonçalves',
            email: 'rodrigo@email.com',
            avatar: 'rodrigo.png'
          }
        }}>
          {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}

