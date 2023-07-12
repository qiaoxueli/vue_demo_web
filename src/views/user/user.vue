<template>

  <avue-crud
      ref="crud"
      :data="data"
      :option="option"
      :table-loading="loading"
      @on-load="getUser"
    >
      <!-- <template slot="menu" slot-scope="scope">
        <el-button
          size="mini"
          @click.native="update(scope.row)"
        >编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click.native="remove(scope.row)"
        >删除
        </el-button>
      </template> -->
    </avue-crud>
</template>

<script>
import {getUser} from '../../api/login'

  export default {
    name: "userMgm",
    data() {
      return {
        data: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
    //   }
    // }
    // data: [],
      loading: false,
      option: {
        emptyText: '暂无数据',
        columnBtn: false,//删掉自带的列显隐按钮
        refreshBtn: false,//删掉自带的刷新按钮
        addBtn: false,// 删掉自带的添加按钮
        delBtn: false,// 删掉自带的删除按钮
        editBtn: false,// 删掉自带的编辑按钮
        border: true,
        stripe: true,
        selection: false,
        align: 'center',
        menuAlign: 'center',
        menuWidth: 200,
        column: [
          {
            label: '角色名称',
            prop: 'name'
          },
          {
            label: '日期',
            prop: 'date'
          },
          {
            label: '说明',
            prop: 'address'
          }
        ]
      }
    }
    
  },
  methods: {
    getUser() {
            getUser().then((response) => {
            const resp = response.data;
            this.data = response.data;
            console.log(response.data)
            if (response.code === "200") {
           console.log("注册成功")
            } else {
              this.$message({
                message: resp.message,
                type: "warning",
              });
            }
          });
        
       
      },
  },

}
  
</script>