<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span.text-white 
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Se da la bienvenida al componente formativo 
      span.colortextocontenido.text-bold “Manejo del sistema de poscosecha en la producción agrícola”
      span , comience esta experiencia de aprendizaje observando con atención el video que se muestra a continuación. 
      span.colortextocontenido.text-bold ¡Adelante!
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7XHK6qwodtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
