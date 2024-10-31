<template>
<div class="common-layout">
    <el-container>
        <el-header>
            <el-radio-group v-model="directionLabels[0]">
            <!-- 使用 Object.entries() 将对象转换为可迭代的键值对数组 -->
            <el-radio 
                v-for="([label, value], index) in Object.entries(directionLabels)" 
                :key="value" 
                :label="value">
                {{ label }}
            </el-radio>
            </el-radio-group>
        </el-header>
        <el-main>Main</el-main>
    </el-container>
</div>
</template>
  
<script>
import { ref, watch } from "vue";
  
export default {
    name: "parking",
    setup() {
      // directionLabels 是一个包含方向名称和对应值的对象
        const directionLabels = ref({
        "North": 0,
        "South": 1,
        "East": 2,
        "West": 3
        });
        const selectedDirection = ref(0);  // 初始选中的方向
  
        watch(selectedDirection, (newValue) => {
            console.log("Selected direction value:", newValue);
        });
  
        return {
            directionLabels,
            selectedDirection,
        };
    },
};
</script>
  
<style scoped>
.common-layout {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
}
</style>
  