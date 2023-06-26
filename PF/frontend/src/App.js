import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginFront from './components/LoginFront';

const Stack = createNativeStackNavigator();

const App = () => {
  const [data, setData] = React.useState(null);
    
  const sacoDatosDeLogin = (props) => {
    console.log(props);
  };

  React.useEffect(() => {
    fetch("/LoginBack")
      .then((res) => res.json())
      .then((data) => setData(data.message));
    }, 
  []);


  return(
    
    <NavigationContainer>
      <Login MeLlevoValores = {sacoDatosDeLogin}/>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginFront}
        />
        <Stack.Screen name="RegistroFront" component={LoginFront} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;