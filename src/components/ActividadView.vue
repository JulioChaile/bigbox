<template>
    <Loading v-if="loading" />

    <div v-else class="container-actividad">
        <img @click="irHome" style="cursor: pointer" src="../assets/Arrow.jpg" width="27" height="23" />

        <div class="container-principal">
            <carousel>
                <slide slideWidth="560px" v-for="img in images" :key="img">
                    <img
                        :src="img"
                        width="560"
                        height="370"
                    />
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>

            <div class="actividad">
                <div class="title-actividad">
                    {{ actividad.title }}
                </div>

                <p class="descripcion-actividad">
                    {{ actividad.activity.description }}
                </p>

                <div class="participantes-actividad">
                    <img
                        v-for="i in actividad.activity.participants"
                        :key="i"
                        src="../assets/Part.jpg"
                    />

                    <div class="subtitle-actividad">
                        {{ actividad.activity.subtitle }}
                    </div>
                </div>

                <div class="location-actividad">
                    <img src="../assets/Location.jpg" width="auto" height="auto" />

                    <span>{{ location }}</span>
                </div>

                <div class="points-actividad">
                    {{ actividad.points }} puntos
                </div>
            </div>
        </div>

        <div class="title-beneficios">
            ¿Qué incluye?
        </div>

        <div id="benefits"></div>

        <div class="reglas-actividad">
            <img style="margin-right: 10px" src="../assets/Reglas.jpg" width="19" height="24" />

            Reglas:
        </div>

        <p class="reglas">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam tempus mi, bibendum condimentum diam bibendum a. Cras eget lorem at ante sollicitudin luctus. Sed gravida vulputate magna molestie pellentesque. Duis id tortor enim. Phasellus auctor ultricies scelerisque. Mauris semper, lorem vitae congue feugiat, lorem massa egestas erat, eget euismod purus sapien eu urna. Curabitur efficitur eros ut dui vehicula, a ullamcorper mauris efficitur.s
        </p>

        <div class="otras-actividades">
            Otras actividades similares:
        </div>

        <div class="similares">
            <TarjetaActividad
                v-for="a in actividades"
                :key="a.id"
                :actividad="a"
                @irActividad="getActividad"
            />
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Loading from './Loading.vue'
import TarjetaActividad from './TarjetaActividad.vue'

export default {
    name: 'ActividadView',
    components: {
        Loading,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        TarjetaActividad
    },
    data () {
        return {
            loading: true,
            actividad: {},
            actividades: [],
            images: [],
            location: ''
        }
    },
    mounted () {
        this.getActividad()

        fetch("https://www.frontchallenge.bigbox.com.ar/activity?_page=3&_limit=4")
            .then(data => data.json())
            .then(r => {
                this.actividades = r
                this.actividades.forEach(a => a.activity = JSON.parse(a.activity))
            })
    },
    methods: {
        getActividad (idActividad) {
            const id = idActividad || this.$route.params.id
            this.loading = true

            fetch(`https://www.frontchallenge.bigbox.com.ar/activity/${id}`)
                .then(data => data.json())
                .then(r => {
                    this.loading = false

                    this.actividad = r
                    this.actividad.activity = JSON.parse(this.actividad.activity)

                    this.images = this.actividad.activity.image
                    this.location = this.actividad.activity.locations[0].province

                    setTimeout(() => {
                        const element = document.getElementById('benefits')
                        element.innerHTML = this.actividad.activity.benefits
                    }, 50)
                })
        },
        irHome () {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style>
.similares {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.otras-actividades {
    font-weight: 700;
    font-size: 24px;
    color: #464646;
    margin-top: 50px;
    margin-bottom: 25px;
}
.reglas {
    font-weight: 300;
    font-size: 18px;
    color: #4F4F4F;
}
.reglas-actividad {
    display: flex;
    font-weight: 700;
    font-size: 22px;
    color: #464646;
    margin-top: 50px;
}
#benefits {
    font-weight: 300;
    font-size: 18px;
    color: #4F4F4F;
}
.title-beneficios {
    width: 160px;
    border-bottom: 3px solid #FF6C5F;
    font-weight: 500;
    font-size: 22px;
    color: #464646;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;
}
.actividad {
    padding-left: 30px;
    position: relative;
}
.points-actividad {
    position: absolute;
    bottom: 50px;
    font-weight: 400;
    font-size: 24px;
    color: #464646;
}
.location-actividad {
    font-weight: 400;
    font-size: 16px;
    color: #464646;
    margin-top: 30px;
}
.location-actividad img {
    width: 9px;
    height: 14px;
    margin-right: 10px;
}
.participantes-actividad {
    display: flex;
}
.subtitle-actividad {
    margin-left: 10px;
    font-weight: 400;
    font-size: 16px;
    color: #464646;
}
.container-actividad {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
}
.container-principal {
    display: flex;
    margin-top: 10px;
}
.title-actividad {
    font-size: 30px;
    font-weight: 700;
    color: #464646;
}
.descripcion-actividad {
    color: #4F4F4F;
    font-weight: 400;
    font-size: 18px;
}
.carousel {
    width: 560px
}
.carousel__prev,
.carousel__next {
    color: white;
}
</style>