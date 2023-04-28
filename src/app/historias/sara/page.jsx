import LayoutContent from '@/components/LayoutContent'
import CardInfoUser from '@/components/CardInfoUser'
import Title from '@/components/Title'

export default function Sara () {
  return (
    <LayoutContent imgBackground='flores-background-sara'>
      <Title seeText={false} title='SARA, 20 AÑOS' imgName='user-sara'/>
      <CardInfoUser name='SARA, 20 AÑOS' butt={false} imgName='img-carta-sara'/>
    </LayoutContent>
  )
}
