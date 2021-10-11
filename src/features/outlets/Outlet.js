import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import * as api from '../../api';

const Container = styled.View`
  padding: 10px;
  border: 1px solid black;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

function Outlet() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function init() {
      const response = await api.outlets.get.byId();
      setData(response.data);
    }

    init();
  }, []);

  console.log(data);

  return (
    <Container>
      <Title>{data?.name}</Title>
    </Container>
  );
}

export default Outlet;
