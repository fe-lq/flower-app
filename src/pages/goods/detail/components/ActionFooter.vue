<script setup lang="ts"></script>

<template>
  <view class="footer-actions">
    <view class="action-icons">
      <view class="icon">
        <uni-icons type="home" size="20"></uni-icons>
        <text>首页</text>
      </view>
      <view class="icon">
        <uni-icons type="star" size="20"></uni-icons>
        <text>收藏</text>
      </view>
      <view class="icon">
        <uni-icons type="cart" size="20"></uni-icons>
        <text>购物车</text>
      </view>
      <view class="icon">
        <uni-icons type="chat" size="20"></uni-icons>
        <text>客服</text>
      </view>
    </view>
    <view class="action-btn">
      <view class="add-car">
        <button plain>加入购物车</button>
      </view>
      <view class="now-buy">
        <button plain>立即购买</button>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.footer-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: env(safe-area-inset-bottom);
  padding-right: 10rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $uni-bg-color;
  .action-icons {
    display: flex;
    .icon {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 24rpx;
      width: 80rpx;
      color: $uni-text-color-grey;

      :deep(.uni-icons) {
        line-height: normal;
      }
    }
  }
  .action-btn {
    display: flex;

    .add-car {
      background: linear-gradient(to right, #ffd01e, #ff8917);
      border-radius: 45rpx 0 0 45rpx;
      padding: 0 20rpx;
    }
    .now-buy {
      border-radius: 0 45rpx 45rpx 0;
      background: linear-gradient(to right, #ff6034, #ee0a24);
      padding: 0 20rpx;
    }
    button {
      padding: 20rpx;
      border: none;
      color: #fff;
      line-height: normal;
      font-size: 28rpx;
    }
  }
}
</style>
