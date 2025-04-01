<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-right") La ganadería bovina de carne es una actividad esencial para muchas regiones, no solo como fuente de alimento, sino también como motor económico y social. Sin embargo, su sostenibilidad y eficiencia dependen de la aplicación de buenas prácticas ganaderas, que permiten mejorar la calidad del producto, garantizar el bienestar animal y minimizar el impacto ambiental.
    .row.mb-3
      .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        .row
          .col-lg-auto.pe-lg-0.d-none.d-xl-block
            figure
              img(src='@/assets/curso/intro/img1.png', alt='', style='width: 300px').m-auto
          .col-lg.bg-c1
            .p-4
              .row.mb-3
                .col-auto
                  .px-3.py-2.bg-c2
                    p.mb-0 #[b ¿Por qué es importante conocer estas prácticas?]
              p Porque una producción responsable no solo beneficia a los productores al hacer sus sistemas más rentables y eficientes, sino que también contribuye a la seguridad alimentaria y al cuidado del entorno. Aspectos como la sanidad, la alimentación balanceada y el manejo adecuado de los recursos naturales son fundamentales para asegurar el futuro del sector ganadero.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.png', alt='', style='width: 400px').m-auto
    p.mb-0(data-aos="fade-right") En este componente formativo se analizarán los principios clave de la ganadería bovina, su impacto y su aplicación efectiva. Mediante ejemplos prácticos y un enfoque integral, se explorarán estrategias para optimizar la producción, mejorar la sostenibilidad y enfrentar los desafíos actuales del sector, garantizando calidad, eficiencia y cumplimiento de normativas vigentes.

</template>

<script>
export default {
  name: 'Introduccion',
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
