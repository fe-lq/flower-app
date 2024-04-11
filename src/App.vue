<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useStore } from './store';
const store = useStore();
onLaunch((options) => {
  // 获取设备小程序平台的导航栏
  // 注意：app和h5平台不支持获取导航栏信息,需手动设置
  uni.getSystemInfo({
    success: (res) => {
      const custom = uni.getMenuButtonBoundingClientRect();
      const height =
        custom.bottom + custom.top - (res?.statusBarHeight as number);
      store.setNavHeight(height);
    }
  });
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
