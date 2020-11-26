<template>
  <div class="card-footer totales">
    <div class="row">
      <div class="col">
        <Estadistica :dato="totales.media" titulo="Nota media" truncado />
      </div>
      <div class="col">
        <Estadistica :dato="totales.maxima" titulo="Máxima nota" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Estadistica
          :dato="totales.nAprobados"
          titulo="Aprobados"
          :porcentaje="totales.pAprobados"
        />
      </div>
      <div class="col">
        <Estadistica
          :dato="totales.nSuspensos"
          titulo="Suspensos"
          :porcentaje="totales.pSuspensos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { toRef } from "vue";
import Estadistica from "@/components/Estadistica";
import useTotales from "@/use/useTotales";

export default {
  props: ["notas"],
  components: {
    Estadistica,
  },
  setup(props) {
    return {
      ...useTotales(toRef(props, "notas")),
    };
  },
};
</script>

<style>
</style>