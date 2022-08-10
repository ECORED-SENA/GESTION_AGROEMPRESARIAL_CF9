<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 2
      h1 Producción agrícola
    .row.ampliar.px-5.fondo7.pt-3
      .col-xxl-12
        p.mb-5 Puede considerarse como el resultado del uso que se hace de los suelos fértiles para lograr, mediante acciones propias, alimentos de consumo como vegetales, hortalizas, cereales, entre otros, mediante diferentes técnicas de producción de acuerdo con el cultivo implementado.
        img(src='@/assets/curso/tema2/imagen1.jpg')
        separador
        #t_2_1.titulo-segundo.color-acento-contenido
          h2 2.1. Requerimientos de la producción
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-12
        .cajon.color-acento-contenido.p-4.mb-4.fondo4
          p Para la producción agrícola se hace necesario el uso de recursos renovables y no renovables, los cuales tienen un impacto por su uso y, de acuerdo con la normatividad ambiental es deber del productor implementar acciones que vayan encaminadas a la minimización de dichos impactos.
        p Observe con atención el video que se presenta a continuación e identifique los elementos más importantes sobre requerimientos de la producción y lleve el registro de ello en su libreta personal de apuntes:
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-12
        img(src='@/assets/curso/tema2/imagen2.jpg')
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
        separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Fisiología y bioquímica
    .row.ampliar.px-5.fondo8.pt-3
      .col-xxl-12
        .row.justify-content-center
          .col-xxl-4.col-xl-4.col-lg-4.col-md-11.col-sm-11.col-12.mt-4
            p.p-5.fondo5 Es la relación que existe entre los procesos naturales propios de las plantas con los cambios proporcionados por agentes químicos, ya sea por el aporte de nutrientes o por afectaciones externas que se puedan presentar en los cultivos.
            p La fisiología en las plantas se divide en cuatro procesos principales, los cuales permiten el desarrollo de las mismas; preste atención a la definición de cada uno de ellos:
          .col-xxl-8.col-xl-8.col-lg-8.col-md-11.col-sm-11.col-12.mt-4
            img(src='@/assets/curso/tema2/imagen3.jpg')
      .row.justify-content-center
        .col-xxl-10.col-xl-10.col-lg-10
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/figura1.png')

            .tarjeta.color-secundario.p-3(x="2%" y="32%" numero="1")
              .h5.mb-2 1. Fotosíntesis
              p Es el proceso primordial de las plantas en el que convierten la materia inorgánica en materia orgánica, gracias a la energía que les aporta la luz, conocida como energía lumínica. El resultado del proceso de fotosíntesis es la fijación del bióxido de carbono (CO2).

            .tarjeta.color-secundario.p-3(x="2%" y="62%" numero="2")
              .h5.mb-2 2. Respiración
              p La respiración de las plantas es el proceso por el cual consumen oxígeno (O2) y expulsan CO2, lo contrario a la fotosíntesis. Para este proceso las plantas dependen principalmente de la energía solar y en menor medida de la energía proveniente de la respiración misma.

            .tarjeta.color-secundario.p-3(x="98%" y="32%" numero="3")
              .h5.mb-2 3. Transpiración
              p La transpiración de las plantas es la evaporación de agua de la superficie de sus hojas (células de sus hojas vivas). El agua perdida se reemplaza por agua absorbida del suelo.

            .tarjeta.color-secundario.p-3(x="98%" y="62%" numero="4")
              .h5.mb-2 4. Translocación
              p Proceso en el que se transportan los nutrientes (agua, sales, minerales, etc.) a los lugares de la planta donde serán utilizados o almacenados (hojas, tallos, etc.).

      #t_2_2.titulo-segundo.color-acento-contenido
        h2 Fenología de los cultivos
      .row.justify-content-center
        .col-xxl-8.col-xl-8.col-lg-8.col-md-12
          img(src='@/assets/curso/tema2/imagen4.jpg')
        .col-xxl-4.col-xl-4.col-lg-4.col-md-12
          p La fenología es una palabra que viene del término “<i>fenos</i>” que significa mostrar. De esta manera se entiende cómo la ciencia investiga los cambios que van mostrando los organismos a lo largo del tiempo. En las plantas son los momentos en los que se generan nuevas hojas, se producen flores, frutos o pierden su follaje (Flórez, 2018).
          .cajon.color-acento-contenido.px-4.pt-4.pb-2.fondo6
            p La fenología es utilizada como un instrumento para el estudio de los factores climáticos en los cultivos, ya que por medio de las observaciones y prácticas se determinan los tiempos de mayor producción, de acuerdo con la zona donde se establece el sistema productivo.  
      .titulo-sexto.color-acento-contenido.my-5
        h5 Tabla 4
        span Aplicación de observaciones fisiológicas

    <div class="table-responsive-sm">
      table
        <tr>
          <td rowspan="6" class="fondo9 anchocol1">
              p.text-bold.text-center Aplicación de observaciones fisiológicas
          </td>
          <td rowspan="4" class="fondo10 bordederecho anchocol2">
            p.text-center.text-bold Variables independientes
          </td>
          <td class="fondo10" >
            p Comparación de eventos diferentes para la misma especie en la misma localidad en diferentes épocas.
          </td>
        </tr>

          <td class="fondo10 bordetop">
            p Comparación del mismo evento particular de la misma especie en localidades diferentes.
          </td>

        <tr>
          <td class="fondo10 bordetop">
            p Comparación de eventos de especies diferentes ocurriendo al mismo tiempo y en la misma localidad.
          </td>
        </tr>
        <tr>
          <td class="fondo10 bordetop">
            p Comparación de eventos de especies diferentes que ocurren en tiempos diferentes en la misma localidad.
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="fondo11 bordederecho anchocol2">
            p.text-center.text-bold Variables dependientes
          </td>
          <td class="fondo11 bordetop">
            p El uso de eventos biológicos como indicadores de la presencia o ausencia de ciertos factores ambientales.
          </td>
        </tr>
        <tr>
          <td class="fondo11 bordetop">
            p Varias combinaciones de datos ambientales y fenológicos para llegar a ciertas conclusiones o hacer predicciones respecto a las respuestas vegetales.
          </td>
        </tr>
    </div>
    #t_2_2.titulo-segundo.color-acento-contenido.my-5
      h2 Identificación del grado de madurez
    .row.justify-content-center.align-items-center
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12
        p La elección del momento justo de madurez para la cosecha de frutas y hortalizas es una consideración importante de precosecha que tendrá gran influencia en la vida de la poscosecha del producto y en su comercialización. En esta etapa es clave distinguir claramente entre madurez fisiológica y madurez comercial.
        p Las generalidades que definen y diferencian la 
          span.colortextocontenido.text-bold madurez fisiológica 
          span de la 
          span.colortextocontenido.text-bold madurez comercial 
          span son:
        #carouselExampleIndicators.carousel.slide.mb-4(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
          .carousel-inner
            .carousel-item.active
              .row.justify-content-center.align-items-center
                .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-9.col-9.py-5
                  p.my-5 La madurez fisiológica se refiere a la etapa del desarrollo de los frutos, hortalizas o vegetales en que se ha producido el máximo crecimiento y maduración.
            .carousel-item
              .row.justify-content-center.align-items-center
                .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-9.col-9.py-5
                  p.my-5 Generalmente la madurez fisiológica está asociada con la completa madurez del fruto. 
            .carousel-item
              .row.justify-content-center.align-items-center
                .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-9.col-9.py-5
                  p.my-5.text-center La etapa de madurez fisiológica es seguida por el envejecimiento.
            .carousel-item
              .row.justify-content-center.align-items-center
                .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-9.col-9.py-5
                  p.my-5 No siempre es posible distinguir claramente las tres fases del desarrollo del órgano de una planta (crecimiento, madurez y envejecimiento) porque las transiciones entre las etapas son, a menudo, muy lentas y poco diferenciadas.
            .carousel-item
              .row.justify-content-center.align-items-center
                .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-9.col-9.py-5
                  p.my-5 La madurez comercial, en cambio, hace referencia a las condiciones de un órgano de la planta, requerido por un mercado.
            .carousel-item
              .row.justify-content-center.align-items-center
                .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-9.col-9.py-5
                  p.my-5 Comúnmente la madurez comercial guarda escasa relación con la madurez fisiológica y puede ocurrir en cualquier fase del desarrollo o envejecimiento.
            .carousel-item
              .row.justify-content-center.align-items-center
                .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-9.col-9.py-5
                  p.my-5 Los términos inmadurez, madurez óptima y sobremadurez se relacionan con las necesidades del mercado; sin embargo, debe haber comprensión de cada uno de ellos en términos fisiológicos, particularmente en lo que concierne a la vida de almacenamiento y calidad cuando maduran.  
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
      .col-xxl-4.col-xl-4.col-lg-4.col-md-12
        img(src='@/assets/curso/tema2/imagen5.jpg')
    .cajon.color-acento-contenido.p-4.mb-4.fondobloque1.my-5
      p Para determinar la madurez óptima de la recolección de los frutos, hortalizas o vegetales se usa una combinación de criterios subjetivos y objetivos. En el método subjetivo se usan los sentidos para evaluar la madurez de los productos, mientras que en el método objetivo está relacionado con el uso de instrumentos y de otras características más técnicas.
    p.mb-5 Estos son los criterios subjetivos de medición del grado de madurez:
    SlyderF(data-aos="fade-up")(columnas="col-lg-6 col-xl-4 col-md-12")
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema2/imagen6.png')
        .tarjeta.otra.fondoslider
          .text-dark.px-5.py-4
            h4 Vista
            p Color, tamaño y forma.

      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema2/imagen7.png')
        .tarjeta.otra.fondoslider
          .text-dark.px-5.py-4
            h4 Tacto
            p Áspero, suave, blando y duro.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema2/imagen8.png')
        .tarjeta.otra.fondoslider
          .text-dark.px-5.py-4
            h4 Oído 
            p Sonido del producto al tocarlo.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema2/imagen9.png')
        .tarjeta.otra.fondoslider
          .text-dark.px-5.py-4
            h4 Olfato
            p Olor y Aroma.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema2/imagen10.png')
        .tarjeta.otra.fondoslider
          .text-dark.px-5.py-4
            h4 Gusto
            p Ácido, dulce, salado y amargo.

    p.my-5 Los criterios o instrumentos 
      span.text-bold objetivos 
      span mediante los cuales se evalúa el grado de madurez suelen ser:
    .row.justify-content-center.fondo12.ampliar
      .col-xxl-12.px-5
        img(src='@/assets/curso/tema2/imagen11.svg')
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
