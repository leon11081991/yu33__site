import { useParams } from 'react-router-dom'

import ProjectBanner from '@/components/ProjectBanner'
import KolProjectPage from '@/components/pages/KolProjectPage'
import PingoProjectPage from '@/components/pages/PingoProjectPage'
import KaiProjectPage from '@/components/pages/KaiProjectPage'
import MandalaProjectPage from '@/components/pages/MandalaProjectPage'
import ContactMe from '@/components/ContactMe'

import { BANNER_DATA } from '@/data/banner-data'
import { PROJECT_DATA } from '@/data/project-data'

// 定義可用的頁面元件
const PAGE_COMPONENTS = {
  kol: KolProjectPage,
  pingo: PingoProjectPage,
  kai: KaiProjectPage,
  mandala: MandalaProjectPage
}

// 定義 Banner 圖片尺寸
const BANNER_SIZE = {
  width: 1920,
  height: 600
}

const Project = () => {
  const { projectName } = useParams()

  // 根據 projectName 動態載入對應的頁面元件
  // TODO: 加入 NotFound 頁面替換 null
  const SelectedProjectPage =
    projectName && PAGE_COMPONENTS[projectName] ? PAGE_COMPONENTS[projectName] : null

  return (
    <>
      <ProjectBanner
        src={BANNER_DATA[projectName].src}
        alt={BANNER_DATA[projectName].alt}
        placeholder={BANNER_DATA[projectName].placeholder}
        width={BANNER_SIZE.width}
        height={BANNER_SIZE.height}
      />
      {SelectedProjectPage && <SelectedProjectPage {...PROJECT_DATA[projectName]} />}
      <ContactMe />
    </>
  )
}

export default Project
