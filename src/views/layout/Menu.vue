<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#ffffff"
      active-text-color="#ffd04b"
      default-active="2"
      @open="handleOpen()"
      @close="handleClose()"
      @select="selectMenu"
      router
    >
      <el-submenu index="1" background-color="#85c8ff">
        <template slot="title"><i class="el-icon-location"></i><span>系统管理</span></template>
          <el-menu-item index="/index/userMgm"><i class="el-icon-location"></i>用户管理</el-menu-item>
          <el-menu-item index="/index/systemConfig"><i class="el-icon-location"></i>角色管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/index/workFlow"><i class="el-icon-document"></i>工作流</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>日志可视化</el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo {
        height: 100%;
    }

</style>

<script>

export default {
  name: "Menu",
  methods: {
    handleOpen(key, keyPath) {
      console.log("打开" + key +"---" + keyPath)
    },
    handleClose(key, keyPath) {
      console.log("关闭" + key +"---" + keyPath)
    },
    selectMenu(key, keyPath) {
      console.log("选择" + key +"---" + keyPath)
    }
  },
};
</script>
