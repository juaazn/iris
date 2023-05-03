import LayoutContent from '@/components/LayoutContent'
import Title from '@/components/Title'

export default function Cookies () {
  return (
    <LayoutContent>
      <Title
      title='TRATAMIENTO DE DATOS'
      imgName='cookies-lupa'
      titletex=''/>
      <p style={{ margin: '2rem 0', fontSize: 'x-large' }}>1. Las cookies son útiles para mejorar la experiencia del usuario en el sitio web, ya que permiten personalizar el contenido y las funcionalidades según las preferencias del usuario. Por ejemplo, una cookie puede recordar el idioma que el usuario ha seleccionado en el sitio web, para que no tenga que volver a seleccionarlo en cada visita. Otra cookie puede guardar las selecciones de productos en un carrito de compras, para que el usuario pueda continuar comprando desde donde lo dejó en su última visita. <br/><br/>2.En este sitio web, se utilizan cookies para recopilar información sobre el comportamiento de los usuarios, como las páginas que visitan y las acciones que realizan. Esta información se podría utilizar para mejorar la experiencia del usuario en el sitio web, por ejemplo, mostrando contenido relevante basado en sus intereses o recomendando artículos relacionados con su actividad en el sitio. <br/><br/>En este sitio web se utiliza cookies de terceros, como las de Google Analytics, para obtener información sobre el tráfico y la interacción en el sitio web. Estas cookies pueden recopilar datos como la ubicación geográfica del usuario, el tipo de dispositivo que utiliza y el navegador que está utilizando.</p>
    </LayoutContent>
  )
}
