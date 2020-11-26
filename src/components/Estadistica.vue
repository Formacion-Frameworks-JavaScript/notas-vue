<template>
  <div class="card">
    <div class="card-header">{{ titulo }}</div>
    <div class="card-body numbers">
      {{ typeof truncado !== "undefined" ? dato.toFixed(2) : dato }}
      <template v-if="typeof porcentaje !== 'undefined'"
        >({{ porcentaje.toFixed(2) }}%)</template
      >
    </div>
    <i
      v-if="typeof porcentaje === 'undefined'"
      class="fa icono-status"
      :class="clasesIconos"
    ></i>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["dato", "titulo", "truncado", "porcentaje"],
  setup(props) {
    const clasesIconos = computed(() =>
      props.dato >= 5 ? "icono-ok fa-smile" : "icono-no-ok fa-frown"
    );
    return { clasesIconos };
  },
};
</script>

<style>
</style>