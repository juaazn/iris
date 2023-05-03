import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'
import KnowMore from '@/components/KnowMore'
import StorysImages from '@/components/StorysImages'

export default function Azul () {
  return (
    <LayoutContent>
      <Title title='RELATOS DE LA COMUNIDAD'/>
      <BarNavegation />
      <StoryTitle name='Azul' nameColor='blue' svgName='azul'/>
      <KnowMore
      name='CAROLINA, 20 AÑOS'
      left={true}/>
      <StorysImages images='historias-azul-1'/>
    </LayoutContent>
  )
}
