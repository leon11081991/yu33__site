import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/global/ScrollToTop'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const APP_NAME = 'Yu.3_'

const DefaultLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header appName={APP_NAME} />
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
