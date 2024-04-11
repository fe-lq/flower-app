<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import NavItem from '@/components/NavItem.vue';
import { onLoad } from '@dcloudio/uni-app';
import { computed, ref } from 'vue';
import { CategoryData } from '@/types/category';
import { getCategoryList } from '@/api/category';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
/**
 * 拓展，滑动数据可自动加载下一个菜单内容，且左侧自动跳转
 */
const data = ref<CategoryData[]>([]);
const activeId = ref<number>();

const store = useStore();
const { navBarHeight } = storeToRefs(store);

const rightList = computed(() =>
  data.value.find((item) => item.id === activeId.value)
);
const fetchCategoryList = async () => {
  try {
    const res = await getCategoryList();
    data.value = res.data;
    activeId.value = res.data[0].id;
  } catch (error) {
    uni.showToast({ title: '获取数据失败', icon: 'error' });
  }
};
onLoad(() => {
  fetchCategoryList();
});

const handleClick = (id: number) => {
  activeId.value = id;
};
</script>

<template>
  <NavBar> 花品分类 </NavBar>
  <view
    class="category-container"
    :style="{ height: `calc(100vh - ${navBarHeight}px)` }"
  >
    <scroll-view scroll-y class="category-left">
      <view
        v-for="item in data"
        :id="item.id.toString()"
        :key="item.id"
        :class="['side-item', activeId === item.id ? 'active-item' : '']"
        @click="() => handleClick(item.id)"
        >{{ item.name }}</view
      >
    </scroll-view>
    <scroll-view scroll-y class="category-right">
      <view class="nav-card">
        <view
          v-for="item in rightList?.children"
          :key="item.id"
          class="nav-item"
        >
          <NavItem :img-url="item.imageUrl" :title="item.name" />
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
.category-container {
  display: flex;
  background-color: $uni-bg-color !important;
}

.category-left {
  min-width: 180rpx;
  max-width: min-content;

  background-color: $uni-bg-color-grey;
}
.side-item {
  padding: 20rpx 0;
  text-align: center;
  font-size: 26rpx;

  &.active-item {
    color: $uni-color-error;
    position: relative;
    background-color: $uni-bg-color !important;
    &::before {
      content: '';
      width: 6rpx;
      height: 50rpx;
      background-color: $uni-color-error;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.category-right {
  padding: 20rpx 0;
}
.nav-card {
  display: flex;
  flex-wrap: wrap;

  .nav-item {
    width: 33.33%;
    &:deep(.nav-img) {
      width: 90rpx;
      height: 90rpx;
    }
    &:deep(.nav-text) {
      font-size: 26rpx;
    }
    &:nth-of-type(n + 4) {
      margin-top: 20rpx;
    }
  }
}
</style>
