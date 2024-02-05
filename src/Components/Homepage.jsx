import { Col, Row, Statistic, Typography } from 'antd';
import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();

  console.log(data);

  return (
   <>
  <Title level={2} className="heading">Global Crypto Statistics</Title>
    <Row>
        <Col span={12}>
          <Statistic title="total cryptocurrencies" value="5"/>
        </Col>

        <Col span={12}>
          <Statistic title="total exhanges" value="5"/>
        </Col>

        <Col span={12}>
          <Statistic title="total market cap" value="5"/>
        </Col>

        <Col span={12}>
          <Statistic title="total 24h vol" value="5"/>
        </Col>

        <Col span={12}>
          <Statistic title="total markets" value="5"/>
        </Col>
    </Row>

   </>
  )
}

export default Home