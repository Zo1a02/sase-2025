<script lang="ts" setup>
import Navigation from '../components/Navigation.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';


</script>

<template>

    <Navigation />
    <div class="container">
        <h2 class="naslov">
            List of available tasks on today's to-do list
        </h2>
    </div>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Task no.</th>
      <th scope="col">Task name</th>
      <th scope="col">Handled by</th>
      <th scope="col">Status</th>
      <th scope="col">Take on</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Not done</td>
      <td><button type="button" class="btn btn-primary">Reserve</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Done</td>
      <td><button type="button" class="btn btn-primary">Reserve</button></td>
    </tr>
    
  </tbody>
</table>



</template>
<style>


.naslov{

    text-align: center;
}
</style>



