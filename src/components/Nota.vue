<template>
  <tr :class="{ 'table-danger': !aprobado, 'table-success': aprobado }">
    <td>{{ nota.nombre }}</td>
    <td>{{ nota.apellido }}</td>
    <td class="text-center">
      <span @click="edita">{{ nota.nota }}</span>
      <div class="cambia-nota" v-if="editando">
        <input
          autoFocus
          v-model="nuevaNota"
          class="form-control"
          type="number"
        />
        <i @click="desedita" class="fa fa-times-circle"></i>
        <i @click="onGuardarNota" class="fa fa-check-circle"></i>
      </div>
    </td>
    <td>
      <a href="#" class="borrar" @click.prevent="onBorrarNota">
        <i class="fa fa-times-circle"></i>
      </a>
    </td>
  </tr>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["nota"],
  computed: {
    aprobado() {
      return this.nota.nota >= 5;
    },
  },
  setup(props) {
    const store = useStore();
    const editando = ref(false);
    const nuevaNota = ref(0);
    const edita = () => {
      nuevaNota.value = props.nota.nota;
      editando.value = true;
    };
    const desedita = () => (editando.value = false);
    const onBorrarNota = () => store.dispatch("borraNota", props.nota);
    const onGuardarNota = () => {
      store.dispatch("modificaNota", {
        id: props.nota.id,
        notaNumerica: +nuevaNota.value,
      });
      desedita();
    };
    return {
      onBorrarNota,
      onGuardarNota,
      nuevaNota,
      editando,
      edita,
      desedita,
    };
  },
};
</script>

<style>
</style>