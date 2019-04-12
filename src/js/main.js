import '../css/index.css';
import Custom from './custom';

const a = Custom.decimal(12.6666, '', 'floor');
const date = Custom.timeToDate();
console.dir(Custom);
console.log(a, date);
console.log(Array.from(Custom.getFib(10)));