import PropTypes from 'prop-types'

import ContentContainer from '@/layouts/ContentContainer'
import SectionTitle from '@components/SectionTitle'
import BlurLazyImage from '@components/BlurLazyImage'

const MAP_DESC = [
  {
    text: '獨立頁面',
    className: 'rounded-full w-4 h-4 bg-primary-02'
  },
  {
    text: '分類Tab',
    className: 'rounded-full w-4 h-4 bg-gray-01'
  },
  {
    text: '頁面資訊',
    className: 'rounded-full w-4 h-4 border border-primary-02'
  },
  {
    text: '內容/功能',
    className: 'rounded-full w-[6px] h-[6px] bg-primary-02'
  }
]

const KaiProcess = ({ title, picture }) => (
  <ContentContainer>
    <KaiProcessContent
      title={title}
      picture={picture}
    />
  </ContentContainer>
)

const KaiProcessContent = ({ title, picture }) => (
  <section className='section-content'>
    <div className='two-cols-container'>
      <SectionTitle
        className='mb-16'
        title={title}
      />
      <MapDesc />
    </div>

    <div className='flex justify-center'>
      <BlurLazyImage
        className='w-[75%] '
        src={picture.src}
        alt={picture.alt}
        placeholder={picture.placeholder}
        width={picture.width}
        height={picture.height}
      />
    </div>
  </section>
)

const MapDesc = () => (
  <ul className='flex self-start gap-6'>
    {MAP_DESC.map(item => {
      return (
        <li
          key={item.text}
          className='flex items-center gap-2'
        >
          <div className={item.className}></div>
          <p className='text-p1'>{item.text}</p>
        </li>
      )
    })}
  </ul>
)

const KaiProcessPropTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.object
}
const KaiProcessContentPropTypes = KaiProcessPropTypes

KaiProcessContent.propTypes = KaiProcessContentPropTypes
KaiProcess.propTypes = KaiProcessPropTypes

export default KaiProcess
