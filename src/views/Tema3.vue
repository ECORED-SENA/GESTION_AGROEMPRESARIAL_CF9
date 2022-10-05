<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 3
      h1 Manejo de la poscosecha
    .bloque-texto-g.fondo13.p-3.p-sm-4.p-md-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es el proceso por el cual se garantiza la gestión de los productos agrícolas, garantizando su conservación y calidad, antes de realizar la comercialización y transporte de los mismos. Un adecuado manejo de la poscosecha en productos que sean perecederos garantiza un valor agregado a la producción, ya que aumenta los márgenes de ganancia evitando pérdidas considerables de productos terminados.

    .row.my-5.justify-content-center(data-aos="fade-up-left")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.p-2(src='@/assets/curso/tema3/figura1.svg')
          .tarjeta.fondo14
            .p-4
              h4 ¡Importante!
              p Una manipulación no adecuada, el desconocimiento de la fisiología de cada producto, el mal uso de empaques, la escasez de sistemas de almacenamiento y transporte son, entre otros, los causantes de grandes pérdidas en los productos finales.

      .col-xxl-5.col-xl-5.col-lg-5.col-md-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.p-2(src='@/assets/curso/tema3/figura2.svg')
          .tarjeta.fondo14
            .p-4
              h4 ¡Atención!
              p Se requiere una planificación e implementación de prácticas de clasificación, almacenamiento y empaquetamiento tecnificados o, al menos, sistemáticos, para garantizar la preservación de los productos, aportando a reducir los probables daños en ellos y a cuidar su calidad.
    .row.justify-content-center(data-aos="fade-down-right")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12
        .tarjeta.fondo5.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.ms-4(src="@/assets/curso/tema3/figura3.svg")
            .col
              .row.justify-content-between.align-items-center.py-3
                .col.mb-3.mb-sm-0.ps-5
                  p.mb-0 Para adentrarse en el estudio de este punto “
                    span.text-bold Manejo de poscosecha
                    span ” observe con atención el video que aquí se sugiere:
                .col-sm-auto
                  //--a.boton.fondo14(:href="obtenerLink('/downloads/Video_Manejo_poscosecha.mp4')" target="_blank")
                    span Ver video
                    i.fas.fa-play-circle
                  a.boton.fondo14(href="https://www.youtube.com/watch?v=EVrRQkGnjqs" target="_blank")
                    span Ver video
                    i.fas.fa-play-circle
    .row.ampliar.fondo15
      .col-xxl-12.px-5
        separador
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
          h2 3.1. Acondicionamiento, selección y clasificación del producto
        p.mt-5(data-aos="fade-down-left") Para el proceso de acondicionar, seleccionar y clasificar los diferentes productos se debe, antes que nada, determinar en qué lugar adecuado y habilitado se realizará el manejo de los mismos. Este sitio designado deberá garantizar la protección de factores externos como el clima y/o los animales.
        p.mb-5(data-aos="fade-down-right") En la selección y clasificación del producto se deberá tener en cuenta:

        TabsA.mb-5(data-aos="fade-down-left")

          .tarjeta.fondo16.p-4(titulo="Revisión visual")
            .row.justify-content-center.align-items-top
              .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-12
                h4.mt-3 Revisión visual
                p El primer paso posterior al ingreso de los productos al lugar es la realización de una inspección ocular.
              .col-xxl-3.col-xl-3.col-lg-3.col-md-3.col-sm-5.col-5
                img(src="@/assets/curso/tema3/figura4.svg")

          .tarjeta.fondo16.p-4(titulo="Separación de unidades deterioradas")
            .row.justify-content-center.align-items-top
              .col-xxl-8.col-xl-8.col-lg-8.col-md-8
                h4.mt-3 Separación de unidades deterioradas
                p Esta inspección de observación meramente visual se completará retirando unidades no conformes o en mal estado que puedan afectar a las demás.
              .col-xxl-3.col-xl-3.col-lg-3.col-md-3.col-sm-5.col-5
                img(src="@/assets/curso/tema3/figura5.svg")

          .tarjeta.fondo16.p-4(titulo="Clasificación según características")
            .row.justify-content-center.align-items-top
              .col-xxl-8.col-xl-8.col-lg-8.col-md-8
                h4.mt-3 Clasificación según características
                p Posterior a estos dos primeros pasos se realiza una clasificación dependiendo de la calidad del producto como, por ejemplo, el tamaño, el color u otros aspectos físicos que permitan la identificación de las condiciones de los productos.
              .col-xxl-3.col-xl-3.col-lg-3.col-md-3.col-sm-5.col-5
                img(src="@/assets/curso/tema3/figura6.svg")
        .titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
          h2 Criterios técnicos
        .row.justify-content-center(data-aos="fade-down-left")
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12
            img.mt-4(src="@/assets/curso/tema3/imagen2.jpg")
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12
            p.mt-4 Es importante tener en cuenta el tipo de almacenamiento y de acuerdo con el producto se pueden manejar estaciones temporales de almacenamiento o clasificación, esta opción resulta óptima si el transporte se realiza rápidamente.
            .cajon.color-acento-contenido.px-4.py-4.fondo6.mt-4
              p Los criterios técnicos a tener en cuenta en la clasificación de los productos dependerán del tipo de cultivo que se implementa, ya que existen varios factores para su clasificación.  
        p.my-5(data-aos="fade-down-right") En el proceso de clasificación suele haber dos criterios muy comunes y recurrentes en su uso, preste atención a su definición y lleve registro de ello en su libreta personal de apuntes:
        SlyderB(data-aos="fade-down").mb-5(:datos="datosSlyder")
        .titulo-segundo.color-acento-contenido.my-5(data-aos="fade-up-left")
          h2 Criterios de calidad
        p.mb-5(data-aos="fade-down-right") El establecimiento de los criterios de calidad y las acciones a partir de ellos deben considerar la visión, experiencia y satisfacción del consumidor final de los productos de la empresa. Ubicarse en la postura del destinatario favorece la tipificación del producto deseado y, entonces, encaminar los procesos hacia este fin.
        .row.justify-content-center(data-aos="fade-down-left")
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12
            p.mb-3(data-aos="fade-down-left") Los siguientes son los 
              span.colortextocontenido.text-bold criterios de calidad en la industria alimenticia 
              span que más se tienen en cuenta:
            .row.mb-5.ms-4(data-aos="fade-down-right")
              .col-sm.mb-5.mb-sm-0
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Propiedades organolépticas (apariencia, sabor, textura).
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Seguridad: ausencia de tóxicos. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Valor nutricional: contenido y disponibilidad de nutrientes. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Propiedades funcionales.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Estabilidad. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 6
                    |Costo.
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12(data-aos="fade-down-left")
            img(src="@/assets/curso/tema3/imagen5.jpg")

        .titulo-segundo.color-acento-contenido.my-5(data-aos="fade-down-right")
          h2 Limpieza y desinfección
        p(data-aos="fade-down-left") La función primordial de la limpieza y la desinfección es la 
          span.colortextocontenido.text-bold eliminación de todo tipo de materiales ajenos o extraños presentes en los productos
          span , ya que su presencia disminuye la calidad del insumo generando pérdidas en los valores comerciales.
        p.mb-5(data-aos="fade-down-right") Para que la limpieza sea eficaz se deben tener en cuenta aspectos como:
        .row.justify-content-center(data-aos="fade-down-left")
          .col-xxl-12.ampliar.fondo17
            SlyderF(data-aos="fade-up")(columnas="col-md-6 col-xl-4 col-md-12")
              .tarjeta-avatar.sizecrd1.slyderF-media
                img.imgsize1(src='@/assets/curso/tema3/imagen6.png')
                .tarjeta.otra1.fondoslider2
                  .text-dark.px-5.py-4
                    h4.text-center Asepsia
                    p.text-center Separación de los contaminantes, extracción del material extraño, desinfección de la superficie del producto, almacenamiento en lugares secos y limpios para evitar la recontaminación de los productos.

              .tarjeta-avatar.sizecrd1.slyderF-media
                img.imgsize1(src='@/assets/curso/tema3/imagen7.png')
                .tarjeta.otra1.fondoslider2
                  .text-dark.px-5.py-4
                    h4.text-center Métodos húmedos y secos
                    p.text-center La limpieza se puede realizar de manera húmeda mediante el lavado con agua limpia o por los métodos secos como el tamizado o el cepillado.
              .tarjeta-avatar.sizecrd1.slyderF-media
                img.imgsize1(src='@/assets/curso/tema3/imagen8.png')
                .tarjeta.otra1.fondoslider2
                  .text-dark.px-5.py-4
                    h4.text-center Secado
                    p.text-center Cuando la limpieza es mediante el uso de agua, se da paso al proceso de secado, en el cual se busca remover el exceso de humedad que puede afectar el producto ocasionado por pudrición.
              .tarjeta-avatar.sizecrd1.slyderF-media
                img.imgsize1(src='@/assets/curso/tema3/imagen9.png')
                .tarjeta.otra1.fondoslider2
                  .text-dark.px-5.py-4
                    h4.text-center Ventilación
                    p.text-center Sin importar si el método es húmedo o seco (pero sobre todo cuando es húmedo), la ventilación es una acción que favorece el secado o deshumidificación del producto (disposición al aire libre o con ventiladores, secadores o beneficiadores).
              .tarjeta-avatar.sizecrd1.slyderF-media
                img.imgsize1(src='@/assets/curso/tema3/imagen10.png')
                .tarjeta.otra1.fondoslider2
                  .text-dark.px-5.py-4
                    h4.text-center Desinfección
                    p.text-center Posterior al proceso de limpieza se realiza una desinfección del producto con apoyo de productos que no alteren su composición. Esta acción se realiza para evitar la presencia de plagas o patógenos que afecten gravemente el producto o a sus consumidores finales.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.2. Empaque
    .row.just-content-center(data-aos="fade-down-left")
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4
        img(src='@/assets/curso/tema3/imagen11.jpg')
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12
        p El principal objetivo del empaque es proteger al producto del medio y reducir el contacto con elementos nocivos. Los empaques pueden tener algunos atributos como, por ejemplo, preservar los productos de gases (CO2, O2, etileno), proteger de la luz y la temperatura, prevenir daños físicos y compresión, entre otros.
        .cajon.color-acento-contenido.px-4.py-4.fondo6.mt-4
          p Existen en el mercado una gran variedad de tipos de empaque: de madera, cartón corrugado, recipientes de plástico, bolsas y papel.
    .row.justify-content-center.ampliar.fondo18(data-aos="fade-down-right")
      .col-xxl-12.px-5
        p.my-5 En el siguiente recurso se muestran las ventajas y desventajas que presenta cada uno de estos tipos de empaque, tome nota de los aspectos más importantes:
        img(src='@/assets/curso/tema3/figura7.svg')
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 3.3. Almacenamiento, embalaje y transporte
    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12
        .cajon.color-acento-contenido.p-4.mb-4.fondo4
          p Los requerimientos de almacenamiento varían considerablemente, pueden ser desde unas pocas horas hasta varios días, según el producto, el destino, las especificaciones, etc. Las instalaciones donde se almacenan productos de origen agropecuario pueden ser simples o muy sofisticadas; pero, en todos los casos se debe tomar en cuenta el sistema de comercialización, la compatibilidad de los productos que se guardan juntos y las necesidades individuales del empresario.
        p En el siguiente video se detallan 
          span.colortextocontenido.text-bold  algunos aspectos clave del proceso de almacenamiento de productos agrícolas:
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12
        img(src='@/assets/curso/tema3/imagen12.jpg')
    figure.mb-5(data-aos="fade-down-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/12rBFOxy4Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.4. Manejo y disposición de los residuos
    .row.justify-content-center.ampliar.fondo19
      .col-xxl-12.px-5
        p.mb-5(data-aos="fade-down-left") Los residuos sólidos están presentes en todos los sectores productivos y el sector agrícola no es la excepción, por tal razón es importante la elaboración de un plan de gestión integral de residuos sólidos PGIRS en la empresa. 
        .row.justify-content-center(data-aos="fade-down-right")
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4
            img(src='@/assets/curso/tema3/imagen13.jpg')
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12
            .cajon.color-acento-contenido.p-4.mb-4.fondo20
              p Un PGIRS busca minimizar y aprovechar los residuos producidos en las diferentes etapas de producción. Esto se puede convertir en una ventaja para la empresa, debido a que se pueden obtener beneficios económicos ya sea por la comercialización de material reciclable o por la elaboración de abonos orgánicos, por el aprovechamiento de los residuos provenientes de los procesos de la industria. 
            p Otros objetivos más concretos que puede plantearse una empresa agrícola en relación al 
              span.colortextocontenido.text-bold plan de gestión de residuos 
              span son:
            ul.lista-ul
              li 
                i.fas.fa-angle-right.colortextocontenido
                | Identificar situaciones de riesgo. 
              li
                i.fas.fa-angle-right.colortextocontenido
                | Definir las acciones para su prevención y control.
              li
                i.fas.fa-angle-right.colortextocontenido
                | Lograr un funcionamiento óptimo de la finca.
              li
                i.fas.fa-angle-right.colortextocontenido
                | Implementar un buen plan de integración de todas las áreas de la compañía en función de los residuos.
              li
                i.fas.fa-angle-right.colortextocontenido
                | Reducir costos de producción con la reutilización y reciclaje.
              li
                i.fas.fa-angle-right.colortextocontenido
                | Mejorar los procesos de producción de la finca.
              li
                i.fas.fa-angle-right.colortextocontenido
                | Reducir o eliminar los residuos que se generan durante los procesos.
              li
                i.fas.fa-angle-right.colortextocontenido
                | Garantizar la salud de las plantas, ecosistemas, personas colaboradoras y consumidores finales.
              li
                i.fas.fa-angle-right.colortextocontenido
                | Cumplir la normatividad establecida y vigente.
        p.my-5(data-aos="fade-down-right") En la actividad agrícola los residuos se clasifican en residuos aprovechables y no aprovechables. En la siguiente figura se muestra la cadena de manejo que debe darse a los tipos de residuos en las fincas, desde su generación hasta su destino final:
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          h5 Figura 1. 
          span Manejo de residuos
        .row.justify-content-center(data-aos="fade")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-12
            img(src='@/assets/curso/tema3/figura8.svg')        
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Grado de madurez',
        texto:
          'En el caso específico de las frutas, este se determina gracias al uso de la tabla de color, en los demás productos se determina por las dimensiones y los pesos. Las tablas de madurez según las Normas Técnicas Colombianas NTC inician en cero y terminan en seis, siendo cero el punto de partida como el menor grado de madurez y seis el valor máximo considerado como sobremaduro.',
        imagen: require('@/assets/curso/tema3/imagen3.jpg'),
      },
      {
        titulo: 'Calibre',
        texto:
          'De acuerdo con el producto final se determina su clasificación por su diámetro o por su longitud, por ejemplo, en algunas frutas se toma solo el diámetro en su parte más gruesa. En otras como el banano se toma, además de su diámetro, su longitud; estas medidas se cruzan con el peso y con ello se determina el calibre. En la NTC para las frutas se establecen 5 categorías de calibres: A, B, C, D y E siendo A la mayor y E la menor. ',
        imagen: require('@/assets/curso/tema3/imagen4.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
