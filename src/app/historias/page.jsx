import LayoutContent from '@/components/LayoutContent'

import CardInfoUser from '@/components/CardInfoUser'
import Title from '@/components/Title'

export default function Historias () {
  return (
    <LayoutContent>
      <Title title='HISTORIAS' />
      <CardInfoUser name='DAVID, 25 AÑOS' nameEnlace='historias/david'/>
      <CardInfoUser name='SARA, 20 AÑOS' imageLeft={false} left={false} nameEnlace='historias/sara' imgName='user-sara'/>
    </LayoutContent>
  )
}
