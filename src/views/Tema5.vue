<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Gestión ambiental en la producción de bovinos de carne según la certificación en Buenas Prácticas Ganaderas (BPG)
    p.mb-4(data-aos="fade-right") La certificación en Buenas Prácticas Ganaderas (BPG) establece lineamientos específicos para garantizar una producción sostenible de bovinos de carne, minimizando el impacto ambiental y promoviendo el uso responsable de los recursos naturales. La gestión ambiental juega un papel clave en la eficiencia del sistema productivo y en la reducción de la huella ecológica de la ganadería. Las ventajas ambientales de la certificación en BPG son:
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c33
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img1.svg', alt='', style='width: 250px').m-auto
            .col-lg
              p.text-white Lo invitamos a escuchar el siguiente #[i Pódcast]:
              TarjetaAudio.color-acento-contenido(
                texto="Ventajas ambientales de la certificación en BPG"
                :audio="require('@/assets/curso/tema5/audio1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = true"
              )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.png', alt='', style='width: 485px').m-auto
    Separador
    #t_5_1
      .titulo-segundo.color-acento-contenido
        h2 5.1 Buenas prácticas de conservación y protección de la biodiversidad
    p.mb-5(data-aos="fade-right") A continuación, se presentan algunas estrategias fundamentales para conservar y proteger la biodiversidad en sistemas ganaderos:
    .row.bg-c5
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Manejo integrado del paisaje]
                    p.mb-0 Implementar sistemas de producción que integren áreas de pastoreo con zonas naturales, como corredores biológicos, bosques y cuerpos de agua. Esto permite conservar hábitats clave, facilitar el movimiento de especies silvestres y mantener el equilibrio ecológico.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema5/img2.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Pastoreo responsable y rotacional]
                    p.mb-0 Aplicar técnicas de pastoreo rotativo para evitar el sobrepastoreo, reducir la compactación del suelo y permitir la regeneración de la flora nativa. Esta práctica mejora la salud del ecosistema y favorece la biodiversidad tanto vegetal como animal.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema5/img3.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Protección de ecosistemas sensibles]
                    p.mb-0 Conservar zonas ribereñas, humedales, laderas y bosques nativos mediante cercado o exclusión del ganado. Estas áreas son esenciales para la biodiversidad, ya que actúan como refugios naturales y filtros ecológicos.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema5/img4.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Uso de especies nativas en reforestación y cercas vivas]
                    p.mb-0 Fomentar la siembra de árboles y arbustos nativos para restaurar áreas degradadas, establecer cercas vivas y crear sombra natural para el ganado. Esto contribuye al incremento de la biodiversidad local y al equilibrio del ecosistema.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema5/img5.png", alt="", style="width: 500px").m-auto

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
