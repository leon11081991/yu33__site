// import { useParams } from 'react-router-dom'

import PageBanner from '@components/PageBanner'

import PageKai from '@components/page/PageKai'
import ContactMe from '@components/ContactMe'

import Img from '@assets/images/kai.webp'
import ImgSmall from '@assets/images/kai-small.jpg'

import KaiProcessImg from '@assets/kai/kai-process.svg'
import KaiSitemapImg from '@assets/kai/kai-sitemap.svg'
import KaiDemo1Img from '@assets/kai/kai-demo1.svg'
import KaiDemo2Img from '@assets/kai/kai-demo2.svg'
import KaiDemo3Img from '@assets/kai/kai-demo3.svg'

const PROJECT_DATA = {
  info: {
    title: 'KAI’S Gallery 凱奧畫廊',
    information: [
      {
        label: '專案時間',
        content: '2022'
      },
      {
        label: '負責項目',
        content: 'Sitemap繪製、品牌視覺規劃、UI Design、Design Guideline 產出。'
      },
      {
        label: '類型項目',
        content: 'Online Store Ｗeb Design'
      },
      {
        label: '團隊成員',
        content: 'Lillian Lin (Yu.3__) / Leon Chou / Ya Ching Kao'
      },
      {
        label: '擔任角色',
        content: 'UI/UX Designer'
      }
    ]
  },
  about: {
    title: '關於專案 / About Project',
    information: [
      {
        label: '品牌介紹',
        content:
          "KAI'S Gallery 是一個致力於支持本地藝術收藏的網站，並聚集了眾多來自世界各地的優質藝術創作家與作品，希望透過網站平台聚集更多來自世界各地的優質藝術創作者及作品，宣傳品牌精神同時提供用戶更多藝術相關資訊。 "
      },
      {
        label: '專案目標',
        content:
          '突出品牌調性&理念、提升導覽體驗，增設會員註冊功能及購物流程，全站搜尋以及多語系設定。'
      }
    ]
  },
  process: {
    title: '專案流程 / Project Process',
    picture: {
      src: KaiProcessImg,
      alt: '凱奧專案流程',
      placeholder: KaiProcessImg,
      width: 1122,
      height: 345
    }
  },
  sitemap: {
    title: '網站架構 / Sitemap',
    picture: {
      src: KaiSitemapImg,
      alt: '凱奧網站架構',
      placeholder: KaiSitemapImg,
      width: 844,
      height: 1219
    }
  },
  demo: {
    video: {
      test: 'video here'
    },
    pictures: [
      {
        src: KaiDemo1Img,
        alt: '凱奧網站展示',
        placeholder: KaiDemo1Img,
        width: 1440,
        height: 1199,
        isFullSize: true
      },
      {
        src: KaiDemo2Img,
        alt: '凱奧網站展示',
        placeholder: KaiDemo2Img,
        width: 800,
        height: 500,
        isFullSize: false
      },
      {
        src: KaiDemo3Img,
        alt: '凱奧網站展示',
        placeholder: KaiDemo3Img,
        width: 1440,
        height: 1408,
        isFullSize: true
      }
    ]
  }
}

const Project = () => {
  // const { projectName } = useParams()
  return (
    <>
      <PageBanner
        src={Img}
        alt={'test'}
        placeholder={ImgSmall}
        width={1920}
        height={600}
      />

      <PageKai {...PROJECT_DATA} />

      <ContactMe />
    </>
  )
}

export default Project
