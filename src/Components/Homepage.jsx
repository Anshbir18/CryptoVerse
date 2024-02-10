import { Col, Row, Statistic, Typography } from 'antd';
import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
const { Title } = Typography;
import { Link } from 'react-router-dom';

import {Cryptocurrencies,News} from "./index.js"

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  console.log(data);
  const gobalStats=data?.data?.stats;

  if(isFetching) return "fetching....";

  return (
   <>
  <Title level={2} className="heading">Global Crypto Statistics</Title>
    <Row>
        <Col span={12}>
          <Statistic title="total cryptocurrencies" value={gobalStats.total}/>
        </Col>

        <Col span={12}>
          <Statistic title="total exhanges" value={millify(gobalStats.totalExchanges)}/>
        </Col>

        <Col span={12}>
          <Statistic title="total market cap" value={millify(gobalStats.totalMarketCap)}/>
        </Col>

        <Col span={12}>
          <Statistic title="total 24h vol" value={millify(gobalStats.total24hVolume)}/>
        </Col>

        <Col span={12}>
          <Statistic title="total markets" value={millify(gobalStats.totalMarkets)}/>
        </Col>
    </Row>


    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 cryptos in the world</Title>
      <Title level={3} className="show-more">
        <Link to ="/cryptocurrencies">show more</Link>
      </Title>
    </div>
    <Cryptocurrencies simplified={true} />

    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 cryptos news</Title>
      <Title level={3} className="show-more">
        <Link to ="/news simplified">show more</Link>
      </Title>
    </div>
    <News simplified/>  
    {/* simplified here is a prop with which we will show only 10 items */}
   </>
  )
}

export default Home