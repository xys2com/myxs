<template>
  <div class="setting-list">
    <el-dialog
      title="新设定"
      :visible.sync="dialogVisible"
      width="90%">
      <div class="new-setting-drawer">
        <el-form ref="form" label-width="80px" :rules="rules" :model="form">
          <el-form-item prop="name" label="设定名称">
            <el-input type="text" placeholder="输入设定名称" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="content" label="内容">
            <el-input type="textarea" placeholder="输入设定内容" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item prop="relevance" label="关联书籍">
            <el-input placeholder="暂定关联书籍名称" v-model="form.relevance"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input placeholder="备注" v-model="form.remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="fnSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <ul>
      <el-button type="primary" @click="openBox">记录设定</el-button>
      <li>
        <div class="name">设定名称</div>
        <div class="content">
          <div class="content-text">设定内容</div>
          <div class="related">关联书籍</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { addSetting } from '@/api/api'
import Header from '@/components/Header.vue'
@Component({
  components: {
    Header
  }
})
export default class Addcenter extends Vue {
  dialogVisible: boolean = false
  form: any = {
    name: null,
    relevance: null,
    content: null,
    remark: null
  }
  rules: any = {
    name: [
      { required: true, message: '名称', trigger: 'blur' }
    ],
    relevance: [
      { required: true, message: '关联信息', trigger: 'blur' }
    ],
    content: [
      { required: true, message: '内容', trigger: 'blur' }
    ]
  }
  openBox () {
    this.dialogVisible = true
  }
  async fnSubmit () {
    // 数据提交
    let verify = false
    // @ts-ignore
    this.$refs['form']['validate']((v: boolean) => {
      verify = v
    })
    if (!verify) {
      return false
    }
    let { status, data, statusText } = (await addSetting(this.form)) as any
    if (status === 200) {
      this.$message.success('添加成功')
      this.dialogVisible = false
      this.form = {
        name: null,
        relevance: null,
        content: null,
        remark: null
      }
    } else {
      this.$message.error(statusText)
    }
  }
}
</script>
<style lang="scss" scoped>
.setting-list {
  .el-form-item__label{
    text-align: left;
  }
  ul{
    li{
      .name{

      }
      .content{
        .content-text{

        }
        .related{

        }
      }
    }
  }
}
</style>
<style>
.new-setting-drawer{
  height: 59vh;
  overflow: scroll;
  width: 80vw;
}
.setting-list .el-dialog{
  margin-top: 5vh!important;
}
.setting-list .el-form-item__label{
  text-align: left;
}
</style>
