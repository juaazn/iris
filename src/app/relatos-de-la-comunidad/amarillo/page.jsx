import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import CardInfoUser from '@/components/CardInfoUser'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'

export default function Verde () {
  return (
    <LayoutContent>
      <Title title='RELATOS DE LA COMUNIDAD'/>
      <BarNavegation />
      <StoryTitle name='Amarillo' nameColor='yellow' svgName='amarillo'/>
      <CardInfoUser
      name='MILENA, 21 AÑOS'
      butt={false}
      texto='A lo largo de mi vida he tenido un buen acercamiento a la comunidad, y aunque no pertenezco a ella, siempre me hace feliz ver el apoyo que se tiene entre ellos.'/>
    </LayoutContent>
  )
}
