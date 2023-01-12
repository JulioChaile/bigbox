<template>
    <div class="container-paginacion">
        <div @click="irPagina(page - 1)" class="cursor-pointer boton-pagina active">&lt;</div>
        <div v-if="page !== 1" class="boton-pagina">...</div>
        <div @click="irPagina(page >= 17 ? 17 : page)" :class="'cursor-pointer boton-pagina ' + active(page >= 17 ? 17 : page)">{{ page >= 17 ? 17 : page }}</div>
        <div @click="irPagina(page >= 17 ? 18 : page + 1)" :class="'cursor-pointer boton-pagina ' + active(page >= 17 ? 18 : page + 1)">{{ page >= 17 ? 18 : page + 1 }}</div>
        <div @click="irPagina(page >= 17 ? 19 : page + 2)" :class="'cursor-pointer boton-pagina ' + active(page >= 17 ? 19 : page + 2)">{{ page >= 17 ? 19 : page + 2 }}</div>
        <div @click="irPagina(page >= 17 ? 20 : page + 3)" :class="'cursor-pointer boton-pagina ' + active(page >= 17 ? 20 : page + 3)">{{ page >= 17 ? 20 : page + 3 }}</div>
        <div @click="irPagina(page >= 17 ? 21 : page + 4)" :class="'cursor-pointer boton-pagina ' + active(page >= 17 ? 21 : page + 4)">{{ page >= 17 ? 21 : page + 4 }}</div>
        <div @click="irPagina(page >= 17 ? 22 : page + 5)" :class="'cursor-pointer boton-pagina ' + active(page >= 17 ? 22 : page + 5)">{{ page >= 17 ? 22 : page + 5 }}</div>
        <div @click="irPagina(page >= 17 ? 23 : page + 6)" :class="'cursor-pointer boton-pagina ' + active(page >= 17 ? 23 : page + 6)">{{ page >= 17 ? 23 : page + 6 }}</div>
        <div v-if="page < 17" class="boton-pagina">...</div>
        <div @click="irPagina(24)" :class="'cursor-pointer boton-pagina ' + active(24)">24</div>
        <div @click="irPagina(page + 1)" class="cursor-pointer boton-pagina active">></div>
    </div>
</template>

<script>
export default {
    name: 'PaginacionCards',
    data () {
        return {
            page: 1
        }
    },
    methods: {
        irPagina(p) {
            if (p < 1 || p > 25) return

            this.page = p

            this.$emit('changePage', p)
        },
        active (p) {
            if (p === this.page) return 'active'
        }
    }
}
</script>

<style>
.container-paginacion {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.boton-pagina {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
}
.cursor-pointer {
    cursor: pointer;
}
.active {
    background: #FF6C5E;
    color: white;
}
</style>