<!--
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-16 16:42:26
 * @LastEditors: Pony
 * @LastEditTime: 2020-08-16 22:54:32
-->
<template>
  <div class="nav-bar" :class="[isShowBar? 'visiable_bar' : 'hideen_bar ']">
    <div class="nav-container">
      <img src="../assets/img/logo.svg" alt="logo" class="nav-logo" />
      <div>
        <a
          class="nav-item"
          v-for="(item,index) in navList"
          :key="index"
          :class="activeNav == index&&'nav-active'"
          @click="changeRoute(item.path,index)"
        >
          <i class="iconfont nav-icon">{{item.icon}}</i>
          <span class="item-title">{{item.name}}</span>
        </a>
      </div>
      <div class="nav-menu" @click="isShowBar=!isShowBar">
        <img src="../assets/img/brids.png" alt="收起来" class="brind-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isShowBar: true,
      navList: [
        {
          name: "首页",
          path: "/",
          icon: "\ue603",
        },
        {
          name: "归档",
          path: "/Document",
          icon: "\ue625",
        },
        {
          name: "关于",
          path: "/About",
          icon: "\ue658",
        },
        {
          name: "链接",
          path: "/Links",
          icon: "\ue607",
        },
      ],
    };
  },
  computed: {
    ...mapState(["activeNav"]),
  },
  methods: {
    changeRoute(path, index) {
      this.$store.commit("CHANGE_NAV", index);
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  width: 80px;
  height: 100%;
  background: hsla(0, 0%, 94.1%, 0.6);
  position: fixed;
  top: 0;
  right: 0;

  .nav-logo {
    width: 45px;
    margin: 0 auto 40px;
    cursor: pointer;
  }
  .nav-item {
    width: 60px;
    color: #172d3e;
    display: inline-block;
    margin-bottom: 20px;
    padding: 8px;
    text-align: center;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    cursor: pointer;
    user-select: none;
    .item-title {
      width: 100%;
      font-size: 18px;
      display: inline-block;
      margin-top: 4px;
    }
    .nav-icon {
      font-size: 24px;
    }
  }
  .nav-item:hover .item-title {
    text-decoration: underline;
  }
  .nav-active {
    color: #4f8e54;
    font-weight: 700;
  }
  .nav-container {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 40px 0;
    box-sizing: border-box;
  }
  .nav-menu {
    cursor: pointer;
    position: absolute;
    top: 6px;
    left: -60px;
    width: 60px;
    height: 60px;
    border-bottom: 1px solid #000;
    .brind-icon {
      margin-top: 16px;
      width: 50px;
    }
  }
}
.visiable_bar {
  right: 0;
  transition: all 500ms ease-in;
}
.hideen_bar {
  right: -80px;
  transition: all 500ms ease-out;
}
</style>