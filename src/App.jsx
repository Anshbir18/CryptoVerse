//will use this as layout

import React from 'react'
// import {}
import { Layout,Typography,Space } from 'antd'
import { Navbar } from './Components'
import { Outlet } from 'react-router-dom'

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
          </div>

          <div className='footer'>

          </div>
      </div>


    </>
    
  )
}

export default App