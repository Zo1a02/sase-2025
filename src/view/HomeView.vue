<script setup lang="ts">

import Navigation from '../components/Navigation.vue';
import { useLogout } from '@/hooks/logout.hook';

import { ref } from 'vue';

const logout = useLogout()

</script>


<template>
    <Navigation />
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Task no.</th>
      <th scope="col">Task</th>
      <th scope="col">Handled by</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    
</template>

<style>

</style>