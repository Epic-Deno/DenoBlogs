<!--
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-16 15:13:39
 * @LastEditors: Pony
 * @LastEditTime: 2020-10-18 17:45:46
-->
<template>
  <div id="app">
    <BlogBackground></BlogBackground>
    <transition name="fadee">
      <router-view />
    </transition>
    <navBar v-if="isNav" />
    <div class="music-box">
      <iframe
      v-show="isPlayer"
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        width="200"
        height="52"
        src="//music.163.com/outchain/player?type=2&id=411214148&auto=1&height=32"
      ></iframe>
      <div class="bars" @click="closePlayers">
        <img src="./assets/img/open.png" alt="" />
      </div>
      <!-- <img src="" alt="" /> -->
    </div>
  </div>
</template>
<script>
import BlogBackground from "@comp/blogBackground.vue";
import navBar from "@comp/navRight.vue";
export default {
  components: {
    BlogBackground,
    navBar,
  },
  data() {
    return {
      isPlayer:false,
      isNav: true,
    };
  },
  mounted() {
    window.onresize = () => {
      let widowWidth = document.getElementsByClassName("viewBox")[0]
        .offsetWidth;
      if (widowWidth < 1057) {
        this.isNav = false;
      } else {
        this.isNav = true;
      }
    };
  },
  methods: {
    closePlayers() {
      this.isPlayer = !this.isPlayer;
    },
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.fadee-enter {
  // opacity: 0;
  transform: translate(0, 100%);
}
.fadee-enter-active {
  transform: translate(0, 100%);
  transition: all 1s ease-in;
}
.fadee-leave {
  // opacity: 1;
  transform: translate(0, -100%);
}
.fadee-leave-active {
  transition: all 1s ease-out;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
@font-face {
  font-family: "iconfont"; /* project id 1845310 */
  src: url("//at.alicdn.com/t/font_1845310_o4yhc365ncc.eot");
  src: url("//at.alicdn.com/t/font_1845310_o4yhc365ncc.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1845310_o4yhc365ncc.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1845310_o4yhc365ncc.woff") format("woff"),
    url("//at.alicdn.com/t/font_1845310_o4yhc365ncc.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1845310_o4yhc365ncc.svg#iconfont") format("svg");
}
.viewBox {
  position: relative;
  flex: 1;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
}
.music-box {
  position: fixed;
  top: 10px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  iframe {
    #player {
      margin: 0!important;
    }
  }
  .bars {
    width: 40px;
    height: 100%;
    background: #fff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    img {
      width: 40px;
      height: 30px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
}
</style>
