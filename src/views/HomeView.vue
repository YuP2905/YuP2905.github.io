<template>
  <el-container class="home-container">
    <!-- 头像和标题 -->
    <section class="header-section">
      <el-avatar
        :src="require('@/assets/logo.jpg')"
        fit="cover"
        shape="circle"
        alt="Profile Picture"
        class="profile-avatar"
      />
      <h1 class="name">Yang Yupeng</h1>
      <!-- 动态打字效果 -->
      <p class="description">
        <span v-for="(char, index) in typedText" :key="index">{{ char }}</span>
        <span class="cursor">|</span>
      </p>
    </section>

    <!-- 技能部分 -->
    <section class="skills-section">
      <h2 class="section-title">Skills</h2>
      <el-row justify="center" class="skills">
        <el-tag
          v-for="(skill, index) in skills"
          :key="index"
          effect="dark"
          class="skill-tag"
          :style="{ backgroundColor: skill.color, color: '#fff', border: 'none' }"
        >
          {{ skill.name }}
        </el-tag>
      </el-row>
    </section>

    <!-- 按钮部分 -->
    <section class="footer-section">
      <el-row justify="center" gutter="20" class="button-row">
        <!-- GitHub 按钮 -->
        <el-col :xl="8" :lg="8" :sm="8" :md="8" :xs="24" class="button-wrapper">
          <el-button type="primary" size="large" round @click="visitGitHub" class="github-button hover-effect">
            <img src="@/assets/github-mark-white.svg" alt="GitHub Icon" class="icon" />
            My GitHub
          </el-button>
        </el-col>

        <!-- 联系我按钮 -->
        <el-col :xl="8" :lg="8" :sm="8" :md="8" :xs="24" class="button-wrapper">
          <el-popover
            placement="bottom"
            width="250"
            trigger="click"
            v-model:visible="isContactVisible"
          >
            <div class="contact-info">
              <p><strong>Email:</strong> y290575685@gmail.com</p>
            </div>
            <template #reference>
              <el-button type="success" size="large" round class="contact-button hover-effect">
                <el-icon :size="20"><ChatSquare /></el-icon>
                Contact Me
              </el-button>
            </template>
          </el-popover>
        </el-col>

        <!-- Buy Me a Coffee 按钮 -->
        <el-col :xl="8" :lg="8" :sm="8" :md="8" :xs="24" class="button-wrapper">
          <el-button type="info" size="large" round @click="isDialogVisible = true" class="coffee-button hover-effect">
            <el-icon :size="20"><Coffee /></el-icon>
            Buy me a coffee
          </el-button>
          <el-dialog
            v-model="isDialogVisible"
            width="500px"
            align-center
            draggable
            overflow
          >
            <template #header>
              <h2 class="dialog-header-title">☕ Buy Me a Coffee</h2>
            </template>
            <div class="dialog-content">
              <h3 class="dialog-title">Thanks for considering to buy me a coffee!</h3>

              <!-- Alipay Section -->
              <div class="dialog-section">
                <div class="alipay-container">
                  <span class="dialog-support-title">Support Me via Alipay</span>
                  <img src="@/assets/Alipay.png" alt="Alipay QR Code" class="dialog-image" />
                </div>
                <p class="dialog-note">Scan the QR Code with Alipay</p>
              </div>

              <!-- PayPal Section -->
              <div class="dialog-section">
                <a
                  href="https://www.paypal.com/paypalme/Yupeng2905"
                  target="_blank"
                  class="dialog-link"
                >
                  Support Me via PayPal
                </a>
                <p class="dialog-note">Click the link to donate via PayPal</p>
              </div>
            </div>
          </el-dialog>

        </el-col>
      </el-row>
    </section>
  </el-container>
</template>

<script>
import { ref, onMounted } from "vue";
import { ChatSquare, Coffee } from "@element-plus/icons-vue";

