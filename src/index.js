/* eslint-disable */
// This file is auto gererated by build/build-entry.js
  
import * as filters from './filters/index';//filter
import ui_extends from './ui-extends';
import $Var from './variable';
import resmount from './utils/resmount';
import {mergeOptions} from "./utils";
const version = '1.0.0';

import Badge from './packages/Badge/src/Badge';
import BadgeGroup from './packages/BadgeGroup/src/BadgeGroup';
import Button from './packages/Button/src/Button';
import Cell from './packages/Cell/src/Cell';
import CellGroup from './packages/Cell-group/src/Cell-group';
import Checkbox from './packages/Checkbox/src/Checkbox';
import CheckboxGroup from './packages/CheckboxGroup/src/CheckboxGroup';
import Circle from './packages/Circle/src/Circle';
import Col from './packages/Col/src/Col';
import Collapse from './packages/Collapse/src/Collapse';
import CollapseItem from './packages/CollapseItem/src/CollapseItem';
import DatetimePicker from './packages/DatetimePicker/src/DatetimePicker';
import Field from './packages/Field/src/Field';
import Icon from './packages/Icon/src/Icon';
import List from './packages/List/src/List';
import NavBar from './packages/NavBar/src/NavBar';
import NoticeBar from './packages/NoticeBar/src/NoticeBar';
import NumberKeyboard from './packages/NumberKeyboard/src/NumberKeyboard';
import Pagination from './packages/Pagination/src/Pagination';
import Panel from './packages/Panel/src/Panel';
import PasswordInput from './packages/PasswordInput/src/PasswordInput';
import Picker from './packages/Picker/src/Picker';
import Popup from './packages/Popup/src/Popup';
import Progress from './packages/Progress/src/Progress';
import Radio from './packages/Radio/src/Radio';
import RadioGroup from './packages/RadioGroup/src/RadioGroup';
import Rate from './packages/Rate/src/Rate';
import Row from './packages/Row/src/Row';
import Search from './packages/Search/src/Search';
import Slider from './packages/Slider/src/Slider';
import Step from './packages/Step/src/Step';
import Stepper from './packages/Stepper/src/Stepper';
import Steps from './packages/Steps/src/Steps';
import Swipe from './packages/Swipe/src/Swipe';
import SwipeItem from './packages/SwipeItem/src/SwipeItem';
import Switch from './packages/Switch/src/Switch';
import SwitchCell from './packages/SwitchCell/src/SwitchCell';
import Tab from './packages/Tab/src/Tab';
import Tabbar from './packages/Tabbar/src/Tabbar';
import TabbarItem from './packages/TabbarItem/src/TabbarItem';
import Tabs from './packages/Tabs/src/Tabs';
import Tag from './packages/Tag/src/Tag';
import TreeSelect from './packages/TreeSelect/src/TreeSelect';
import Uploader from './packages/Uploader/src/Uploader';


const components = [
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
  Field,
  Icon,
  List,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popup,
  Progress,
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
  
  ui_extends(Vue, option.prefix);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
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
  Field,
  Icon,
  List,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popup,
  Progress,
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
