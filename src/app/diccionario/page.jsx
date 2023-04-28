import Button from '@/components/Button'
import KnowMore from '@/components/KnowMore'
import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'

export default function Diccionario () {
  return (
    <LayoutContent imgBackground='crayolas'>
      <Title title='DICCIONARIO' imgName='libro-iris'/>
      <KnowMore name='¿QUIRES SABER MÁS?'/>
      <Button name='Haz Click aquí'/>
    </LayoutContent>
  )
}
