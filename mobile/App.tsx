import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import TabNavigator from '$navigators/TabNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
  );
}

