import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'
import CardInfoUser from '@/components/CardInfoUser'
import BarNavegation from '@/components/BarNavegation'
import StoryTitle from '@/components/StoryTitle'

export default function Verde () {
  return (
    <LayoutContent>
      <Title title='RELATOS DE LA COMUNIDAD'/>
      <BarNavegation color={true}/>
      <StoryTitle name='Naranja' nameColor='orange' svgName='naranja'/>
      <CardInfoUser
      name='YESSICA, 19 AÑOS'
      imgName='user-sara'
      butt={false}
      texto='Cuando estaba en tercero de primaria mi primer acercamiento fue con mi mejor amiguita, a la edad donde exploramos mucho, fue mi primer pico y mi primer acercamiento más allá. Lo importante fue el remordimiento que eso me dio por años, no cabía en mi cabeza que no era una niña normal que tuvo su noviecito y su primer pico hetero, fue mi mayor secreto y realmente lo acepté y lo vi como algo normal muy tarde y ahora me siento boba por sentir eso por algo tan natural.'/>
    </LayoutContent>
  )
}
