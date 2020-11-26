import { ref } from "vue";

export default function useFormulario() {
    const muestraFormulario = ref("");
    const abreFormulario = (letra) => (muestraFormulario.value = letra);
    const cierraFormulario = () => (muestraFormulario.value = "");

    return { muestraFormulario, abreFormulario, cierraFormulario }
}