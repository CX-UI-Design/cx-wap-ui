<!--架构组 - 基础组件调试 - DatetimePicker 时间选择 组件-->
<template>
  <van-datetime-picker class="ns-datetime-picker" v-model="child_datetime_picker"
                       :type="type" :minDate="minDate" :maxDate="maxDate" :minHour="minHour" :maxHour="maxHour"
                       :minMinute="minMinute" :maxMinute="maxMinute" :formatter="formatter" :title="title"
                       :showToolbar="showToolbar" :loading="loading" :itemHeight="itemHeight" :confirmButtonText="confirmButtonText"
                       :cancelButtonText="cancelButtonText" :visibleItemCount="visibleItemCount" @change="datetimePicker_change"
                       @confirm="datetimePicker_confirm" @cancel="datetimePicker_cancel">
  </van-datetime-picker>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'datetime-picker',
    data() {
      return {
        child_datetime_picker: '',
      }
    },
    created() {
      this.child_datetime_picker = this.father_datetime_picker;
    },
    props: {
      father_datetime_picker: [Date, Array, String, Number],
      type: {type: String, default: 'datetime'},//date time year-month
      minDate: {type: Date, default: '十年前'},
      maxDate: {type: Date, default: '十年后'},
      minHour: {type: Number, default: '0'},
      maxHour: {type: Number, default: '23'},
      minMinute: {type: Number, default: '0'},
      maxMinute: {type: Number, default: '59'},
      formatter: {type: Function},
      title: {type: String, default: ''},
      showToolbar: {type: Boolean, default: false},
      loading: {type: Boolean, default: false},
      itemHeight: {type: Number, default: '44'},
      confirmButtonText: {type: String, default: '确认'},
      cancelButtonText: {type: String, default: '取消'},
      visibleItemCount: {type: Number, default: '5'}
    },
    methods: {
      /**
       * change
       * @param picker
       */
      datetimePicker_change(picker) {
        this.$emit('change', picker);
      },
      /**
       * confirm
       * @param value
       */
      datetimePicker_confirm(value) {
        this.$emit('confirm', value);
      },
      /**
       * cancel
       */
      datetimePicker_cancel() {
        this.$emit('cancel');
      }
    },
    watch: {
      child_datetime_picker() {
        this.$emit('event_datetime_picker', this.child_datetime_picker)
      },
      father_datetime_picker() {
        this.child_datetime_picker = this.father_datetime_picker;
      },
    },
    model: {
      prop: 'father_datetime_picker',
      event: 'change_datetime_picker'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
