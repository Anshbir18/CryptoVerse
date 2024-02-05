//will use this as layout

import React from 'react'
import { Layout,Typography,Space } from 'antd'
import { Navbar } from './Components'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className='app'>
          <div className='navbar'>
            <Navbar/>
          </div>

          <div className='main'>
              <Layout>
                <div className="routes">
                  <Outlet/>
                </div>
              </Layout>
          

          <div className='footer'>
            <Typography.Title
            level={5} style={{color :"white",textAlign: "center"}} >
            
              cryptoVerse
              <br/>
              All rights reserved
            </Typography.Title>

            <Space>

              <Link to= "/">Home</Link>
              <Link to= "/exchanges">Exchanges</Link>
              <Link to= "/news">News</Link>
              

            </Space>
          </div>
      </div>
 </div>

    </>
    
  )
}

export default App