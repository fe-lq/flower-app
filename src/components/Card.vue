<script setup lang="ts"></script>

<template>
  <view class="card">
    <slot />
  </view>
</template>

<style scoped lang="scss">
.card {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 20px;
  background-color: #fff;
  width: 100%;
}
</style>
