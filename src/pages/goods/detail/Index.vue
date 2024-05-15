<script setup lang="ts">
import { getGoodsDetail } from '@/api/goods';
import ActionFooter from './components/ActionFooter.vue';
import NavBar from '@/components/NavBar.vue';
import SwiperCom from '@/components/SwiperCom.vue';
import PriceItem from '@/components/PriceItem.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { Goods } from '@/types/goods';

const swiperData = ref<Goods>();

const fetchGoodsDetail = async (params: { id: number }) => {
  const { data } = await getGoodsDetail({ ...params });
  console.log(data);
  swiperData.value = data;
};

onLoad((query) => {
  fetchGoodsDetail({ id: Number(query?.id) });
});
</script>

<template>
  <NavBar title="商品详情" enableBack />
  <view class="detail-content">
    <SwiperCom :data="swiperData?.goodsImgs ?? []" />
    <view class="detail-info">
      <view class="info-price">
        <PriceItem :price="swiperData?.goodsPrice ?? 0" :size="36" />
        <PriceItem
          :price="swiperData?.goodsMarkPrice ?? 0"
          type="grey"
          :size="24"
        />
      </view>
      <view class="info-name">{{ swiperData?.goodsName }}</view>
      <view class="info-desc">{{ swiperData?.goodsDesc }}</view>
    </view>
  </view>
  <ActionFooter />
</template>

<style scoped lang="scss">
.detail-content {
  :deep(.swiper) {
    height: 800rpx;
    border-radius: 0;
    .swiper-item {
      border-radius: 0;
    }
  }

  .detail-info {
    padding: 20rpx;
    background-color: $uni-bg-color;
    .info-price {
      display: flex;
      align-items: center;
      gap: 10rpx;
      font-weight: 600;
    }
    .info-name {
      font-weight: 600;
      margin-top: 20rpx;
    }
    .info-desc {
      color: $uni-text-color-grey;
      margin-top: 20rpx;
    }
  }
}
</style>
