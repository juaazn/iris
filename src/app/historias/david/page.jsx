import LayoutContent from '@/components/LayoutContent'
import CardInfoUser from '@/components/CardInfoUser'
import Title from '@/components/Title'

export default function David () {
  return (
    <LayoutContent imgBackground='flores-background-david'>
      <Title seeText={false} title='DAVID, 25 AÑOS' imgName='image-user'/>
      <CardInfoUser name='DAVID, 25 AÑOS' butt={false} imgName='img-carta-david'/>
    </LayoutContent>
  )
}
