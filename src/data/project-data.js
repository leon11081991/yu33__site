import PingoSitemapImg from '@/assets/images/pingo/pingo-sitemap.svg'

import KaiProcessImg from '@/assets/images/kai/kai-process.svg'
import KaiSitemapImg from '@/assets/images/kai/kai-sitemap.svg'
import KaiDemoVideo from '@/assets/videos/kai-demo.mp4'
import KaiDemo1Img from '@/assets/images/kai/kai-demo1.svg'
import KaiDemo2Img from '@/assets/images/kai/kai-demo2.svg'
import KaiDemo3Img from '@/assets/images/kai/kai-demo3.svg'

import MandalaSitemapImg from '@assets/images/mandala/mandala-sitemap.svg'
import MandalaDemoVideo from '@assets/videos/mandala-demo.mp4'
import MandalaDemo1Img from '@assets/images/mandala/mandala-demo-1.jpg'
import MandalaDemo2Img from '@assets/images/mandala/mandala-demo-2.png'
import MandalaDemo3Img from '@assets/images/mandala/mandala-demo-3.png'
import MandalaDemo4Img from '@assets/images/mandala/mandala-demo-4.png'

export const PROJECT_DATA = {
  pingo: {
    info: {
      title: 'Pingo 美食搜集神器',
      information: [
        {
          label: '專案時間',
          content: '2020'
        },
        {
          label: '負責項目',
          content: 'UX Research、UI介面調整、搜尋流程優化'
        },
        {
          label: '類型項目',
          content: 'APP Redesign'
        },
        {
          label: '團隊成員',
          content: 'Lillian Lin (Yu.3_)'
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
          label: '產品介紹',
          content:
            'Pingo是ㄧ款專為Instagram愛好者打造的口袋清單App，<span class="text-secondary-02">幫助使用者將收藏的景點、美食匯集成清單</span>，並將其分類，以及相關的店家資訊，大量減少了使用者搜尋景點及美食的時間，也因此受到大量使用者的喜愛。'
        },
        {
          label: '期望目標',
          content:
            '這一次Redesign的重點希望可以<span class="text-secondary-02">優化現階段的使用流程＆產品體驗</span>，讓使用者在操作上更直覺並符合使用者的需求，提升用戶的黏著度與滿意度。'
        }
      ]
    },
    sitemap: {
      title: '功能架構 / Information Architecture',
      description: null,
      indicators: [
        {
          id: 1,
          labelText: '獨立頁面',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'gray-01'
          }
        },
        {
          id: 2,
          labelText: '頁面資訊',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'primary-02'
          }
        },
        {
          id: 3,
          labelText: '優化範圍',
          labelType: {
            type: 'filled',
            size: 'small',
            color: 'secondary-02'
          }
        }
      ],
      picture: {
        src: PingoSitemapImg,
        alt: '新睿網站架構',
        placeholder: PingoSitemapImg,
        width: 549,
        height: 658
      }
    }
  },
  kai: {
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
          content: 'Lillian Lin (Yu.3_) / Leon Chou / Ya Ching Kao'
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
      description: '',
      indicators: [
        {
          id: 1,
          labelText: '獨立頁面',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'primary-02'
          }
        },
        {
          id: 2,
          labelText: '分類Tab',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'gray-01'
          }
        },
        {
          id: 3,
          labelText: '頁面資訊',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'primary-02'
          }
        },
        {
          id: 4,
          labelText: '內容/功能',
          labelType: {
            type: 'filled',
            size: 'small',
            color: 'primary-02'
          }
        }
      ],
      picture: {
        src: KaiSitemapImg,
        alt: '凱奧網站架構',
        placeholder: KaiSitemapImg,
        width: 844,
        height: 1219
      }
    },
    demoVideo: {
      videoSrc: KaiDemoVideo,
      videoLabel: '凱奧畫廊網站展示'
    },
    demo: {
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
  },
  mandala: {
    info: {
      title: 'Mandala 新睿生醫',
      information: [
        {
          label: '專案時間',
          content: '2021'
        },
        {
          label: '負責項目',
          content: 'Sitemap繪製、品牌視覺規劃、UI Design、Design Guideline 產出。'
        },
        {
          label: '類型項目',
          content: 'Branding Web Design'
        },
        {
          label: '團隊成員',
          content: 'Lillian Lin (Yu.3_) / Leon Chou / Ya Ching Kao'
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
            'Mandala-炘睿生醫是細胞醫學服務公司。專注細胞及延伸產品的發展，並致力於加快細胞醫學走進人們生活的速度，創造具社交性的個人化醫學服務體驗，協助成功的事業家們領先衰老、慢性疾病和癌症一步，不受阻礙的與家人享受生活，與夥伴們持續成就不凡。'
        },
        {
          label: '專案目標',
          content:
            '根據品牌形象理念等，<span class="text-secondary-01">規劃網站架構，著重資訊呈現，引導使用者快速了解</span>品牌內容及服務項目。'
        }
      ]
    },
    process: {
      title: '專案流程 / Project Process',
      information: [
        {
          stepName: '需求彙整',
          category: 'Summary',
          description: '彙整客戶需求、功能'
        },
        {
          stepName: '架構規劃',
          category: 'Sitemap',
          description: '產出初步資訊架構'
        },
        {
          stepName: '品牌視覺',
          category: 'Visual',
          description: '突出品牌調性&風格'
        },
        {
          stepName: '介面設計',
          category: 'UI/UX',
          description: '強調品牌資訊、服務&風格'
        },
        {
          stepName: '交付開發',
          category: 'Develop',
          description: '交付設計文件、測試'
        }
      ]
    },
    sitemap: {
      title: '網站架構 / Sitemap',
      description: '根據業主需求，產出sitemap協助PM核對並預估開發時間。',
      indicators: [
        {
          id: 1,
          labelText: '主頁',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'secondary-01'
          }
        },
        {
          id: 2,
          labelText: '獨立頁面',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'secondary-01'
          }
        },
        {
          id: 3,
          labelText: '分類Tab',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'primary-02'
          }
        }
      ],
      picture: {
        src: MandalaSitemapImg,
        alt: '新睿網站架構',
        placeholder: MandalaSitemapImg,
        width: 542,
        height: 439
      }
    },
    demoVideo: {
      videoSrc: MandalaDemoVideo,
      videoLabel: '新睿生醫網站展示'
    },
    demonstrations: {
      images: [
        {
          id: 1,
          src: MandalaDemo1Img,
          alt: '',
          placeholder: MandalaDemo1Img,
          width: 895,
          height: 1466,
          other: {
            isFullSize: false,
            bgColorStyle: 'bg-primary-02',
            widthStyle: 'w-[79.6%]'
          }
        },
        {
          id: 2,
          src: MandalaDemo2Img,
          alt: '',
          placeholder: MandalaDemo2Img,
          width: 1008,
          height: 1701,
          other: {
            isFullSize: false,
            bgColorStyle: null,
            widthStyle: 'w-[89.8%]'
          }
        },
        {
          id: 3,
          src: MandalaDemo3Img,
          alt: '',
          placeholder: MandalaDemo3Img,
          width: 894,
          height: 559,
          other: {
            isFullSize: false,
            bgColorStyle: 'bg-gray-04',
            widthStyle: 'w-[79.6%]'
          }
        },
        {
          id: 4,
          src: MandalaDemo4Img,
          alt: '',
          placeholder: MandalaDemo4Img,
          width: 894,
          height: 1491,
          other: {
            isFullSize: false,
            bgColorStyle: null,
            widthStyle: 'w-[79.6%]'
          }
        }
      ]
    }
  }
}
