import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'
import StorysImages from '@/components/StorysImages'
import KnowMore from '@/components/KnowMore'

export default function RelatosDeLaComunidad () {
  return (
    <LayoutContent>
      <Title title='RELATOS DE LA COMUNIDAD'/>
      <BarNavegation color={true}/>
      <StoryTitle name='Rojo'svgName='rojo' nameColor='#FF0000'/>
      <KnowMore
      name='EMILY, 21 AÑOS'
      left={true}/>
      <StorysImages images='histoias-rojo-1'/>
    </LayoutContent>
  )
}
