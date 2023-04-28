import Button from '@/components/Button'
import KnowMore from '@/components/KnowMore'
import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'

export default function Podcast () {
  return (
    <LayoutContent imgBackground='background-podcast'>
      <Title title='PODCAST "El CLUB DE LECTURA"' imgName='podcast-img'/>
      <KnowMore name='¿QUIRES ESCUCHARNOS?'/>
      <Button name='Haz Click aquí'/>
    </LayoutContent>
  )
}
