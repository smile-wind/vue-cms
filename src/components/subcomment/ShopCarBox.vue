<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9" tag="span">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        value="1"
        @change="boxNumberChange"
        ref="boxNum"
      >
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    methods:{
        //向父组件GoodsInfo传递数量
        boxNumberChange(){
            var num = parseInt( this.$refs.boxNum.value)
            this.$emit('getNumber',num)
        },
    },
    mounted(){
        //初始化numbox
        mui('.mui-numbox').numbox()
    }
}
</script>
<style lang="scss" scoped>
</style>