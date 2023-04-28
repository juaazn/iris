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
      <CardInfoUser
      name='Luisa, 20 AÑOS'
      imgName='user-sara'
      butt={false}
      texto='Hace siete años conocí que era una amar a una persona por su alma y no por su identidad de género, a pesar de los problemas y estigmas de las demás personas. Años después pude estar con esa persona hasta el día de hoy llenándome de orgullo poder amar sin ser juzgada.'/>
    </LayoutContent>
  )
}
