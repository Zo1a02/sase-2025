<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>


<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/home">Home</RouterLink>
            </li>
              <RouterLink class="nav-link" to="/test">Link</RouterLink>
          </ul>
        </div>
      </div>
    </nav>
</template>

<style scoped></style>
