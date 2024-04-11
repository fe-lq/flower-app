import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({ navBarHeight: 0 }),
  actions: {
    setNavHeight(value: number) {
      this.navBarHeight = value;
    }
  }
});
