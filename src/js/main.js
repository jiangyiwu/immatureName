import '../css/index.css';
import Custom from './custom';

import WXBizDataCrypt from './WXBizDataCrypt';

var appId = 'wx4a350a258a6f7876'
var sessionKey = 'NzXcLBwWDWJBzjCCLHfUOw=='
var encryptedData =
  'CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZM' +
  'QmRzooG2xrDcvSnxIMXFufNstNGTyaGS' +
  '9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+' +
  '3hVbJSRgv+4lGOETKUQz6OYStslQ142d' +
  'NCuabNPGBzlooOmB231qMM85d2/fV6Ch' +
  'evvXvQP8Hkue1poOFtnEtpyxVLW1zAo6' +
  '/1Xx1COxFvrc2d7UL/lmHInNlxuacJXw' +
  'u0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn' +
  '/Hz7saL8xz+W//FRAUid1OksQaQx4CMs' +
  '8LOddcQhULW4ucetDf96JcR3g0gfRK4P' +
  'C7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB' +
  '6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns' +
  '/8wR2SiRS7MNACwTyrGvt9ts8p12PKFd' +
  'lqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYV' +
  'oKlaRv85IfVunYzO0IKXsyl7JCUjCpoG' +
  '20f0a04COwfneQAGGwd5oa+T8yO5hzuy' +
  'Db/XcxxmK01EpqOyuxINew=='
var iv = 'r7BXXKkLb8qrSNn05n0qiA=='

var pc = new WXBizDataCrypt(appId, sessionKey)

var data = pc.decryptData(encryptedData, iv)

console.log('解密后 data: ', data)

// const custom = new Custom(this);
// const a = custom.decimal(12.6666, '', 'floor');
// const date = custom.timeToDate();
// console.dir(Custom);
// console.log(a, date);
// console.log(Array.from(custom.getFib(10)));