import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import{Row,Col,Card,Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi';
const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  return (
    <>
      
    </>
  );
};


export default Cryptocurrencies