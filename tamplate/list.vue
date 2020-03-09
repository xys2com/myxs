<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 15:50:20
 * @LastEditTime: 2019-08-23 15:50:31
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    用户
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class User extends Vue {
  created () {
    this.$store.commit('SET_LOADING', false)
  }
}
</script>
