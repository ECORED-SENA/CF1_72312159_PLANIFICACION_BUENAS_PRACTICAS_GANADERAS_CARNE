<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Gestión ambiental y de calidad en bovinos de carne
    p.mb-4(data-aos="fade-right") La certificación en Buenas Prácticas Ganaderas (BPG) establece lineamientos específicos para garantizar una producción sostenible de bovinos de carne, minimizando el impacto ambiental y promoviendo el uso responsable de los recursos naturales. La gestión ambiental juega un papel clave en la eficiencia del sistema productivo y en la reducción de la huella ecológica de la ganadería. Las ventajas ambientales de la certificación en BPG son:
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c33
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img1.svg', alt='', style='width: 250px').m-auto
            .col-lg
              p.text-white Lo invitamos a escuchar el siguiente Pódcast:
              TarjetaAudio.color-acento-contenido(
                  texto="Ventajas ambientales de la certificación en BPG"
                  :audio="require('@/assets/curso/tema5/audio1.wav')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.png', alt='', style='width: 485px').m-auto


</template>

<script>
export default {
  name: 'Tema5',
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
