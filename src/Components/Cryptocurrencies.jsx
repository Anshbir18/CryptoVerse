import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (cryptosList) {
      // Filter cryptos based on search term
      const filteredData = cryptosList?.data?.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredData);
    }
  }, [cryptosList, searchTerm]);

  if (isFetching) {
    return 'Loading...';
  }

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input
            placeholder='Search Your Crypto'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
        
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((ele) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={ele.id}>
            <Link to={`/crypto/${ele.id}`}>
              <Card
                title={`${ele.rank}. ${ele.name}`}
                extra={<img className='crypto-image' src={ele.iconUrl} alt={ele.name} />}
                hoverable
              >
                <p>Price: {millify(ele.price)}</p>
                <p>Market Cap: {millify(ele.marketCap)}</p>
                <p>Daily Change: {millify(ele.change)} %</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
