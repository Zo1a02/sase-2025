<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>


<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/home">Home</RouterLink>
            </li>
            <li>
              <RouterLink class="nav-link" aria-current="page" to="/test">Link</RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav me-auto">
            <RouterLink class="nav-link" aria-current="page" to="/login" >Login</RouterLink><i class="fa-solid fa-right-to-bracket"></i>
          </ul>
      </div>
    </nav>
    <div class="cintainer">
      <input class="btn btn-primary" type="submit" value="Submit"></input>
    </div>
</template>

<style scoped>
</style>
