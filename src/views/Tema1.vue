<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 1
      h1 Marco normativo
    .row.justify-content-center.fondo1.ampliar
      .col-xxl-12.px-5
        p.mb-5 La actividad agrícola en Colombia está regulada por una serie de normas que tienen como objetivo garantizar las condiciones aptas, tanto para el abastecimiento de las materias primas necesarias para cada actividad como para la apertura de los mercados nacionales e internacionales.
        img(src='@/assets/curso/tema1/imagen1.jpg')
        .row.justify-content-center.my-5
          .col-xxl-8.col-xl-8.col-lg-8.col-md-11.col-sm-12.col-12
            .cajon.color-acento-contenido.p-4.mb-4.fondo3
              .row.justify-content-center.align-items-center
                .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-3.col-3
                  img(src='@/assets/curso/tema1/figura1.svg')
                .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-9.col-9
                  p.mb-0 Tal normatividad es un compendio de leyes, resoluciones, decretos, circulares, planes, entre otras, que buscan aunar esfuerzos para el desarrollo del agro en el país.
        separador
        #bpm.titulo-segundo.color-acento-contenido
          h2 1.1. Buenas prácticas de manufactura
        img(src='@/assets/curso/tema1/imagen2.jpg')
        .row.justify-content-center.my-5.align-items-center
          .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-12.col-12
            p Son los principios básicos y prácticas generales de higiene en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución de alimentos para el consumo humano, con el objeto de garantizar que los productos se fabriquen en condiciones sanitarias favorables para garantizar su calidad.
          .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-12.col-12
            .cajon.color-acento-contenido.p-4.mb-4.fondo4
              h4 ¡Importante!
              p Las BPM permiten a las empresas de alimentos cumplir con todos los requerimientos de seguridad para el consumo de productos alimenticios. 
        p.mb-5 Conozca los cinco elementos clave para la operación de buenas prácticas de manufactura que las empresas de alimentos deben tener en cuenta:
    .row.justify-content-center.fondo2.ampliar
      .col-xxl-12.px-5
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4 col-md-6")
          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/avatar1.svg')
            .tarjeta.fondoavatar.sizecrd.sombracrd
              .text-dark.p-4
                h2 Personas
                p Comprender las funciones y la responsabilidad.

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/avatar1.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                h2 Productos
                p Especificaciones claras en cada fase de la producción.

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/avatar1.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                h2 Procesos
                p Debidamente documentados, sencillos y coherentes.

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/avatar1.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                h2 Procedimientos
                p Directrices para emprender procesos críticos.

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/avatar1.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                h2 Instalaciones
                p Limpieza y calibración de los equipos en todo momento.

        separador
        #ambiental.titulo-segundo.color-acento-contenido
          h2 1.2. Normatividad ambiental
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En Colombia es una de las más completas del mundo, el país ha desarrollado mecanismos de protección de los ecosistemas propendiendo por el desarrollo industrial, con la minimización de los impactos generados por las actividades antrópicas.
        p.my-5 En lo relacionado con la normativa ambiental se recomienda tener muy presentes algunos criterios como:
        .row.justify-content-center
          .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-12
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Por el éxito de la producción") En la agricultura los aspectos medioambientales son factores importantes que se deben tener muy en cuenta para los procesos productivos, ya que son elementos vitales para el éxito en la producción.
              
              p(numero="2" titulo="Minimización del impacto ambiental") El manejo adecuado de los recursos y la implementación de las buenas prácticas ambientales garantizan que los impactos generados hacia el ambiente sean menores.
              
              p(numero="3" titulo="Actualización permanente en las normas") La normativa ambiental establece medidas seguridad y las sanciones para garantizar el cumplimiento de las mismas. Es responsabilidad de las empresas agrícolas y pecuarias estar actualizadas e informadas al respecto.
          .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-12
            img(src='@/assets/curso/tema1/imagen4.jpg')
        p.my-5 En la siguiente tabla conozca algunas de las normas más importantes con referencia a la temática ambiental:
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Principales normas orientadas al medio ambiente
        <div class="table-responsive-md">
          table.table
            tr
              th.fondoEncabezado.anchocol.text-center 
                h4.text-white.text-center Norma
              td.fondoEncabezado
                h4.text-white.text-center Concepto
            tr
              td.text-bold.anchocol.text-center Decreto Ley 2811 de 1974
              td.bordetabla Código nacional de los recursos naturales renovables RNR y no renovables y de protección al medio ambiente. 
            tr.fondorow
              td.text-bold.anchocol.text-center  Ley 23 de 1973
              td.bordetabla Principios fundamentales sobre prevención y control de la contaminación del aire, agua y suelo.  
            tr
              td.text-bold.anchocol.text-center  Ley 99 de 1993
              td.bordetabla Crea el ministerio del medio ambiente y organiza el sistema nacional ambiental SINA.
            tr.fondorow
              td.text-bold.anchocol.text-center  Decreto 1753 de 1994
              td.bordetabla Define la licencia ambiental (LA) naturaleza, modalidad y efectos; contenido, procedimientos, requisitos y competencias para el otorgamiento de la (LA).
            tr
              td.text-bold.anchocol.text-center  Decreto 2150 de 1995
              td.bordetabla Reglamenta la licencia ambiental y otros permisos.
            tr.fondorow
              td.text-bold.anchocol.text-center  Ley 388 de 1997
              td.bordetabla Ordenamiento territorial, municipal y distrital y, planes de ordenamiento territorial. 
            tr
              td.text-bold.anchocol.text-center  Ley 491 de 1999
              td.bordetabla Define el seguro ecológico y delitos contra los recursos naturales y el ambiente y, se modifica el código penal.
            tr.fondorow
              td.text-bold.anchocol.text-center Decreto 1124 de 1999
              td.bordetabla Por el cual se reestructura el ministerio del medio ambiente.
        </div>
    separador
    #sanitaria.titulo-segundo.color-acento-contenido
      h2 1.2. Normatividad sanitaria
    .row.justify-content-center
      .col-xxl-4.col-xl-4.col-lg-4.col-md-11.col-sm-11.col-12.mt-4
        p Se crea para propender por la protección de las actividades agropecuarias y agrícolas de posibles enfermedades y la expansión de contagios que puedan afectar gravemente las actividades en el campo.
        p.fondo5.px-5.py-4.my-4 Existe un reglamento sanitario internacional (RSI), que se ha convertido en una herramienta para la prevención de la propagación de enfermedades infecciosas; este fue aprobado en la Resolución WHA58 de 2005 durante la 58° Asamblea Mundial de la Salud.  
      .col-xxl-4.col-xl-4.col-lg-4.col-md-11.col-sm-11.col-12.mt-4   
        img(src='@/assets/curso/tema1/imagen5.jpg')
      .col-xxl-4.col-xl-4.col-lg-4.col-md-11.col-sm-11.col-12.mt-4
        .cajon.color-acento-contenido.px-5.py-5.mb-5.fondo6
          h4 ¡Atención!
          p.mt-5 En Colombia la norma más vinculante relacionada con el manejo sanitario es la Ley 9 de 1979 la cual establece las normas sanitarias para la prevención y control de los agentes biológicos, físicos o químicos que alteran las características del ambiente.
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2. 
      span Normatividad sanitaria
    <div class="table-responsive-md">
      table.table
        tr
          th.fondoEncabezado2.anchocol.text-center 
            h4.text-center Norma
          td.fondoEncabezado2
            h4.text-center Concepto
        tr
          td.text-bold.anchocol.text-center Decreto 2078 de 2012
          td.bordetabla Por el cual se establece la estructura nacional de vigilancia de medicamentos y alimentos INVIMA.
        tr.fondorow
          td.text-bold.anchocol.text-center Resolución 1229 de 2013
          td.bordetabla Por el cual se establece el modelo de inspección vigilancia y control sanitario para los productos de uso y consumo.  
        tr
          td.text-bold.anchocol.text-center Resolución 770 de 2014
          td.bordetabla Por la cual se establecen las directrices para la formulación, ejecución, seguimiento y evaluación de los planes nacionales subsectoriales de vigilancia y control de residuos en alimentos.
        tr.fondorow
          td.text-bold.anchocol.text-center Circular 046 de 2014
          td.bordetabla Lineamientos para la articulación y coordinación de las actividades de inspección, vigilancia y control relacionadas con alimentos destinados al consumo humano. 
        tr
          td.text-bold.anchocol.text-center Circular 031 de 2015
          td.bordetabla Directrices para la aplicación de la normatividad sanitaria de alimentos de consumo humano. 
        tr.fondorow
          td.text-bold.anchocol.text-center Circular 046 de 2016
          td.bordetabla Lineamientos complementarios para la articulación y coordinación de las actividades de inspección, vigilancia y control relacionados con alimentos y bebidas destinados al consumo humano.
    </div>
    separador
    #sst.titulo-segundo.color-acento-contenido
      h2 1.4. Seguridad y salud en el trabajo
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-12
        p En las actividades de producción en la mayoría de los campos se presentan situaciones que pueden afectar leve o gravemente la salud de los trabajadores, es por eso que se hace necesario la implementación de un 
          span.colortextocontenido.text-bold Sistema de gestión de la seguridad y salud en el trabajo
          span , con el objetivo de prevenir las posibles situaciones que se presenten durante la ejecución de las labores de producción y que sean de riesgo para los colaboradores.
        p Las principales normas relacionadas con la SG-SST se describen a continuación:
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-12
        img(src='@/assets/curso/tema1/imagen6.jpg')
    .titulo-sexto.color-acento-contenido.my-5
      h5 Tabla 3. 
      span Normas relacionadas con la seguridad y salud en el trabajo (SG-SST)
    <div class="table-responsive-md">
      table.table
        tr
          th.fondoEncabezado.anchocol.text-center 
            h4.text-white.text-center Norma
          td.fondoEncabezado
            h4.text-white.text-center Concepto
        tr
          td.text-bold.anchocol.text-center Decreto 614 de 1984
          td.bordetabla Establece las bases para la organización y administración de salud ocupacional en Colombia.
        tr.fondorow
          td.text-bold.anchocol.text-center Decreto 1295 de 1994
          td.bordetabla Determina la organización del Sistema general de riesgos profesionales. 
        tr
          td.text-bold.anchocol.text-center Resolución 1016 de 1989
          td.bordetabla Reglamenta la organización y funcionamiento de los programas de salud ocupacional.
        tr.fondorow
          td.text-bold.anchocol.text-center Ley 1562 de 2012
          td.bordetabla Expide el Sistema general de riesgos laborales. 
        tr
          td.text-bold.anchocol.text-center Ley 1610 de 2013
          td.bordetabla Regula aspectos sobre las inspecciones del trabajo e imposición de sanciones por el incumplimiento del SGSST.
        tr.fondorow
          td.text-bold.anchocol.text-center Decreto 1443 de 2014
          td.bordetabla Expide las disposiciones para implementar el sistema de gestión de seguridad y salud en el trabajo. 
        tr
          td.text-bold.anchocol.text-center Decreto 472 de 2015
          td.bordetabla Define las multas y sanciones por el no cumplimiento del Sistema de gestión de seguridad y salud en el trabajo. 
        tr.fondorow
          td.text-bold.anchocol.text-center Decreto 1072 de 2015
          td.bordetabla Expide el decreto único reglamentario del sector trabajo. 
        tr
          td.text-bold.anchocol.text-center Resolución 4927 de 2016
          td.bordetabla Establece los requisitos para la certificación del curso virtual de las 50 horas del SGSST.
        tr.fondorow
          td.text-bold.anchocol.text-center Decreto 052 de 2017
          td.bordetabla Establece que a partir del 1° de junio de 2017 se debe sustituir el programa de salud ocupacional por el SGSST.
        tr
          td.text-bold.anchocol.text-center Resolución 0312 de 2019
          td.bordetabla Se definen los nuevos estándares mínimos para implementar el SGSST en empresas pequeñas, medianas y grandes.
        tr.fondorow
          td.text-bold.anchocol.text-center Circular 063 de 2020
          td.bordetabla Establece los lineamientos para la realización del curso de actualización de 20 horas del SGSST cada 3 años como requisito para la actualización del curso de 50 horas del SGSST.
    </div>
    .bloque-texto-g.fondobloque.p-3.p-sm-4.p-md-5.my-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen7.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El uso de los elementos de protección personal EPP debe ser una constante durante la ejecución de las labores por parte del personal, ya que estos protegen la integridad de la persona en una posible situación de riesgo. Es deber del empleador garantizar la dotación de los EPP y obligación del  personal usarlos.
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({}),
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
