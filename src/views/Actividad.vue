<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer los conocimientos sobre las Buenas Prácticas Ganaderas (BPG) aplicadas en la producción de carne bovina.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de las Buenas Prácticas Ganaderas (BPG)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la cantidad de ganado sin importar la calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la sanidad, bienestar animal, inocuidad y sostenibilidad en la producción ganadera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el uso de tecnología en la ganadería.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo mejorar la alimentación del ganado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad en Colombia es responsable de la certificación de las BPG?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Agricultura y Desarrollo Rural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Federación Colombiana de Ganaderos (FEDEGAN).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instituto Colombiano Agropecuario (ICA).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organización Mundial de la Salud (OMS).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes NO es un componente de las BPG en la producción de carne bovina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manejo sanitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trazabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bienestar animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso de fertilizantes químicos en pastos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué es la trazabilidad en la ganadería de carne?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un método para mejorar la reproducción del ganado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un programa de alimentación para bovinos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un sistema para rastrear el origen y manejo del ganado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un sistema de transporte de carne.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes prácticas contribuye a garantizar el bienestar animal en una empresa ganadera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proporcionar acceso constante a agua limpia y alimentación adecuada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantener a los animales en espacios reducidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aislar a todos los animales del contacto con humanos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Forzar a los animales a alimentarse con cualquier tipo de pasto disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una ventaja de los sistemas silvopastoriles en la producción ganadera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminan la necesidad de vacunar a los animales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentan la sostenibilidad y reducen el impacto ambiental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuyen la producción de carne.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permiten que el ganado se alimente únicamente de residuos agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cómo contribuye la bioseguridad en la producción ganadera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite la rápida comercialización del ganado sin controles sanitarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Previene la propagación de enfermedades y protege la salud del ganado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reduce la necesidad de agua en las explotaciones ganaderas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilita la comercialización de carne sin certificaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Por qué es importante la certificación en Buenas Prácticas Ganaderas (BPG)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite la rápida comercialización del ganado sin controles sanitarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Previene la propagación de enfermedades y protege la salud del ganado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reduce la necesidad de agua en las explotaciones ganaderas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilita la comercialización de carne sin certificaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes estrategias ayuda a reducir los costos de producción en la ganadería de carne?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso indiscriminado de medicamentos veterinarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alimentación balanceada y manejo eficiente del ganado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No llevar registros de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la rotación de pasturas para evitar el desgaste del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto regula la normativa sanitaria en la ganadería bovina de carne?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La implementación de sistemas de identificación animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de ganado permitido por hectárea.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La producción, inocuidad de los alimentos y salud pública.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La exportación de carne sin controles de calidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las Buenas Prácticas Ganaderas (BPG) solo se enfocan en la sanidad animal y la alimentación, sin considerar la sostenibilidad ambiental.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El Instituto Colombiano Agropecuario (ICA) es la entidad encargada de promover las Buenas Prácticas Ganaderas en Colombia.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El Decreto 1500 de 2007 establece los requisitos sanitarios e inocuidad en la producción de carne bovina.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La certificación en Buenas Prácticas Ganaderas no es un requisito para exportar carne bovina.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El bienestar animal en la ganadería bovina de carne se fundamenta en las cinco libertades establecidas por la Organización Mundial de Sanidad Animal (OMSA).',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
