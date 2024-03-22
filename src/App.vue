<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
onLaunch((options) => {
  // const page = getCurrentPages();

  console.log('应用启动路径：', options?.path);
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>
<style></style>
