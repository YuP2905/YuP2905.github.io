<template>
    <div class="about-page">
        <h3 class="about-title">About Me</h3>
        <p class="about-intro">
        Hi, I'm Yang Yupeng, a Ph.D. researcher specializing in the application of Artificial Intelligence in the field of architecture. I am passionate about delving into the mathematical principles underlying modern deep learning techniques and applying these theories to real-world challenges. My aim is to replace the seemingly complex but fundamentally repetitive, inefficient, and uninspired tasks that dominate the architectural design process.
        </p>

        <h4 class="section-title">Professional Interests</h4>
        <ul class="interest-list">
        <li>Exploring the mathematical foundations and practical applications of deep learning and artificial intelligence</li>
        <li>Developing efficient AI solutions tailored to solve problems</li>
        <li>Integrating AI technologies with modern frontend development to create intuitive user interfaces</li>
        </ul>

  
        <h4 class="section-title">Skills and Expertise</h4>
        <p class="skills">
            I am proficient in a variety of tools and technologies, including:
        </p>
        <ul class="skill-list">
            <li>Programming Languages: Python, JavaScript, C#</li>
            <li>AI Frameworks: PyTorch, TensorFlow</li>
            <li>Mathematical Foundations: Advanced Mathematics, Linear Algebra, Probability</li>
            <li>Modern deep learning techniques: Transformers, Diffusion Models etc.</li>
            <li>Web Development: Vue.js, Element-Plus etc.</li>
        </ul>
    
        <h4 class="section-title">Personal Philosophy</h4>
        <p class="philosophy">
            "AI is more than a tool; it’s a way to unlock the world’s secrets and create revolutionary solutions. I believe that 
            <a 
                href="https://arxiv.org/abs/1706.03762" 
                target="_blank" 
                class="highlighted-link">
                <strong>Attention is all you need</strong>
            </a> !"
        </p>
    </div>
</template>
  
<script>
  export default {
    name: "AboutPage",
  };
</script>
  
<style scoped>
/* 页面整体样式 */
.about-page {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* 标题样式 */
.about-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #409eff; /* 蓝色标题 */
    text-align: center;
    margin-bottom: 20px;
}

/* 小标题样式 */
.section-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #67c23a; /* 绿色小标题 */
    margin-top: 20px;
    margin-bottom: 10px;
}

/* 段落样式 */
.about-intro,
.philosophy {
    font-size: 1rem;
    margin-bottom: 15px;
    text-align: justify;
}

/* 列表样式 */
.interest-list,
.skill-list {
    list-style-type: disc;
    margin: 0 0 20px 20px; /* 调整间距 */
}

.interest-list li,
.skill-list li {
    margin-bottom: 10px;
}

/* 链接样式 */
.highlighted-link {
    color: #409eff; /* 蓝色链接 */
    text-decoration: none; /* 去掉默认下划线 */
    font-weight: bold; /* 加粗 */
}

.highlighted-link:hover {
    text-decoration: underline; /* 鼠标悬停显示下划线 */
}
</style>
