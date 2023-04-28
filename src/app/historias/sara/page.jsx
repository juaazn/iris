import LayoutContent from '@/components/LayoutContent'
import CardInfoUser from '@/components/CardInfoUser'
import Title from '@/components/Title'
import Video from '@/components/Videos'

export default function Sara () {
  return (
    <LayoutContent>
      <Title seeText={false} title='SARA, 20 AÑOS' imgName='user-sara'/>
      <CardInfoUser name='SARA, 20 AÑOS' butt={false} imgName='img-carta-sara'/>
      <Video/>
    </LayoutContent>
  )
}
