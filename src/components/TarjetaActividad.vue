<template>
    <div @click="irActividad" class="container-tarjeta-act" :style="width()">
        <img :src="img" width="auto" height="auto" />

        <div class="full-width title-card">
            {{ actividad.title }}

            <div class="participantes-container">
                <img
                    v-for="i in actividad.activity.participants"
                    :key="i"
                    src="../assets/Part.jpg"
                />
            </div>
        </div>

        <div class="location-card">
            <img src="../assets/Location.jpg" width="auto" height="auto" />

            <span>{{ location }}</span>
        </div>

        <p class="description-card">
            {{ actividad.activity.description }}
        </p>

        <div class="points-card">
            {{ actividad.points }} puntos
        </div>
    </div>
</template>

<script>
export default {
    name: 'TarjetaActividad',
    props: [ 'actividad' ],
    data () {
        return {
            img: '',
            location: ''
        }
    },
    created () {
        this.img = this.actividad.activity.image[0]
        this.location = this.actividad.activity.locations[0].province
    },
    methods: {
        irActividad () {
            this.$router.push({ name: 'Actividad', params: { id: this.actividad.id } })
            this.$emit('irActividad', this.actividad.id)
        },
        width () {
            if (this.$route.params.id) {
                return 'width: 270px'
            }
        }
    }
}
</script>

<style>
.container-tarjeta-act {
    width: 380px;
    height: 400px;
    padding: 10px;
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
    overflow: hidden;
}

.container-tarjeta-act img {
    width: 370px;
    height: 240px;
}

.full-width {
    width: 100%;
}

.title-card {
    color: #464646;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    position: relative;
}

.participantes-container {
    position: absolute;
    display: flex;
    right: 0;
    top: 0;
    margin-right: 20px;
}

.participantes-container img {
    width: 14px;
    height: 16px;
}

.location-card {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
}

.location-card img {
    width: 9px;
    height: 14px;
    margin-right: 10px;
}

.description-card {
    font-size: 14px;
}

.points-card {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 5px;
    margin-bottom: 0px;
    font-weight: 600;
    font-size: 18px;
    color: #464646;
}
</style>