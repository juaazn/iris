import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'
import KnowMore from '@/components/KnowMore'
import StorysImages from '@/components/StorysImages'

export default function Amarillo () {
  return (
    <LayoutContent>
      <Title title='RELATOS DE LA COMUNIDAD'/>
      <BarNavegation />
      <StoryTitle name='Amarillo' nameColor='yellow' svgName='amarillo'/>
      <KnowMore
      name='EMMA, 20 AÑOS'
      left={true}/>
      <StorysImages images='historias-amarillo-1'/>
    </LayoutContent>
  )
}
