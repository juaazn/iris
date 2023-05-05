import LayoutContent from '@/components/LayoutContent'
import DataViz from '@/components/DataViz'
import IframeDataViz from '@/components/IframeDataViz'
import Title from '@/components/Title'

export default function Page () {
  return (
    <LayoutContent>
      <Title title='DATOS DE LA COMUNIDAD' seeText={false}/>
      <DataViz>
        <IframeDataViz urlDataViz='https://view.genial.ly/643f3239f76756001145f66c'/>
        <IframeDataViz urlDataViz='https://view.genial.ly/643f2dc134278e0011ec0b3f' />
        <IframeDataViz urlDataViz='https://view.genial.ly/643f551134278e0011ec54ef' />
        <IframeDataViz urlDataViz='https://view.genial.ly/643eae53dcac7f0018a1bb5e' />
        <IframeDataViz urlDataViz='https://flo.uri.sh/visualisation/13545342/embed'/>
      </DataViz>
    </LayoutContent>
  )
}
