import LayoutContent from '@/components/LayoutContent'

import CardInfoUser from '@/components/CardInfoUser'
import Title from '@/components/Title'
import DataViz from '@/components/DataViz'
import IframeDataViz from '@/components/IframeDataViz'
import KnowMore from '@/components/KnowMore'

export default function Historias () {
  return (
    <LayoutContent>
      <Title title='HISTORIAS'
      titletex='¡Bienvenidos! Aquí, te sumergirás en los apasionantes relatos de dos personas valientes de la comunidad LGBTI, contados a través del poderoso medio del "Draw My Life". Escucha de primera mano las experiencias y los desafíos enfrentados por estas personas desde el momento en que se declararon y abrazaron su verdadera identidad. Estos videos no solo te permitirán conocer historias personales, sino que también te invitarán a reflexionar sobre la importancia de la aceptación y el apoyo dentro de la comunidad LGBTI.'/>
      <CardInfoUser
      name='DAVID, 25 AÑOS'
      nameEnlace='historias/david'
      texto='Adéntrate en la vida de David, un joven de 25 años que nos guía a través de sus experiencias, revelando el amor y la fortaleza que encuentra en aquellos que lo rodean. Esta historia nos invita a reflexionar sobre la importancia de la autenticidad y la valentía al enfrentar la adversidad familiar. Únete a nosotros mientras exploramos el poder de la amistad y el amor incondicional en medio de la lucha por la aceptación y la búsqueda del verdadero yo.'/>
      <CardInfoUser
      name='SARA, 20 AÑOS'
      imageLeft={false} left={false}
      nameEnlace='historias/sara'
      imgName='user-sara'
      texto='Conoce a Sara, una talentosa estudiante de cine y televisión de 20 años, cuya valentía la lleva a revelar su verdadera orientación sexual a sus padres. Esta historia, contada a través de los ojos de Hugo, el padre de Sara, te invita a un viaje de reflexión y descubrimiento, donde los lazos familiares se fortalecen en medio de los desafíos que la vida les presenta. ¡Acompáñanos en esta travesía emocional y déjate inspirar por la poderosa historia de Sara y su familia!'/>
      <KnowMore name='INTERACTUA CON NUESTROS DATOS'/>
      <DataViz>
        <IframeDataViz urlDataViz='https://view.genial.ly/643f3239f76756001145f66c'/>
        <IframeDataViz urlDataViz='https://view.genial.ly/643f2dc134278e0011ec0b3f' />
        <IframeDataViz urlDataViz='https://view.genial.ly/643f551134278e0011ec54ef' />
        <IframeDataViz urlDataViz='https://view.genial.ly/643eae53dcac7f0018a1bb5e' />
      </DataViz>
    </LayoutContent>
  )
}