export default {
  name: "HomePage",
  setup() {
    // 动态打字内容
    const fullText = "Developer | Deep Learning Enthusiast | Computational Designer";
    const typedText = ref("");

    // 技能列表
    const skills = ref([
      { name: "Deep Learning", color: "#1ABC9C" }, // 清新的绿色
      { name: "PyTorch", color: "#E74C3C" },       // 深红色
      { name: "TensorFlow", color: "#3498DB" },    // 柔和的蓝色
      { name: "Python", color: "#F39C12" },        // 温暖的橙黄色
      { name: "JavaScript", color: "#F1C40F" },    // 明亮的金黄色
      { name: "C#", color: "#95A5A6" },            // 柔和的灰色
      { name: "Rhino", color: "#9B59B6" },         // 雅致的紫色
      { name: "Grasshopper", color: "#16A085" },   // 深青色
      { name: "Revit", color: "#2980B9" },         // 深蓝色
    ]);



    // 联系方式 Popover 的可见性
    const isContactVisible = ref(false);

    // 要饭方式 Dialog 的可见性
    const isDialogVisible = ref(false);

    // 访问 GitHub 方法
    const visitGitHub = () => {
      window.open("https://github.com/YuP2905", "_blank");
    };

    // 动态打字效果
    const typeEffect = () => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          typedText.value += fullText[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    };

    // 组件挂载时开始打字效果
    onMounted(() => {
      typeEffect();
    });

    return {
      typedText,
      skills,
      isContactVisible,
      isDialogVisible,
      visitGitHub,
      ChatSquare,
      Coffee,
    };
  },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 主容器：整体页面的布局设置，居中对齐 */
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: inherit;
}

/* 标题部分：用于显示头像、名字和描述 */
.header-section {
  text-align: center;
}

/* 头像样式 */
.profile-avatar {
  width: 150px !important;
  height: 150px !important;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-avatar:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 15px 40px rgba(64, 158, 255, 0.5);
}

/* 名字样式 */
.name {
  font-size: 3.5rem; /* 增加字体大小 */
  font-weight: 700; /* 加粗字体 */
  text-align: center; /* 居中对齐 */
  margin-top: 5px;  /* 顶部间距 */
  margin-bottom: 10px; /* 底部间距 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 增加轻微的文字阴影 */
  position: relative; /* 为装饰定位 */
}

/* 名字下方的装饰线 */
.name::after {
  content: ""; /* 生成空内容 */
  display: block; /* 转为块级元素 */
  width: 100px; /* 线条宽度 */
  height: 4px; /* 线条高度 */
  background: linear-gradient(to right, #67c23a, #409eff); /* 渐变色装饰线 */
  margin: 8px auto 0; /* 居中和间距调整 */
  border-radius: 2px; /* 圆角边缘 */
}

/* 描述部分样式 */
.description {
  font-size: 1.2rem;
  color: var(--text-color);
}

/* 光标闪烁动画 */
.cursor {
  display: inline-block;
  width: 2px;
  height: 1.2rem;
  background-color: var(--text-color);
  margin-left: 2px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* 技能部分 */
.skills-section {
  margin-bottom: 10px;
  text-align: center;
}

/* 技能标题样式 */
.section-title {
  font-size: 1.8rem; /* 减小字体大小 */
  font-weight: 600; /* 中等加粗 */
  text-align: center; /* 居中对齐 */
  margin-bottom: 10px; /* 减少与技能标签之间的间距 */
  position: relative; /* 为装饰线定位 */
}

/* 在标题下方添加细线装饰 */
.section-title::after {
  content: ""; /* 生成空内容 */
  display: block; /* 转为块级元素 */
  width: 80px; /* 线条宽度 */
  height: 3px; /* 线条高度 */
  background: linear-gradient(to right, #67c23a, #409eff); /* 渐变色线条 */
  margin: 8px auto 0; /* 上下间距自动调整 */
  border-radius: 2px; /* 圆角边缘 */
}


.skill-tag {
  margin: 5px;
  font-size: 1rem;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-tag:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* 按钮部分：GitHub 和联系按钮的容器样式 */
.footer-section {
  margin-top: 30px;
  text-align: center; /* 确保内容居中 */
}

.button-row {
  width: 100%;
}

.button-wrapper {
  margin-top: 5px;
}


:deep(.el-button>span) {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

/* 图标样式 */
.icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  filter: brightness(0) invert(1);
}

/* 按钮悬停效果 */
.hover-effect {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-effect:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* 对话框标题样式 */
.dialog-header-title {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}

/* 内容容器 */
.dialog-content {
  text-align: center;
  padding: 20px 10px;
}

/* 感谢标题样式 */
.dialog-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* 单个区块的样式 */
.dialog-section {
  margin-bottom: 30px;
}

.alipay-container {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-self: center;
  gap: 20px; /* 子元素间距 */
}

/* 支持标题样式 */
.dialog-support-title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

/* 二维码图片样式 */
.dialog-image {
  width: 120px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* 说明文字样式 */
.dialog-note {
  font-size: 14px;
  margin-top: 5px;
}

/* PayPal 链接样式 */
.dialog-link {
  font-size: 16px;
  font-weight: bold;
  color: #0070ba;
  text-decoration: none;
}

.dialog-link:hover {
  text-decoration: underline;
}

.dialog-note:last-of-type {
  margin-bottom: 0;
}
</style>
