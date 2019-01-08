/* eslint-disable */
// This file is auto gererated by build/build-entry.js
  
import * as filters from './filters/index';//filter
import ui_extends from './ui-extends';
import $Var from './variable';
import resmount from './utils/resmount';
import {mergeOptions} from "./utils";
const version = '0.0.1';

import Actionsheet from './packages/Actionsheet/Actionsheet';
import Badge from './packages/Badge/Badge';
import BadgeGroup from './packages/BadgeGroup/BadgeGroup';
import Button from './packages/Button/Button';
import Cell from './packages/Cell/Cell';
import CellGroup from './packages/CellGroup/CellGroup';
import Checkbox from './packages/Checkbox/Checkbox';
import CheckboxGroup from './packages/CheckboxGroup/CheckboxGroup';
import Circle from './packages/Circle/Circle';
import Col from './packages/Col/Col';
import Collapse from './packages/Collapse/Collapse';
import CollapseItem from './packages/CollapseItem/CollapseItem';
import DatetimePicker from './packages/DatetimePicker/DatetimePicker';
import Dialog from './packages/Dialog/Dialog';
import Field from './packages/Field/Field';
import Icon from './packages/Icon/Icon';
import List from './packages/List/List';
import Loading from './packages/Loading/Loading';
import NavBar from './packages/NavBar/NavBar';
import NoticeBar from './packages/NoticeBar/NoticeBar';
import NumberKeyboard from './packages/NumberKeyboard/NumberKeyboard';
import Pagination from './packages/Pagination/Pagination';
import Panel from './packages/Panel/Panel';
import PasswordInput from './packages/PasswordInput/PasswordInput';
import Picker from './packages/Picker/Picker';
import Popup from './packages/Popup/Popup';
import Progress from './packages/Progress/Progress';
import PullRefresh from './packages/PullRefresh/PullRefresh';
import Radio from './packages/Radio/Radio';
import RadioGroup from './packages/RadioGroup/RadioGroup';
import Rate from './packages/Rate/Rate';
import Row from './packages/Row/Row';
import Search from './packages/Search/Search';
import Slider from './packages/Slider/Slider';
import Step from './packages/Step/Step';
import Stepper from './packages/Stepper/Stepper';
import Steps from './packages/Steps/Steps';
import Swipe from './packages/Swipe/Swipe';
import SwipeCell from './packages/SwipeCell/SwipeCell';
import SwipeItem from './packages/SwipeItem/SwipeItem';
import Switch from './packages/Switch/Switch';
import SwitchCell from './packages/SwitchCell/SwitchCell';
import Tab from './packages/Tab/Tab';
import Tabbar from './packages/Tabbar/Tabbar';
import TabbarItem from './packages/TabbarItem/TabbarItem';
import Tabs from './packages/Tabs/Tabs';
import Tag from './packages/Tag/Tag';
import TreeSelect from './packages/TreeSelect/TreeSelect';
import Uploader from './packages/Uploader/Uploader';


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
