import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'
import KnowMore from '@/components/KnowMore'
import StorysImages from '@/components/StorysImages'

export default function Naranja () {
  return (
    <LayoutContent>
      <Title title='RELATOS DE LA COMUNIDAD'/>
      <BarNavegation color={true}/>
      <StoryTitle name='Naranja' nameColor='orange' svgName='naranja'/>
      <KnowMore
      name='VALERY, 19 AÑOS'
      left={true}/>
      <StorysImages images='historias-naranja-1'/>
    </LayoutContent>
  )
}
