import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    console.log('Path changed:', pathname, search) // Debug: 檢查是否觸發
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, search])

  return null
}

export default ScrollToTop
