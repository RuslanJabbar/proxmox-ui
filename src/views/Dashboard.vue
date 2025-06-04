<script setup>
import { ref, onMounted } from 'vue';
import api from '../api.js';

const nodes = ref([]);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await api.get('/nodes');
    nodes.value = res.data.data || [];
  } catch (e) {
    error.value = 'Failed to load nodes';
  }
});
</script>

<template>
  <div class="dashboard">
    <h1>Cluster Dashboard</h1>
    <p>This is a placeholder for the Proxmox VE dashboard.</p>
    <div v-if="error" class="error">{{ error }}</div>
    <ul>
      <li v-for="node in nodes" :key="node.node">{{ node.node }} - {{ node.status }}</li>
    </ul>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 16px;
}
.error {
  color: var(--pve-red-error);
}
</style>
