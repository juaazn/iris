import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'
import KnowMore from '@/components/KnowMore'
import StorysImages from '@/components/StorysImages'

export default function Verde () {
  return (<LayoutContent>
    <Title title='RELATOS DE LA COMUNIDAD'/>
    <BarNavegation />
    <StoryTitle name='Verde' nameColor='green' svgName='verde'/>
    <KnowMore
    name='DANIEL, 23 AÑOS'
    left={true}/>
    <StorysImages images='historias-verde-1'/>
  </LayoutContent>)
}
