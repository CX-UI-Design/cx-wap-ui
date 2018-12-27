/* eslint-disable */
// This file is auto gererated by build/build-entry.js
  
import * as filters from './filters/index';//filter
import ui_extends from './ui-extends';
import $Var from './variable';
import resmount from './utils/resmount';
import {mergeOptions} from "./utils";
const version = '1.0.0';

import Actionsheet from './packages/Actionsheet/src';
import Badge from './packages/Badge/src';
import BadgeGroup from './packages/BadgeGroup/src';
import Button from './packages/Button/src';
import Cell from './packages/Cell/src';
import CellGroup from './packages/Cell-group/src';
import Checkbox from './packages/Checkbox/src';
import CheckboxGroup from './packages/CheckboxGroup/src';
import Circle from './packages/Circle/src';
import Col from './packages/Col/src';
import Collapse from './packages/Collapse/src';
import CollapseItem from './packages/CollapseItem/src';
import DatetimePicker from './packages/DatetimePicker/src';
import Dialog from './packages/Dialog/src';
import Field from './packages/Field/src';
import Icon from './packages/Icon/src';
import List from './packages/List/src';
import Loading from './packages/Loading/src';
import NavBar from './packages/NavBar/src';
import NoticeBar from './packages/NoticeBar/src';
import NumberKeyboard from './packages/NumberKeyboard/src';
import Pagination from './packages/Pagination/src';
import Panel from './packages/Panel/src';
import PasswordInput from './packages/PasswordInput/src';
import Picker from './packages/Picker/src';
import Popup from './packages/Popup/src';
import Progress from './packages/Progress/src';
import PullRefresh from './packages/PullRefresh/src';
import Radio from './packages/Radio/src';
import RadioGroup from './packages/RadioGroup/src';
import Rate from './packages/Rate/src';
import Row from './packages/Row/src';
import Search from './packages/Search/src';
import Slider from './packages/Slider/src';
import Step from './packages/Step/src';
import Stepper from './packages/Stepper/src';
import Steps from './packages/Steps/src';
import Swipe from './packages/Swipe/src';
import SwipeCell from './packages/SwipeCell/src';
import SwipeItem from './packages/SwipeItem/src';
import Switch from './packages/Switch/src';
import SwitchCell from './packages/SwitchCell/src';
import Tab from './packages/Tab/src';
import Tabbar from './packages/Tabbar/src';
import TabbarItem from './packages/TabbarItem/src';
import Tabs from './packages/Tabs/src';
import Tag from './packages/Tag/src';
import TreeSelect from './packages/TreeSelect/src';
import Uploader from './packages/Uploader/src';


const components = [
  Actionsheet,
  Badge,
  BadgeGroup,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Circle,
  Col,
  Collapse,
  CollapseItem,
  DatetimePicker,
  Dialog,
  Field,
  Icon,
  List,
  Loading,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Search,
  Slider,
  Step,
  Stepper,
  Steps,
  Swipe,
  SwipeCell,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  TreeSelect,
  Uploader
];

const install = function (Vue, opts = {}) {
  //Former plug-in external param config
  const option = mergeOptions({
    prefix: $Var._defprefix,//stage name config
    tie:$Var._tie,//tie config
    lan: $Var._lan,//language config
    log: $Var._log,//log information show
  }, opts);
  Vue.prototype.$opts = option;
  Vue.$opts = option;
  console.log('===== 全局合并后参数：=====', option);


  //binding component
  components.forEach(Component => {
   let {name} = Component;
    name ? resmount(Vue, Component, opts) : Vue.use(Component);
  });

  //register global utility filters.
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  });
  
  ui_extends(Vue, option);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Actionsheet,
  Badge,
  BadgeGroup,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Circle,
  Col,
  Collapse,
  CollapseItem,
  DatetimePicker,
  Dialog,
  Field,
  Icon,
  List,
  Loading,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Search,
  Slider,
  Step,
  Stepper,
  Steps,
  Swipe,
  SwipeCell,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  TreeSelect,
  Uploader
};

export default {
  install,
  version
};
