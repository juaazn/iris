import LayoutContent from '@/components/LayoutContent'
import CardInfoUser from '@/components/CardInfoUser'
import Title from '@/components/Title'
import VideoDraw from '@/components/VideoDraw'

export default function Sara () {
  return (
    <LayoutContent imgBackground='flores-background-sara'>
      <Title seeText={false} title='SARA, 20 AÑOS' imgName='user-sara'/>
      <CardInfoUser
      name='SARA, 20 AÑOS'
      butt={false}
      imgName='img-carta-sara'
      texto='Sara y su familia se van de viaje. En el viaje se encuentran con un chico que es amigo de la familia, los papás de Sara lo incentivan a que intenté de salir con ella, pero ella lo rechaza, Sara, nerviosa,  le confiesa a su familia que es lesbiana y tiene novia pero su mamá se toma mal la noticia y se enoja, mientras que su papá no sabe como reaccionar. Sara decide ir a vivir con su novia después de la reacción de sus papás y Johana se enoja y le dice palabras muy feas a la hija. Te invitamos a escuchar el draw my life para saber que paso con la relación de Sara y sus padres...'/>
      <VideoDraw
      name='Sara'url urlIframe='https://video.eko.com/preview/Vo1O6x?url=%2F%2Fstage.eko.com%2Fprojects%2FMQXBNN%2Ffc42edc1-e227-11ed-8d04-f19f01e44f76%2Farchive%2Fpreview%2F1682303419519%2Fembed.html&APIVersion=4.0.0&autoplay=true'/>
    </LayoutContent>
  )
}
