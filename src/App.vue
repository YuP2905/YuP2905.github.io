<template>
  <!-- 导航栏 -->
  <nav class="navbar">
    <!-- 左侧图标 -->
    <div class="nav-left">
      <!-- 图标包裹在超链接中，跳转到 GitHub 主页 -->
      <a href="https://github.com/YuP2905" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/logo.jpg" alt="Logo" class="nav-logo" />
      </a>
      <router-link class="nav-link" to="/" exact>Home</router-link>
      <router-link class="nav-link" to="/others" exact>About Me</router-link>
      <router-link class="nav-link" to="/floorplan" exact>FloorPlan</router-link>

    </div>
    <!-- 右侧黑暗模式开关 -->
    <el-switch
      v-model="isDark"
      size="large"
      :active-action-icon="MoonNight"
      :inactive-action-icon="Sunrise"
      @change="toggleDarkMode"
    ></el-switch>
  </nav>

  <!-- 添加 Transition 动画效果 -->
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>

  <el-backtop :right="40" :bottom="40" />
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { Sunrise, MoonNight } from "@element-plus/icons-vue";

export default {
  name: "App",
  setup() {
    const isDark = ref(localStorage.getItem("theme") === "dark");

    function toggleDarkMode(value) {
      if (value) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    watch(isDark, (newVal) => {
      toggleDarkMode(newVal);
      localStorage.setItem("theme", newVal ? "dark" : "light");
    });

    onMounted(() => {
      toggleDarkMode(isDark.value);
    });

    return {
      isDark,
      toggleDarkMode,
      Sunrise,
      MoonNight,
    };
  },
};
</script>

<style>
/* 导航栏样式 */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    background-color: inherit;
    overflow-x: auto; /* 允许横向滚动 */
    white-space: nowrap; /* 防止导航项换行 */
}

/* 隐藏滚动条但保持功能 */
.navbar::-webkit-scrollbar {
    display: none;
}

/* 左侧内容的样式 */
.nav-left {
    display: flex;
    align-items: center;
}

/* 图标样式 */
.nav-logo {
    height: 40px; /* 根据需要调整图标大小 */
    margin-right: 15px; /* 图标与链接之间的间距 */
    border-radius: 20px;
}

/* 导航链接样式 */
.nav-link {
    margin-right: 20px;
    color: inherit; /* 保持文字颜色与父级一致 */
    text-decoration: none;
    font-weight: normal;
    padding: 10px 10px; /* 增加点击区域 */
}

/* 高亮激活的路由链接，符合 Element Plus 风格 */
.router-link-exact-active {
    color: #409eff; /* 使用 Element Plus 的主题色（默认为 #409eff） */
    background-color: rgba(64, 158, 255, 0.1); /* 激活状态下有轻微的背景高亮，符合 Element Plus 风格 */
    border-radius: 10px; /* 圆角边框，符合 Element Plus 的样式 */
}

/* 黑暗模式开关的位置 */
.el-switch {
    padding: 0%;
    margin-left: auto; /* 将开关放到最右侧 */
}

/* 动画样式 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease; /* 动画时长与效果 */
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0; /* 进入或离开时的初始透明度 */
}
</style>
