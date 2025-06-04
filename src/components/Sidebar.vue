<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<style>
.sidebar {
  width: 220px;
  background: var(--pve-gray-900);
  color: var(--pve-gray-100);
  padding: 16px;
}
.sidebar a {
  color: inherit;
  text-decoration: none;
}
</style>
