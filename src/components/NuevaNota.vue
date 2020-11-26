<template>
  <div class="row form-nueva">
    <div class="col-12 col-lg-8 offset-lg-2">
      <div class="card">
        <div class="card-header">
          <span>Nueva nota aula {{ letra }}</span>
          <i class="fa fa-minus-circle" @click="onCierraFormulario"></i>
        </div>
        <form class="card-body" @submit.prevent="onEnviarFormulario">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              v-model="nuevaNota.nombre"
              type="text"
              class="form-control"
              id="nombre"
              required
            />
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos:</label>
            <input
              v-model="nuevaNota.apellido"
              type="text"
              class="form-control"
              id="apellidos"
              required
            />
          </div>
          <div class="form-group">
            <label for="nota">Nota:</label>
            <input
              type="number"
              v-model="nuevaNota.nota"
              class="form-control form-control-sm"
              id="nota"
              required
            />
          </div>
          <button class="btn btn-primary" :disabled="!valido">añadir</button>
        </form>
        <pre>{{ nuevaNota }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["letra"],
  setup(props, { emit }) {
    const store = useStore();
    const nuevaNota = ref({
      id: 0,
      nombre: "",
      apellido: "",
      nota: "",
      aula: props.letra,
    });
    const onCierraFormulario = () => emit("cerrar-formulario");
    const onEnviarFormulario = () => {
      store.dispatch("crearNota", {
        ...nuevaNota.value,
        nota: +nuevaNota.value.nota,
      });
      onCierraFormulario();
    };
    const valido = computed(
      () =>
        nuevaNota.value.nombre !== "" &&
        nuevaNota.value.apellido !== "" &&
        nuevaNota.value.nota !== ""
    );
    return { nuevaNota, valido, onCierraFormulario, onEnviarFormulario };
  },
};
</script>

<style>
</style>