import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Pressable, Text} from 'react-native';
import styled from 'styled-components/native';
import {decrement, increment} from './counterSlice';

const Container = styled.View`
  border: 1px solid black;
`;

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <Container>
      <Pressable onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </Pressable>
    </Container>
  );
}
