<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light  " style="background-color: rgba(239,207,207,0.87)">
      <router-link to="/" class="navbar-brand">Mind Track Application</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Employee Profile Form</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Employee Details</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
