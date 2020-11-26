<template>
  <main class="container">
    <div class="row totales">
      <div class="col">
        <div class="card">
          <div class="header">
            <h2>Estadísticas</h2>
          </div>
          <div class="card-body row">
            <div class="col">
              <Estadistica :dato="totales.media" titulo="Nota media" truncado />
            </div>
            <div class="col">
              <Estadistica :dato="totales.maxima" titulo="Máxima nota" />
            </div>
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
      </div>
    </div>
  </main>
  <div class="loading" hidden>
    <img src="img/loading.svg" alt="cargando" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import notasJSON from "../notas.json";
import Estadistica from "@/components/Estadistica";
import useTotales from "@/use/useTotales";
import { computed } from "vue";
export default {
  components: {
    Estadistica,
  },
  setup() {
    const store = useStore();
    const notas = computed(() => store.state.notas);
    if (notas.value.length === 0) {
      store.dispatch("cargaNotas", notasJSON.notas);
    }
    return {
      ...useTotales(notas),
    };
  },
};
</script>
