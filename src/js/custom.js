class CustomCode {
  constructor(options) {
    this.options = options;
  }

  /**
   * 数组去重  兼容ie8
   * 原理： 数组第i个元素与后面的元素对比，若找到相同的，终止本次循环（i++），否则存入temp
   * @param {Array} arr
   */
  duplicateRemoval(arr) {
    let temp = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      for(let j = i + 1; j < length; j++) {
        if (arr[i] === arr[j]) {
          i++;
          j = i;
        }
      }
      temp.push(arr[i]);
    }
    return temp;
  }

  /**
   * 去重  不兼容IE8
   * 原理： 元素在数组中第一次出现的位置不等于其下标，则该值重复
   * @param {Array} arr 
   */
  duplicateRemovalNotIe8(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === i) temp.push(arr[i]);
    }
    return temp;
  }

  /**
   * 保留n位小数
   * @param {Number} value 
   * @param {Number} n 
   * @param {String} type 
   */
  decimal(value, n, type) {
    if (typeof value !== 'number') throw new TypeError(`${value} is not a Number`);
    if (!n) n = 2;
    if (type !== 'round' && type !== 'ceil' && type !== 'floor') type = 'round';
    const reg = /^(\d+\.)(\d+)$/;
    const part1 = value.toString().replace(reg, '$1');
    let part2 = '';
    if (part1.includes('.')) {
      const str = value.toString().replace(reg, '$2');
      if (str.length > n) {
        part2 = Math[type](Number(str.slice(0, n + 1)) * 10 / 100);
      } else {
        part2 = str.slice(0, n);
      }
    }
    return `${part1}${part2}`;
  }

  /**
   * 不足10则补零
   * @param {Number} val 
   */
  fillZero(val) {
    if (typeof value !== 'number') throw new TypeError(`${val} is not a Number`);
    return val.toString().padStart(2, '0');
  }

  /**
   * 根据时间戳返回日期，星期
   * @param {Number} timestamp 
   * @param {String} type 
   */
  timeToDate(timestamp, type) {
    if (type !== '-' && type !== ' ' && type !== '/') type = '-';
    if (!timestamp) timestamp = new Date().getTime();
    const date = new Date(timestamp);
    const day = this.fillZero(date.getDate());
    const month = this.fillZero(date.getMonth() + 1);
    const week = '一二三四五六日'.charAt(date.getDay());
    const year = date.getFullYear();
    return [`${year}${type}${month}${type}${day}`, `星期${week}`];
  }

  /**
   * @param {Number} s 
   */
  returnTime(s) {
    let hour = Math.floor(s / 3600);
    let min = Math.floor((s - hour * 3600) / 60);
    let sec = (s - hour * 3600 - min * 60);
    hour = this.fillZero(hour);
    min = this.fillZero(min);
    sec = this.fillZero(sec);
    if (Number(hour) > 0) {
      return `${hour}:${min}:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }

  // 获取URL query参数转为object
  getLocationQuery() {
    const search = window.location.search;
    if (search === '') return {};
    const queryArr = search.slice(1).split('&');
    const newQuery = queryArr.map((item) => item.split('='));
    const arr = newQuery.reduce((a, b) => a.concat(b));
    let obj = {};
    arr.forEach((i, index, array) => {
      if (index % 2 === 0) {
        obj[i] = array[index + 1];
      }
    });
    return obj;
  }

  /**
   * 
   * @param {Function} cb 
   * @param {Number} n 
   */
  customInterval(cb, n = 1) {
    if (typeof n !== 'number') new TypeError(`${n} is not a Number`);
    if (typeof cb !== 'function') cb = function() { console.log(1) };
    setTimeout(() => {
      cb();
      this.customInterval(cb, n);
    }, n * 1000)
  }

    /**
     * @param {Number} n 
     */
  fib(n) {
    if (typeof n !== 'number') new TypeError(`${n} is not a Number`);
    if (n < 0) return console.log('>=0');
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n > 1) {
      return this.fib(n-1) + this.fib(n-2);
    }
  }

  /**
   * @param {Number} n 
   */
  getFib(n) {
    // 性能好
    // let fibArr = [];
    // for(let i = 0; i < n; i++) {
    //   fibArr[i] = this.fib(i);
    // }
    // 代码少 性能比for差30倍 https://jsperf.com/constarray/4
    const fibArr = Array.from({ length: n }).map((x, i) => x = this.fib(i));
    return fibArr;
  }

  /**
   * 
   * @param {String} key 
   * @param {String} value 
   */
  setCooies(key, value) {
    document.cookie = key + "=" + value;
  }

    /**
     * @param {String} key 
     */
  getCooies(key) {
    const getCookie = document.cookie.replace(/[ ]/g, "");
    const arrCookie = getCookie.split(";")
    let tips;
    for (let i = 0; i < arrCookie.length; i++) {
      const arr = arrCookie[i].split("=");
      if (key === arr[0]) {
        tips = arr[1];
        break;
      }
    }
    return tips;
  }
}

module.exports = CustomCode;
