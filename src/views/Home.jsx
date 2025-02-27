import ContentContainer from '@/layouts/ContentContainer'
import CardList from '@/components/card/CardList'

export default function Home() {
  return <ContentContainer content={() => <CardList />} />
}
