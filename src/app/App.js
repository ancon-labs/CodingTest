import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuTree from '../features/menuTrees/MenuTree';
import CheckScreen from '../features/checks/CheckScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={() => <MenuTree />}>
          <Drawer.Screen name="Check" component={CheckScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
