import Button from '@/components/Button'
import KnowMore from '@/components/KnowMore'
import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'

export default function Podcast () {
  return (
    <LayoutContent imgBackground='background-podcast'>
      <Title
      title='PODCAST "El CLUB DE LECTURA"'
      imgName='podcast-img'
      titletex='"¡Bienvenidos al podcast de Iris! Aquí, nos adentramos en las emocionantes historias de la comunidad LGBTIQ+ mientras exploramos las experiencias, los desafíos y los triunfos que se encuentran entre las páginas del libro."'/>
      <KnowMore name='¿QUIRES ESCUCHARNOS?'/>
      <Button name='Haz Click aquí'
      page='https://soundcloud.com/proyectoiris'/>
    </LayoutContent>
  )
}
