import Mock from 'mockjs';
import codedetail from './codeDetail.json';
import mockTimeline from './mockTimeline.json';
import mockMessage from './mockMessage.json';
Mock.mock('/mock/codedetail',{
    code: 200,//请求地址
    data: codedetail  //请求数据
});
Mock.mock('/mock/mockTimeline',{
    code: 200,//请求地址
    data: mockTimeline  //请求数据
});
Mock.mock('/mock/mockMessage',{
    code: 200,//请求地址
    data: mockMessage  //请求数据
})
