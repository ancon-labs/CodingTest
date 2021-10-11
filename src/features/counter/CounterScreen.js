import React from 'react';
import {SafeAreaView} from 'react-native';
import Outlet from '../outlets/Outlet';
import {Counter} from './Counter';

function CounterScreen() {
  return (
    <SafeAreaView>
      <Counter />
      <Outlet />
    </SafeAreaView>
  );
}

export default CounterScreen;
