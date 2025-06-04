<template>
  <div id="app" class="app-container">
    <AppHeader />
    <div class="layout">
      <Sidebar />
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<style>
.app-container {
  font-family: Inter, Helvetica, Arial, sans-serif;
  color: var(--pve-gray-900);
}
.layout {
  display: flex;
  height: calc(100vh - 60px);
}
.content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background: var(--pve-gray-100);
}
</style>
