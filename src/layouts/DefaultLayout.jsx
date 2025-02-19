import { Outlet } from 'react-router-dom'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const APP_NAME = 'Yu.3_'

const DefaultLayout = () => {
  return (
    <>
      <Header appName={APP_NAME} />
      <div className='page-main'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
