import LayoutContent from '@/components/LayoutContent'
import CardInfoUser from '@/components/CardInfoUser'
import Title from '@/components/Title'
import Video from '@/components/Videos'

export default function David () {
  return (
    <LayoutContent>
      <Title seeText={false} title='DAVID, 25 AÑOS' imgName='image-user'/>
      <CardInfoUser name='DAVID, 25 AÑOS' butt={false} imgName='img-carta-david'/>
      <Video videoName='draw-my-life-hugo.mp4'/>
    </LayoutContent>
  )
}
