import '../css/index.css';
import Custom from './custom';

const custom = new Custom(this);
const a = custom.decimal(12.6666, '', 'floor');
// const date = custom.timeToDate();
console.dir(Custom);
// console.log(a, date);
console.log(Array.from(custom.getFib(10)));