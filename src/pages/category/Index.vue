<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import NavItem from '@/components/NavItem.vue';
import { onLoad } from '@dcloudio/uni-app';
import { computed, ref } from 'vue';
import { CategoryList, Category } from '@/api/category';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
/**
 * 拓展，滑动数据可自动加载下一个菜单内容，且左侧自动跳转
 */
const data = ref<Category[]>([]);
const activeId = ref<number>();

const store = useStore();
const { navBarHeight } = storeToRefs(store);

const rightList = computed(() =>
  data.value.find((item) => item.id === activeId.value)
);

const fetchCategoryList = async () => {
  try {
    const res = await CategoryList.request();
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
  <NavBar title="花品分类" />
  <view
    class="category-container"
    :style="{ height: `calc(100vh - ${navBarHeight}px)` }"
  >
    <scroll-view scrollY class="category-left">
      <view
        v-for="item in data"
        :id="item.id.toString()"
        :key="item.id"
        :class="['side-item', activeId === item.id ? 'active-item' : '']"
        @click="() => handleClick(item.id)"
        >{{ item.typeName }}</view
      >
    </scroll-view>
    <scroll-view scrollY class="category-right">
      <view class="nav-card">
        <NavItem
          v-for="item in rightList?.children"
          :key="item.id"
          :imgUrl="item.typeImg"
          :title="item.typeName"
          class="nav-item"
          :navUrl="`/pages/goods/list/Index?id=${item.id}`"
        />
      </view>
      <view v-show="!rightList?.children?.length" class="empty">
        暂无分类数据
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

  .empty {
    text-align: center;
    color: $uni-text-color-grey;
  }
}
.nav-card {
  display: flex;
  flex-wrap: wrap;

  .nav-item {
    width: 33.33%;
    :deep(.nav-text) {
      font-size: 26rpx;
    }
    &:nth-of-type(n + 4) {
      margin-top: 20rpx;
    }
  }
}
</style>
