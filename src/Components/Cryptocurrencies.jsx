import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import{Row,Col,Card,Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi';
const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setcryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos);
  return (
    <>
      <Row gutter={[32,32]} className="crypto-card-container">
          {cryptos.map((ele)=>(
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={ele.id}>
              <Link to={`/crypto/${ele.id}`}>
                      <Card 
                      title ={`${ele.rank}. ${ele.name}`}
                      extra={<img className='crypto-image' src={ele.iconUrl}/>}
                      hoverable
                      >
                        <p>Price:{millify(ele.price)}</p>
                        <p>Market Cap:{millify(ele.marketCap)}</p>
                        <p>Daily Change:{millify(ele.change)} %</p>
                      </Card>
              </Link>
            </Col>
          ))}
            
      </Row>
    </>
  );
};


export default Cryptocurrencies