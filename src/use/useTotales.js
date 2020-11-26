import { computed } from "vue";

export default function useTotales(notas) {
    const totales = computed(() => {
        const media =
            notas.value.reduce((acc, nota) => acc + nota.nota, 0) /
            notas.value.length;
        const maxima = notas.value.reduce(
            (acc, nota) => (acc > nota.nota ? acc : nota.nota),
            0
        );
        const nAprobados = notas.value.filter((nota) => nota.nota >= 5).length;
        const pAprobados = nAprobados / notas.value.length * 100;
        const nSuspensos = notas.value.length - nAprobados;
        const pSuspensos = 100 - pAprobados;
        return { media, maxima, nAprobados, pAprobados, nSuspensos, pSuspensos };
    });
    const clasesIconos = (nota) =>
        nota >= 5 ? "icono-ok fa-smile" : "icono-no-ok fa-frown";

    return { totales, clasesIconos }
}