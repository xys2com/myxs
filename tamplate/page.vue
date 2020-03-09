<template>
  <div class="wrap">
    <el-row :gutter="24"
            class="head-action">
      <el-col :xl="4"
              :lg="6"
              :md="8"
              :sm="8"
              :xs="24">
        <el-select v-model="select"
                   class="head-action-gap"
                   style="width: 100%;"
                   clearable
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :xl="7"
              :lg="9"
              :md="12"
              :sm="16"
              :xs="24">
        <el-row :gutter="24">
          <el-col :xl="14"
                  :lg="14"
                  :md="14"
                  :sm="10"
                  :xs="24">
            <el-input class="head-action-gap"
                      @keyup.enter.native="fnSearch"
                      v-model.trim="search"
                      placeholder="请输入内容"
                      clearable>
            </el-input>
          </el-col>
          <el-col :xl="9"
                  :lg="10"
                  :md="10"
                  :sm="12"
                  :xs="12">
            <el-button class="head-action-gap"
                       type="primary">搜索</el-button>
            <el-button class="head-action-gap"
                       style="margin-left: 24px;"
                       type="primary"
                       size="medium"
                       icon="iconfont icon-jiahao"
                       circle></el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-table class="min"
              v-loading="tabLoading"
              height="651"
              :data="tableData"
              stripe
              style="width: 100%">
      <el-table-column class-name=" min-height"
                       show-overflow-tooltip
                       prop="date"
                       label="日期">
      </el-table-column>
      <el-table-column class-name=" min-height"
                       show-overflow-tooltip
                       prop="name"
                       label="姓名">
      </el-table-column>
      <el-table-column class-name=" min-height"
                       show-overflow-tooltip
                       prop="address"
                       label="地址">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination class="pagination-box"
                   @current-change="handleCurrentChange"
                   @size-change="handleSizeChange"
                   :page-size="8"
                   :page-sizes="[6, 20, 50, 100,200]"
                   :current-page.sync="page"
                   :layout="paginationLayoutC"
                   :total="total">
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Advertising extends Vue {
  tabLoading: boolean = false // 表格遮罩
  page: number = 1 // 当前页数
  pagesize: number = 8 // 当前显示多少条
  total: number = 1 // 全部页面
  screenWidth: any = null // 获取屏幕宽度
  search: string = ''
  select: string = ''
  options: Array<any> = [
    {
      value: '选项1',
      label: '黄金糕'
    }
  ]
  tableData: Array<any> = []

  // 根据屏幕调整分页布局
  get paginationLayoutC (): String {
    let layout = `total,sizes,prev,pager,next,jumper`
    if (this.screenWidth > 1200) {
      layout = `total,sizes,prev,pager,next,jumper`
    } else if (this.screenWidth > 800) {
      layout = `total,sizes,prev,pager,next`
    } else {
      layout = `sizes,prev,pager,next`
    }
    return layout
  }

  created () {
    this.$store.commit('SET_LOADING', false)
  }

  mounted () {
    let that = this
    // 获取屏幕信息
    this.fnGetScreen()
    window.addEventListener('resize', that.fnResize(that.fnGetScreen), false)
  }

  // 获取屏幕信息
  fnGetScreen () {
    this.screenWidth =
      (document.body.clientWidth as number) ||
      (document.documentElement.clientHeight as number)
  }

  // 获取屏幕信息节流
  fnResize (callBack: any) {
    let timer: any = null
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          callBack()
          timer = null
        }, 200)
      }
    }
  }

  handleSizeChange (event: any) {
    // 展示多少条
    this.pagesize = Number(event)
    this.page = 1
    this.$nextTick(() => this.fnGetData())
  }
  handleCurrentChange (event: any) {
    // 翻页
    this.page = Number(event)
    this.$nextTick(() => this.fnGetData())
  }
  // 搜索
  fnSearch () {
    if (this.search !== '') {
      this.page = 1
      this.$nextTick(() => this.fnGetData())
    } else {
      this.$message({
        message: '搜索不能为空',
        type: 'warning',
        duration: 800
      })
    }
    // 搜索
  }

  // 获取数据
  async fnGetData (init = false) {
    // 获取数据
    // if (!init) {
    //   this.tabLoading = true
    // }
    // try {
    //   let data = {
    //     pagesize: this.pagesize,
    //     page: this.page
    //   }
    //   let res = await noticeList(data)
    //   if (res.status_code === 200) {
    //     let data = res.data.data
    //     this.tableData = data
    //     this.total = res.data.total
    //     if (init) {
    //       this.$nextTick(() => this.$store.commit('SET_LOADING', false))
    //     } else {
    //       this.tabLoading = false
    //     }
    //   }
    // } catch (err) {
    //   console.log(err)
    // }
  }
}
</script>
<style lang="scss" module>
</style>
