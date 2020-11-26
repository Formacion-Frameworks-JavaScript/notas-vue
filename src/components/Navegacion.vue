<template>
  <header class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <h1 class="navbar-brand">Notas App</h1>
      </div>
      <nav class="nav navbar-nav navbar-right menu">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item">
            <router-link to="/notas">Listado de notas</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/estadisticas">Estadísticas</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navegacion",
};
</script>