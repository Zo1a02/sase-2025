<script setup lang="ts">

import Navigation from '../components/Navigation.vue';
import { useLogout } from '@/hooks/logout.hook';

import { ref } from 'vue';

const logout = useLogout()

</script>


<template>
    <Navigation />
    <div class="input-group mb-3 search">
        <textarea name="sarma" id=""></textarea>
    </div>
    
</template>

<style>

textarea{
    width: 399px;
}


</style>