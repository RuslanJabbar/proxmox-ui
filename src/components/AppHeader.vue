<template>
  <header class="header">
    <div class="logo">Proxmox VE</div>
    <div class="spacer" />
    <div class="user-menu">
      <span>User</span>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  background: var(--pve-blue-primary);
  color: #fff;
}
.spacer { flex: 1; }
</style>
