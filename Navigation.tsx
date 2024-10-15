import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, ImageBackground } from "react-native";
import { screensConfig } from "./constants/screens";
import { useMemo } from "react";
import { Products } from "./constants/routes";


const Navigation = () => {

    const Stack = createNativeStackNavigator()

    const screens = useMemo(
      () => screensConfig(),
      [],
    )
  
    const renderScreens = () => {
  
      return (
        <>
          {screens.map((screen) => {
            let screenOptions = { ...screen.options }
            return (
              <Stack.Screen
                name={screen.name}
                options={screenOptions}
              >
                {(props) => (
                  <screen.Component
                    {...props}
                  />
                )}
              </Stack.Screen>
            )
          })}
        </>
      )
    }

 return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Products}>
            {renderScreens()}
        </Stack.Navigator>
    </NavigationContainer>
 )
}

export default Navigation