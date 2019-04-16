import '../css/index.scss';
import Custom from './custom';
import ComponentOne from './components/component-one';

new ComponentOne('moduleOne');
const a = Custom.decimal(12.6666, '', 'floor');
const date = Custom.timeToDate();
console.dir(Custom);
console.log(a, date);
console.log(Array.from(Custom.getFib(10)));