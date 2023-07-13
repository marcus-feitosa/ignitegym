import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Text, VStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '@hooks/useAuth';
import defaulUserPhotoImg from '@assets/userPhotoDefault.png'; 

import { useAuth } from '@hooks/useAuth';

import defaulUserPhotoImg from '@assets/userPhotoDefault.png'; 

import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
<<<<<<< HEAD

  const { user, signOut } = useAuth();

=======
  const { user } = useAuth();
>>>>>>> 5624ebca409e332d4ced95fd332fc4ce4d8cc964
  return (
    
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
<<<<<<< HEAD
      <UserPhoto 
=======
        <UserPhoto 
>>>>>>> 5624ebca409e332d4ced95fd332fc4ce4d8cc964
        source={user.avatar  ? { uri: user.avatar } : defaulUserPhotoImg}
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />
      
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {user.name}
        </Heading>
      </VStack>


      <TouchableOpacity onPress={signOut}>
        <Icon 
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}