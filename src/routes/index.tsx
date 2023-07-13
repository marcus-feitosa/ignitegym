import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { Box, useTheme } from "native-base";


import { useAuth } from '@hooks/useAuth';



export function Routes() {
    const { user } = useAuth();
    const { colors } = useTheme();
    
    const theme = DefaultTheme;
    theme.colors.background = colors.gray[700];

    console.log("USUÁRIO LOGADO =>", user);
  return (
  <Box flex={1} bg="gray.700">
    <NavigationContainer theme={theme}>
    {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  </Box>
  );
}