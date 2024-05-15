<script setup lang="ts">
import avatarUrl from '@/static/images/avatar.jpeg';

const onChooseAvatar = (e: any) => {
  console.log(e.detail.avatarUrl);
};
</script>

<template>
  <button
    class="avatar-wrapper"
    open-type="chooseAvatar"
    @chooseavatar="onChooseAvatar"
  >
    <image class="avatar" :src="avatarUrl"></image>
  </button>
  <input type="nickname" class="weui-input" placeholder="请输入昵称" />
</template>
<style scoped lang="scss"></style>
