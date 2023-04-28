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
      <StoryTitle name='Azul' nameColor='blue' svgName='azul'/>
      <CardInfoUser
      name='MIGUEL, 23 AÑOS'
      butt={false}
      texto='En el colegio tuve la oportunidad de formar una amistad con un amigo que ahora se reconoce como mujer, viví y evidencie el proceso por el cual paso, desde sufrir de comentarios negativos por sus preferencias o forma de activar, hasta ver el rechazo de los demás. A pesar de todo estuve allí, y ahora ver su proceso y la nueva decisión que ha tomado me llena de orgullo y felicidad.'/>
    </LayoutContent>
  )
}
