<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ganado bovino de carne
    .row.bg-c38
      .col-12
        .px-5
          p.mb-5.mt-5 En el ámbito profesional, el concepto de razas de ganado de carne en Colombia se refiere a las variedades de bovinos seleccionadas y criadas específicamente para la producción cárnica, basadas en características fenotípicas y genéticas que optimizan el rendimiento, la adaptabilidad al entorno y la calidad del producto final.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img32.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La diversidad de climas y terrenos en el país ha favorecido el desarrollo de razas tanto autóctonas como importadas, caracterizadas por su capacidad de adaptación y por ofrecer carnes de distintas calidades, en respuesta a las exigencias de los mercados nacional e internacional.
          Separador
          #t_1_1.titulo-segundo.color-acento-contenido
            h2 1.1 Concepto y características
    p.mb-5(data-aos="fade-right")  Las razas de ganado de carne en Colombia agrupan bovinos cuya selección genética y manejo se enfocan principalmente en una producción eficiente y rentable de carne. Estas razas se destacan por:
    .row.bg-c5
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Rendimiento cárnico]
                    p.mb-0 Alta conversión de alimento en masa muscular, crecimiento rápido y capacidad para alcanzar pesos óptimos de sacrificio.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img33.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Calidad de la carne]
                    p.mb-0 Atributos organolépticos como terneza, jugosidad, marmoleo y sabor, fundamentales para la aceptación comercial.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img34.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Adaptabilidad ambiental]
                    p.mb-0 Resistencia a diversas condiciones climáticas y geográficas, desde zonas cálidas y tropicales hasta regiones templadas y de mayor altitud.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img35.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Resistencia a enfermedades]
                    p.mb-0 Capacidad para enfrentar enfermedades endémicas y desafíos sanitarios característicos de la ganadería tropical.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img36.png", alt="", style="width: 500px").m-auto
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Principales razas de ganado de carne en Colombia
    p.mb-4(data-aos="fade-right") En Colombia se destacan diversas razas de ganado de carne que, por sus características productivas y adaptabilidad, contribuyen de manera significativa a la ganadería nacional.
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="<i>Cebú (Bos indicus)</i>")
            .col-12
              p Es la raza predominante en Colombia, especialmente en regiones tropicales y cálidas. Se distingue por su alta resistencia a enfermedades tropicales, calor y parásitos, cualidades que lo hacen ideal para el clima colombiano. Entre las subrazas de #[i Cebú] más relevantes en Colombia se encuentran:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 #[i Gir]: raza con excelente adaptabilidad al trópico y resistencia a enfermedades, valorada tanto por su carne como por su leche.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 #[i Gyr]: muy similar al Gir, destaca por su adaptación a condiciones ambientales extremas.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 #[i Nelore]: originaria de Brasil, se aprecia por su resistencia y producción de carne magra de calidad.
          .row(titulo="<i>Charoláis (Bos taurus)</i>")
            .col-12
              p De origen francés, esta raza se reconoce mundialmente por su alto rendimiento en carne magra, tierna y de excelente calidad. Se caracteriza por:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Ganado de gran tamaño y musculoso, con sobresaliente producción cárnica.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Carne muy apreciada por su terneza y sabor, altamente demandada en mercados internacionales.
              p.mb-0 En Colombia, el Charoláis se cría principalmente en zonas de clima templado y se utiliza en programas de mejoramiento genético.
          .row(titulo="<i>Limousin (Bos taurus)</i>")
            .col-12
              p Raza francesa conocida por su eficiencia en la conversión alimenticia y su capacidad para producir carne magra de alta calidad. Sus principales características son:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Ganado de musculatura definida, productor de carne tierna con buen marmoleo.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Alta eficiencia en sistemas de engorde intensivos y semi-intensivos.
              p.mb-0 El #[i Limousin] se cruza con ganado Cebú para mejorar el rendimiento cárnico en regiones tropicales.
          .row(titulo="<i>Hereford (Bos taurus)</i>")
            .col-12
              p Esta raza británica ha ganado popularidad en Colombia debido a la calidad de su carne, destacándose por:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Excelente combinación de grasa y músculo, con carne de sabor y terneza notables.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Alta resistencia y adaptabilidad a diversos sistemas de manejo.
              p.mb-0 El #[i Hereford] se emplea principalmente en cruzamientos para mejorar la calidad de la carne de razas locales.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img37.png", alt="", style="width: 400px").m-auto
    .row.align-items-center
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img38.png", alt="", style="width: 400px").m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="<i>Simmental (Bos taurus)</i>")
            .col-12
              p Originaria de Suiza, la raza #[i Simmental] en Colombia se destina sobre todo a la producción de carne. Presenta las siguientes características:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Rápido crecimiento y alta capacidad de ganancia de peso.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Producción de carne magra, de buen sabor y excelente conversión alimenticia.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Adaptabilidad a climas templados y cálidos.
              p.mb-0 El #[i Simmental] se utiliza en programas de cruzamiento para mejorar el rendimiento cárnico.
          .row(titulo="<i>Aberdeen Angus (Bos taurus)</i>")
            .col-12
              p De origen escocés, el Aberdeen #[i Angus] es conocido por la calidad de su carne, caracterizada por su terneza, jugosidad y marmoleo. Se distingue por:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Carne de alto valor comercial debido a su sabor y textura.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Ganado de tamaño mediano, eficiente en la producción de carne magra.
              p.mb-0 En Colombia, se cría principalmente en zonas templadas y frías, y participa en programas de mejoramiento genético.
          .row(titulo="<i>Brangus (Bos indicus x Bos taurus)</i>")
            .col-12
              p Esta raza surge del cruce entre #[i Cebú] y #[i Angus], combinando las ventajas de ambos linajes. Sus principales características son:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Alta resistencia al calor y a enfermedades tropicales.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Producción de carne de alta calidad, tierna y jugosa.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Excelente productividad en sistemas tropicales.
              p.mb-0 El #[i Brangus] se emplea ampliamente en cruzamientos comerciales en la ganadería colombiana.
          .row(titulo="<i>Santa Gertrudis (Bos indicus x Bos taurus)</i>")
            .col-12
              p Originada en Estados Unidos a partir del cruce entre #[i Cebú] y #[i Shorthorn], esta raza es valorada por:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Gran tamaño, musculatura desarrollada y producción de carne magra.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Adaptabilidad a condiciones tropicales y resistencia a enfermedades y parásitos.
              p.mb-0 En Colombia, el #[i Santa Gertrudis] se utiliza principalmente en sistemas de ganadería extensiva y en programas de mejoramiento de resistencia y calidad de carne.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
