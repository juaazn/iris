import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import CardInfoUser from '@/components/CardInfoUser'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'

export default function RelatosDeLaComunidad () {
  return (
    <LayoutContent>
      <Title title='RELATOS DE LA COMUNIDAD'/>
      <BarNavegation color={true}/>
      <StoryTitle name='Rojo'svgName='rojo' nameColor='#FF0000'/>
      <CardInfoUser name='DAVID, 25 AÑOS' butt={false} />
      <CardInfoUser name='SARA, 20 AÑOS' imageLeft={false} left={false} butt={false}/>
    </LayoutContent>
  )
}
