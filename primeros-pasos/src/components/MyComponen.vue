<template>
    <div class="my-componen">
        <!-- <h1 v-if="isVisible">{{ message }}</h1> -->
        <!-- <button v-on:click="sayHello">Toggle visibility</button> -->
        <!-- <button @click="sayHello">Toggle visibility</button> --> <!-- @click es lo mismo que v-on:click -->


        <!-- bind sirve para determinar si la clase highlighted se aplica o no -->
        <h1 v-bind:class="{ highlighted: isHighlighted }">{{ tittle }}</h1>
        <button @click="toggleHighlight">Toggle Highlight</button>
        <input v-model="message">
        <!--enlace bidireccional (actualiza message) actualiza lo del input y el dom al misma tiempo  -->
        <ul>
            <li v-for="value in list" :key="value.id">{{ value.name }}</li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'MyComponen',
    data() {
        return {
            message: 'Hola desde MyComponen.vue',
            isVisible: true,
            tittle: 'Listado de elementos',
            isHighlighted: false,
            list: [
                { id: 1, name: 'Elemento 1' },
                { id: 2, name: 'Elemento 2' },
                { id: 3, name: 'Elemento 3' }
            ]
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        sayHello() {
            alert("Hello!");
            //console.log("message", this.message);
        },
        toggleHighlight() {
            this.isHighlighted = !this.isHighlighted;
        }
    }
}
</script>

<style>
    .highlighted {
        color: yellow;
    }
</style>