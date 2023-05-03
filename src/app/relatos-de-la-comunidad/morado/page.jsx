import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'
import KnowMore from '@/components/KnowMore'
import StorysImages from '@/components/StorysImages'

export default function Morado () {
  return (
    <LayoutContent>
      <Title title='RELATOS DE LA COMUNIDAD'/>
      <BarNavegation />
      <StoryTitle name='Morado' nameColor='purple' svgName='morado'/>
      <KnowMore
      name='SANDRA, 19 AÑOS'
      left={true}/>
      <StorysImages images='historias-morado-1'/>
    </LayoutContent>
  )
}
