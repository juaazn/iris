import LayoutContent from '@/components/LayoutContent'
import CardInfoUser from '@/components/CardInfoUser'
import Title from '@/components/Title'
import VideoDraw from '@/components/VideoDraw'

export default function David () {
  return (
    <LayoutContent imgBackground='flores-background-david'>
      <Title seeText={false} title='DAVID, 25 AÑOS' imgName='image-user'/>
      <CardInfoUser
      name='DAVID, 25 AÑOS'
      butt={false}
      imgName='img-carta-david'
      texto='David se encuentra en un bar, aparentemente interesado en conocer a otras personas con su misma orientación sexual. Se le ve un poco nervioso y tímido al principio, pero rápidamente se integra con un grupo de personas que están allí y comienza a hablar con ellos. David esta con sus amigos en su casa maquillándose, mientras ríen y se divierten juntos. Además Se puede ver que David se siente cómodo con sus acciones. La madre de David entra a su habitación y encuentra su maquillaje sobre la mesa. La madre lo mira con desaprobación y angustia, mientras David entra a la habitación y la ve sosteniendo sus cosas. Ella lo termina echando de la casa, caminando solo por la calle, se ve triste.
      El saca su celular y llama a su pareja.
      Donde tiene una conversación corta con su esta y le pide posada.
      David cuelga la llamada y se queda mirando su la pantalla de su celular en la cual aparece una foto de el y de su madre. David llega a la casa de su pareja, se detiene frente a la puerta y toca el timbre. Al abrir la puerta, David se encuentra con todos sus amigos reunidos en la sala, quienes lo reciben con abrazos y palabras de apoyo, los amigos de David le brindan su apoyo. se ve a David sentado a la mesa mientras sus amigos le sirven comida caliente y lo animan a comer para que se sienta mejor.'/>
      <VideoDraw name='David' urlIframe='https://video.eko.com/preview/zggEGB?url=%2F%2Fstage.eko.com%2Fprojects%2FMQXBNN%2F4e349c10-e321-11ed-aab4-2d37f15e6c69%2Farchive%2Fpreview%2F1683081122076%2Fembed.html&APIVersion=4.0.0&autoplay=true'/>
    </LayoutContent>
  )
}
