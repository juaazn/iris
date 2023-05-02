import Button from '@/components/Button'
import KnowMore from '@/components/KnowMore'
import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'

export default function Diccionario () {
  return (
    <LayoutContent imgBackground='crayolas'>
      <Title
      title='DICCIONARIO'
      imgName='libro-iris'
      titletex='Te damos la más cordial bienvenida a nuestro Wiki diccionario, un lugar donde podrás sumergirte en el fascinante mundo de la comunidad LGBTIQA+. Aquí encontrarás una amplia gama de términos que te permitirán comprender mejor este universo diverso y en constante evolución. Explora el origen y significado de cada palabra, y siéntete libre de expresar tus opiniones sobre cómo se utilizan en el día a día. Además, este es un espacio abierto para compartir lo que estas palabras representan para ti.'/>
      <KnowMore name='¿QUIERES SABER MÁS?'/>
      <Button name='Haz Click aquí'
      page='https://sites.google.com/view/glosario-de-iris/iris-home?authuser=0'/>
    </LayoutContent>
  )
}
