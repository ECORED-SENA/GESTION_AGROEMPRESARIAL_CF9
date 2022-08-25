<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="fade-up-right")
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/iconos/falso-verdadero.svg")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Manejando el sistema poscosecha
        p.mb-4 Fortalecer los saberes y habilidades del manejo del sistema de poscosecha en la producción agrícola, con base en las temáticas estudiadas en el componente.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Verdadero/Falso
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="fade-up-left")
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/iconos/arrastrar.svg")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Proceso productivo y uso de materias primas
        p.mb-4 Afianzar en el aprendiz la conceptualización lograda en el componente formativo, en relación con las etapas del proceso de producción y el uso de materias primas.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Actividad',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass"></style>
