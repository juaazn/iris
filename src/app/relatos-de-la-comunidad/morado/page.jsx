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
      <StoryTitle name='Morado' nameColor='purple' svgName='morado'/>
      <CardInfoUser
      name='VALERY, 20 AÑOS'
      butt={false}
      texto='Desde hace un año, mantengo una relación a distancia con una chica de España. Ella marcó mi vida en el sentido de que me ayudo a aceptarme a mí misma cuando la bisexualidad era un tema difícil para mí, y me hizo sentir amada de una manera que nadie lo había hecho. Una de mis metas en la vida, algo que me motiva a levantarme por las mañanas y seguir adelante, es cerrar la distancia física que existe entre nosotras.'/>
    </LayoutContent>
  )
}
