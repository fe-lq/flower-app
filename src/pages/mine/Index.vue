<script setup lang="ts">
import { UserLogin } from '@/api/user';
const defaultPanels = [
  {
    url: '/modules/orderPayModule/pages/order/list/list',
    title: '商品订单',
    icon: 'icon-dingdan'
  },
  {
    url: '/modules/orderPayModule/pages/order/list/list',
    title: '礼品卡订单',
    icon: 'icon-lipinka'
  },
  {
    url: '/modules/orderPayModule/pages/order/list/list',
    title: '退款/售后',
    icon: 'icon-tuikuan'
  }
];

const handleLogin = () => {
  uni.login({
    provider: 'weixin', //使用微信登录
    success: async (loginRes) => {
      await UserLogin.request({
        code: loginRes.code,
        userPhone: ''
      });

      console.log(loginRes, '成功');
    },
    fail(err) {
      console.log(err, '失败');
    }
  });
};

const checkLogin = () => {
  uni.checkSession({
    success: async () => {
      console.log('登录状态有效');
    },
    fail: async () => {
      console.log('登录状态已过期');
    }
  });
};
</script>

<template>
  <view class="mine-bg">
    <image mode="widthFix" class="mine-bg-img" src="@/static/banner.jpg" />
  </view>
  <view class="container">
    <!-- 用户信息展示 -->
    <view class="mine-top">
      <view class="user-card">
        <image src="@/static/avatar.png" />
        <view class="user-info">
          <view>未登录</view>
          <view class="info-tip" @click="handleLogin">点击授权登录</view>
          <view @click="checkLogin">校验登录</view>
        </view>
      </view>
    </view>
    <!--  订单管理 -->
    <view class="mine-order">
      <view class="order-title">
        <view>我的订单</view>
        <view class="order-more">
          查看更多
          <uni-icons type="right" color="#999"></uni-icons>
        </view>
      </view>
      <view class="order-content">
        <navigator
          v-for="(item, index) in defaultPanels"
          :key="index"
          :url="item.url"
          class="order-item"
        >
          <view :class="['iconfont', item.icon]" />
          <text>{{ item.title }}</text>
        </navigator>
      </view>
    </view>

    <!-- 服务提示信息 -->
    <view class="other-info">
      <view class="other-info-title">
        <text class="title">关于售前售后服务</text>
      </view>
      <view class="other-info-item">
        <view class="iconfont icon-kefufenxiermaikefu"></view>
        <text>可与小程序客服实时聊天或电话咨询</text>
      </view>
      <view class="other-info-item">
        <view class="iconfont icon-shijian"></view>
        <text>小程序客服工作时间为: 8:30 ~ 20:30</text>
      </view>
      <view class="other-info-item">
        <view class="iconfont icon-dizhiguanli"></view>
        <text>鲜花制作完毕情况下暂不支持退款</text>
      </view>
      <view class="other-info-item">
        <view class="iconfont icon-zhangben"></view>
        <text>鲜花可以提前7-15天预订重大节假日不支持定时配送</text>
      </view>
    </view>

    <!-- 技术支持 -->
    <view class="support">安庆大学计算机服务部技术支持</view>
  </view>
</template>

<style lang="scss" scoped>
@import '@/scss/public.scss';
.container {
  position: relative;
  top: -80rpx;
  gap: 20rpx;
}
.mine-bg-img {
  width: 100%;
}

.mine-top {
  display: flex;
  @include section;
  .user-card {
    display: flex;
    align-items: center;
    gap: 20rpx;
    image {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
    }

    .user-info {
      color: $uni-text-color-grey;
      .info-tip {
        font-size: 24rpx;
      }
    }
  }
}

.mine-order {
  @include section;

  .order-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30rpx;
    .order-more {
      display: flex;
      align-items: center;
      font-size: 24rpx;
      color: $uni-text-color-grey;
    }
  }

  .order-content {
    display: flex;
    justify-content: space-between;
    .order-item {
      .iconfont {
        font-size: 60rpx;
        text-align: center;
      }
      text {
        font-size: 24rpx;
      }
    }
  }
}

.other-info {
  @include section;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  .other-info-item {
    display: flex;
    align-items: center;
    font-size: 25rpx;
    gap: 20rpx;
    line-height: 50rpx;
    color: $uni-text-color-grey;
    .iconfont {
      color: $uni-color-warning;
    }
  }
}

.support {
  text-align: center;
  margin-top: 50rpx;
  color: $uni-text-color-grey;
  font-size: 24rpx;
}
</style>
