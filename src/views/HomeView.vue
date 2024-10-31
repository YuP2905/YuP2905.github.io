<template>
<div class="home-container">
    <!-- 主页标题 -->
    <h1 class="home-title">Welcome to my AI world</h1>

    <!-- 标语 -->
    <p class="home-tagline">Attention is all you need!</p>

    <!-- 说明文字 -->
    <p class="home-description">
        This website is dedicated to providing the most advanced AI solutions to make complex problems simple.
    </p>
</div>
  </template>
    
  <script>
  export default {
      name: "HomeViewer",
  };
  </script>
  
  <style scoped>
  /* 整体容器样式 */
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh; /* 使页面全屏居中 */
  }
  
  /* 标题样式 */
  .home-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  /* 标语样式 */
  .home-tagline {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #409eff; /* 使用 Element Plus 的主题颜色，保持风格一致 */
  }
  
  /* 说明文字样式 */
  .home-description {
    font-size: 18px;
    line-height: 1.6;
    max-width: 600px;
    margin-bottom: 20px;
  }
  
  /* AI 说明文字样式 */
  .home-ai-description {
    font-size: 18px;
    line-height: 1.8;
    max-width: 700px;
  }
  
  </style>
    