import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import CardInfoUser from '@/components/CardInfoUser'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'

export default function Verde () {
  return (<LayoutContent>
    <Title title='RELATOS DE LA COMUNIDAD'/>
    <BarNavegation />
    <StoryTitle name='Verde' nameColor='green' svgName='verde'/>
    <CardInfoUser
    name='NICOL, 20 AÑOS'
    butt={false}
    texto='Mi hermano hace parte de la comunidad, a él le costaba mucho el hecho de guardar ese secreto, pero con su forma de ser, era complicada ocultar. Mi mamá y yo lo sabíamos desde mucho antes que él nos contara, pero el hecho de que él tuviera la fuerza para salir y ser feliz, nos alegró mucho. Porque después de esto él sonríe más y yo soy más feliz al verlo y saber que ya puede ser feliz.'/>
  </LayoutContent>)
}
