<template>
  <main class="container">
    <NuevaNota
      :letra="muestraFormulario"
      v-if="muestraFormulario"
      @cerrar-formulario="cierraFormulario"
    />
    <div class="row">
      <Aula
        v-for="letra of letrasAulas"
        :key="letra"
        :letra="letra"
        :formularioAbierto="muestraFormulario"
        @abrir-formulario="abreFormulario"
      />
    </div>
  </main>
  <Loading v-if="cargando" />
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Loading from "@/components/Loading";
import NuevaNota from "@/components/NuevaNota";
import Aula from "@/components/Aula";
import useFormulario from "@/use/useFormulario";

export default {
  name: "PaginaNotas",
  components: {
    Loading,
    NuevaNota,
    Aula,
  },
  setup() {
    const store = useStore();
    const cargando = ref(false);
    const notas = computed(() => store.state.notas);
    const letrasAulas = computed(() =>
      notas.value
        .map((nota) => nota.aula)
        .filter((letra, i, letras) => letras.indexOf(letra) === i)
        .sort()
    );
    store.dispatch("cargaNotas");
    const {
      muestraFormulario,
      abreFormulario,
      cierraFormulario,
    } = useFormulario();
    return {
      notas,
      letrasAulas,
      cargando,
      muestraFormulario,
      abreFormulario,
      cierraFormulario,
    };
  },
};
</script>
