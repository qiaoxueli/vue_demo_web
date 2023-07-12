<template>
  <div style="display: flex">
    <div class="title" style="width: 200px">模板项目</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">游客</div>
    <div>
      <el-dropdown>
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="40" :src="avatar" :class="['avatar-info']">
            </el-avatar>
          </div>
        </div>
        <el-dropdown-menu
          slot="dropdown"
          style="margin-top: -30px; margin-left: -40px"
        >
          <el-dropdown-item
            ><i class="el-icon-info"></i>个人中心</el-dropdown-item
          >
          <el-dropdown-item
            ><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style>
.title {
  margin: 0px auto 48px auto;
  font-size: 36px;
}

/*设定头像图片样式*/
.avatar-info {
  margin-top: 10px;
  margin-right: 40px;
  cursor: pointer;
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {
      avatar: require("../../assets/tx.jpg"),
    };
  },
};
</script>
