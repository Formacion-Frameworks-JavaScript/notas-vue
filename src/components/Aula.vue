<template>
  <div class="col">
    <div class="card">
      <div class="header row">
        <h2 class="col-10">
          Aula {{ letra }} <span>({{ notas.length }} alumnos)</span>
        </h2>
        <div v-if="!formularioAbierto" class="col-2 anyadir">
          <a href="#" @click.prevent="onAbrirFormulario">
            <i class="fa fa-plus-circle"></i>
          </a>
        </div>
      </div>
      <div class="card-body">
        <table class="table table-bordered tabla-alumnos">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Nota</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Nota v-for="nota in notas" :key="nota.id" :nota="nota" />
          </tbody>
        </table>
      </div>
      <Totales :notas="notas" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Nota from "@/components/Nota";
import Totales from "@/components/Totales";
import { computed } from "vue";

export default {
  props: ["letra", "formularioAbierto"],
  components: {
    Nota,
    Totales,
  },
  setup(props, { emit }) {
    const store = useStore();
    const notas = computed(() =>
      store.state.notas.filter((nota) => nota.aula === props.letra)
    );
    const onAbrirFormulario = () => {
      emit("abrir-formulario", props.letra);
    };
    return { notas, onAbrirFormulario };
  },
};
</script>

<style>
</style>