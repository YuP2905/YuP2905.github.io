<template>
<div class="describe-container">
    <h1>Ongoing: Floor Plan Generation Project</h1>
    <p class="description">
    This project leverages <strong>DIT Transform</strong> to generate precise building vector diagrams. 
    The AI model is currently in the training phase, focusing on creating efficient and accurate architectural designs.
    </p>
    <p class="description">
    Once the model is trained, it will enable automated floor plan generation, offering scalable solutions for architectural design and planning.
    </p>
    <p class="description">
    Stay tuned for updates as the model progresses!
    </p>
</div>
</template>

<script>
export default {
name: "FloorPlanPage",
setup() {
    return {};
},
};
</script>

<style scoped>
/* 主容器样式 */
.describe-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center; /* 文本居中 */
    padding: 20px; /* 增加间距 */
    margin-top: 60px;
    background-color: var(--bg-color); /* 使用动态背景颜色 */
    color: var(--text-color); /* 使用动态文字颜色 */
    font-family: 'Arial', sans-serif; /* 字体样式 */
}

/* 标题样式 */
h1 {
    font-size: 2.5rem;
    color: #007bff; 
    margin-bottom: 20px;
}

/* 描述文字样式 */
.description {
    font-size: 1.2rem;
    line-height: 1.6; /* 增加行高，提高可读性 */
    margin-bottom: 10px;
    max-width: 600px; /* 限制宽度，集中注意力 */
    }
</style>
