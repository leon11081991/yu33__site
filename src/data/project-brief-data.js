import WacaImg from '@assets/images/waca/waca.webp'
import WacaImgSmall from '@assets/images/waca/waca-small.avif'
import PingoImg from '@assets/images/pingo/pingo.webp'
import PingoImgSmall from '@assets/images/pingo/pingo-small.avif'
import KolImg from '@assets/images/kol/kol.webp'
import KolImgSmall from '@assets/images/kol/kol-small.avif'
import KaiCoverImg from '@assets/images/kai/kai.webp'
import KaiCoverImgSmall from '@assets/images/kai/kai-small.avif'
import MandalaImg from '@assets/images/mandala/mandala.webp'
import MandalaImgSmall from '@assets/images/mandala/mandala-small.avif'

export const PROJECT_BRIEF_LIST = [
  {
    id: 1,
    name: 'waca',
    title: 'WACA - 設計規範',
    category: 'UI Design B2B  Design System',
    cover: {
      src: WacaImg,
      alt: 'WACA - 設計規範',
      placeholderImg: WacaImgSmall
    }
  },
  {
    id: 2,
    name: 'kol',
    title: 'KOL Master 網紅媒合平台',
    category: 'UI/UX Design B2B Product Design ',
    cover: {
      src: KolImg,
      alt: 'KOL Master 網紅媒合平台',
      placeholderImg: KolImgSmall
    }
  },
  {
    id: 3,
    name: 'pingo',
    title: 'Pingo 美食搜集神器',
    category: 'APP Redesign',
    cover: {
      src: PingoImg,
      alt: 'Pingo 美食搜集神器',
      placeholderImg: PingoImgSmall
    }
  },
  {
    id: 4,
    name: 'kai',
    title: 'KAI’S Gallery 凱奧畫廊',
    category: 'Online Store Web Design',
    cover: {
      src: KaiCoverImg,
      alt: 'KAI’S Gallery 凱奧畫廊',
      placeholderImg: KaiCoverImgSmall
    }
  },
  {
    id: 5,
    name: 'mandala',
    title: 'Mandala 新睿生醫',
    category: 'Branding Web Design ',
    cover: {
      src: MandalaImg,
      alt: 'Mandala 新睿生醫',
      placeholderImg: MandalaImgSmall
    }
  }
]
