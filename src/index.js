/* eslint-disable */
// This file is auto gererated by build/build-entry.js
  
import * as filters from './filters/index';//filter
import ui_extends from './ui-extends';
import $Var from './variable';
import resmount from './utils/resmount';
import {mergeOptions} from "./utils";
const version = '1.0.0';

import Actionsheet from './packages/Actionsheet';
import Badge from './packages/Badge';
import BadgeGroup from './packages/BadgeGroup';
import Button from './packages/Button';
import Cell from './packages/Cell';
import CellGroup from './packages/Cell-group';
import Checkbox from './packages/Checkbox';
import CheckboxGroup from './packages/CheckboxGroup';
import Circle from './packages/Circle';
import Col from './packages/Col';
import Collapse from './packages/Collapse';
import CollapseItem from './packages/CollapseItem';
import DatetimePicker from './packages/DatetimePicker';
import Dialog from './packages/Dialog';
import Field from './packages/Field';
import Icon from './packages/Icon';
import List from './packages/List';
import Loading from './packages/Loading';
import NavBar from './packages/NavBar';
import NoticeBar from './packages/NoticeBar';
import NumberKeyboard from './packages/NumberKeyboard';
import Pagination from './packages/Pagination';
import Panel from './packages/Panel';
import PasswordInput from './packages/PasswordInput';
import Picker from './packages/Picker';
import Popup from './packages/Popup';
import Progress from './packages/Progress';
import PullRefresh from './packages/PullRefresh';
import Radio from './packages/Radio';
import RadioGroup from './packages/RadioGroup';
import Rate from './packages/Rate';
import Row from './packages/Row';
import Search from './packages/Search';
import Slider from './packages/Slider';
import Step from './packages/Step';
import Stepper from './packages/Stepper';
import Steps from './packages/Steps';
import Swipe from './packages/Swipe';
import SwipeCell from './packages/SwipeCell';
import SwipeItem from './packages/SwipeItem';
import Switch from './packages/Switch';
import SwitchCell from './packages/SwitchCell';
import Tab from './packages/Tab';
import Tabbar from './packages/Tabbar';
import TabbarItem from './packages/TabbarItem';
import Tabs from './packages/Tabs';
import Tag from './packages/Tag';
import TreeSelect from './packages/TreeSelect';
import Uploader from './packages/Uploader';


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
 const option = mergeOptions($Var, opts);
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
