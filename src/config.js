const API_BASE = localStorage.getItem('pve_api') || '/api2/json';

export function setApiBase(url) {
  localStorage.setItem('pve_api', url);
}

export function apiBase() {
  return API_BASE;
}
