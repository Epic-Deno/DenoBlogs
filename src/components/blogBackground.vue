<!--
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-16 15:34:26
 * @LastEditors: Pony
 * @LastEditTime: 2020-08-20 12:13:03
-->
<template>
  <div class="blog-bg" >
    <div class="container demo-2">
      <div class="content">
        <div id="large-header" class="large-header">
          <canvas id="demo-canvas"></canvas>
          <!-- <h1 class="main-title">
            <span>逍遥子</span>
          </h1> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cavensBg from "@utils/background.js";
export default {
  name: "blogBackground",
  data() {
    return {};
  },
  mounted() {
    cavensBg();
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url("../assets/css/component.css");
@import url("../assets/css/demo.css");
@import url("../assets/css/normalize.css");
.blog-bg {
  position: fixed;
  height: 0;
}
</style>