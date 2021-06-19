<!--
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-16 15:13:39
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-04-12 18:20:09
-->
<template>
  <div class="home viewBox">
    <div class="main_view" ref="container">
      <div class="head-text">
        <h1 class="title">张朕</h1>
        <p class="description">披荆斩棘｜奋力前行</p>
        <img alt="blog" class="logo" src="../assets/img/logo.svg" />
      </div>
      <i class="iconfont down" @click="ScrollTop">&#xe739;</i>
    </div>
    <div class="user-base-content">
      <div
        class="list-item"
        v-for="(item,index) in 20"
        :key="index"
        :class="index==19&&'last-row '"
      >
        <div class="item-title">
          <a>个人博客接入 github 登陆功能详细过程</a>
        </div>
        <div class="item-date">
          <i class="iconfont icon-date">&#xe662;</i>
          <span class="text">2020-08-16</span>
        </div>
        <div class="item-abstract">个人博客接入 github 登陆功能实现详细流程及其中遇到的问题总结</div>
        <div class="item-info">
          <div class="item-tags">
            <i class="iconfont">&#xe636;</i>
            <span class="text">vue</span>
          </div>
          <div class="item-tags">
            <i class="iconfont">&#xe636;</i>
            <span class="text">javascript</span>
          </div>
          <div class="item-readAndComment">
            <i class="iconfont">&#xe613;</i>
            <span class="text">10</span>
            <i class="iconfont">&#xe809;</i>
            <span class="text">230</span>
          </div>
        </div>
      </div>
      <div class="footer-list">
        所有者：
        <a>张朕</a>
        <span class="line">|</span> 上线于：
        <a>2020-08-17</a>
      </div>
    </div>
    <div class="back-top" :style="{'width':backTop}" @click="backView" title="回到顶部"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      backTop:0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("scroll", this.handleScroll);
    
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let mainHeight = document.getElementsByClassName('viewBox')[0].offsetHeight
      this.backTop = `${(scrollTop/mainHeight)*100}%`
    },
    ScrollTop() {
      document.documentElement.scrollTop =
        document.documentElement.clientHeight;
    },
    backView() {
       document.documentElement.scrollTop = 0
    },
  },
};
</script>
<style lang="less" scoped>
.main_view {
  width: 100%;
  height: 100vh;
  position: relative;
  .head-text {
    // background: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      margin-bottom: 10px;
      font-size: 30px;
      color: #fff;
      text-shadow: -2px 4px 6px #1e1e1e;
    }
    .description {
      margin-bottom: 10px;
      font-size: 18px;
      color: #fff;
      text-shadow: -2px 4px 6px #1e1e1e;
    }
    .logo {
      width: 0.4rem;
      opacity: 0.8;
    }
  }
  .down {
    position: absolute;
    bottom: 40px;
    font-size: 26px;
  }
  .down:hover {
    color: aquamarine;
    transition: all 800ms ease-in;
  }
}
.user-base-content {
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  padding: 10px 15px;
  background: hsla(0, 0%, 100%, 0.5);
  .list-item {
    margin: 0 auto;
    padding: 20px 0;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    .item-title {
      margin-bottom: 10px;
      line-height: 3;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      a {
        color: rgba(79, 142, 84, 0.8);
      }
      a:hover {
        text-decoration: underline;
      }
    }
    .item-date {
      font-size: 13px;
      color: #333;
      line-height: 1;
      .icon-date {
        color: #333;
        margin-right: 10px;
      }
    }
    .item-abstract {
      margin: 10px 0;
      font-size: 13px;
      line-height: 1.8;
      color: #204040;
      cursor: pointer;
    }
    .item-abstract:hover {
      text-decoration: underline;
    }
    .item-info {
      width: 100%;
      height: 25px;
      .item-tags {
        font-size: 13px;
        float: left;
        display: flex;
        align-items: center;
        .iconfont {
          color: #333;
        }
        .text {
          color: #c3b74e;
          text-align: center;
          margin-left: 4px;
        }
      }
      .item-tags:not(:first-child) {
        margin-left: 8px;
      }
      .item-readAndComment {
        margin-right: 4px;
        color: #999;
        float: right;
        font-size: 13px;
        .iconfont {
          margin: 0 4px 0 8px;
        }
      }
    }
  }
}
.last-row {
  border-bottom: none !important;
}
.footer-list {
  margin: 0;
  padding-top: 20px;
  height: 60px;
  text-align: center;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
  color: #000;
  font-size: 12px;
  a {
    color: #236666;
  }
  a:hover {
    text-decoration: underline;
  }
  .line {
    color: #000;
  }
}
.back-top {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  border-bottom: 6px solid #333;
  opacity: 0.8;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABeCAYAAADFamovAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBODgzMEI2NUI5NjExRTlCMDBBRjA5RDg0NEZGRkIwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBODgzMEI3NUI5NjExRTlCMDBBRjA5RDg0NEZGRkIwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEE4ODMwQjQ1Qjk2MTFFOUIwMEFGMDlEODQ0RkZGQjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEE4ODMwQjU1Qjk2MTFFOUIwMEFGMDlEODQ0RkZGQjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4O66GvAAALPUlEQVR42uyd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)
    repeat-x;
  background-size: 100px 40px;
  background-clip: content-box;
  cursor: pointer;
  z-index: 10;
}
</style>
