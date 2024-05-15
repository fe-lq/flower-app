<script setup lang="ts">
import Skeleton from './Skeleton.vue';
import { onLoad, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app';
import {
  getBanners,
  getCategories,
  getAdvertisement,
  getListGoods
} from '@/api/home';
import { reactive, ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import SwiperCom from '@/components/SwiperCom.vue';
import GoodsList from '@/components/GoodsList.vue';
import NavItem from '@/components/NavItem.vue';
import { Banner, Category, Advertisement } from '@/types/home';
import { Goods } from '@/types/goods';

interface HomeData {
  bannerList: Banner[];
  categories: Category[];
  advertisement: Advertisement[];
  goodsList: Goods[];
}
// const active = ref(0);
const data = reactive<HomeData>({
  bannerList: [],
  categories: [],
  advertisement: [],
  goodsList: []
});

const loading = ref(true);
const fetchBanners = async () => {
  try {
    loading.value = true;
    const res = await Promise.all([
      getBanners(),
      getCategories(),
      getAdvertisement(),
      getListGoods()
    ]);
    data.bannerList = res[0].data;
    data.categories = res[1].data;
    data.advertisement = res[2].data;
    data.goodsList = res[3].data;
  } catch (error) {
    uni.showToast({ title: '获取数据失败', icon: 'error' });
  } finally {
    loading.value = false;
  }
};
onLoad(() => {
  fetchBanners();
});

// 下拉刷新事件
// onPullDownRefresh(() => {
//   console.log('refresh');
//   setTimeout(function () {
//     uni.stopPullDownRefresh();
//   }, 1000);
// });

// 上拉加载事件
// onReachBottom(() => {})

// 转发事件
onShareAppMessage(() => ({}));

// 分享到朋友圈
onShareTimeline(() => ({}));
</script>

<template>
  <NavBar title="花事花艺" />
  <Skeleton v-if="loading" />
  <view v-else class="container">
    <view class="home-bg" />
    <SwiperCom :data="data.bannerList" imgField="imageUrl" />

    <view class="category-card">
      <view v-for="item in data.categories" :key="item.id" class="nav-item">
        <NavItem :imgUrl="item.typeImg" :title="item.typeName" navUrl="" />
      </view>
    </view>

    <view class="ad-card">
      <view class="ad-left">
        <navigator>
          <image :src="data.advertisement[0]?.imageUrl" mode="widthFix" />
        </navigator>
      </view>
      <view class="ad-right">
        <navigator>
          <image :src="data.advertisement[1]?.imageUrl" mode="widthFix" />
        </navigator>
        <navigator>
          <image :src="data.advertisement[2]?.imageUrl" mode="widthFix" />
        </navigator>
      </view>
    </view>

    <GoodsList :data="data.goodsList" title="猜你喜欢" />
  </view>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}

.home-bg {
  height: 200rpx;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(#f3514f 70%, $uni-bg-color-grey);
}

.category-card {
  border-radius: 10rpx;
  background-color: $uni-bg-color;
  margin: 20rpx 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10rpx 0;

  .nav-item {
    min-width: 20%;
    max-width: 20%;
    &:nth-of-type(n + 6) {
      margin-top: 20rpx;
    }
  }
}

.ad-card {
  border-radius: 10rpx;
  background: $uni-bg-color;
  padding: 10rpx;
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  gap: 10rpx;
  .ad-left {
    width: 50%;
  }

  .ad-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10rpx;
  }
  image {
    width: 100%;
  }
}
</style>
