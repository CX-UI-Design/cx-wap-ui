<!--架构组 - 基础组件调试 - Rate 组件-->
<template>
  <van-rate class="ns-rate" v-model="child_rate"
            :count="count" :size="size" :color="color" :voidColor="voidColor"
            :icon="icon" :voidIcon="voidIcon" :readonly="readonly" :disabled="disabled"
            :disabledColor="disabledColor" @change="rate_change">
  </van-rate>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'rate',
    data() {
      return {
        child_rate: ''
      }
    },
    created() {
      this.child_rate = this.father_rate;
    },
    props: {
      father_rate: {type: Number},
      count: {type: Number, default: 5},
      size: {type: Number, default: 20},
      color: {type: String, default: '#ffd21e'},
      voidColor: {type: String, default: '#c7c7c7'},
      icon: {type: String, default: 'star'},
      voidIcon: {type: String, default: 'star-o'},
      readonly: {type: Boolean, default: false},
      disabled: {type: Boolean, default: false},
      disabledColor: {type: String, default: '#bdbdbd'}
    },
    methods: {
      /**
       * change - 当前分值变化时触发的事件
       * @param value ( 当前分值 )
       */
      rate_change(value) {
        this.$emit('change', value);
      }
    },
    watch: {
      child_rate() {
        this.$emit('change_rate', this.child_rate)
      },
      father_rate() {
        this.child_rate = this.father_rate;
      },
    },
    model: {
      prop: 'father_rate',
      event: 'change_rate'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
