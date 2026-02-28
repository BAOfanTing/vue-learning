//引入mitt
import mitt from "mitt";

//创建emitter
const emitter = mitt();

// //绑定事件
// emitter.on('abc',(value)=>{
//     console.log('abc事件触发了',value);
// })

// emitter.on('xyz',(value)=>{
//     console.log('xyz事件触发了',value);
// })

// //定时触发事件
// setInterval(()=>{
//     emitter.emit('abc','hello');
//     emitter.emit('xyz','world');
// },2000)

// //不再清除事件监听器，这样你可以持续看到效果
// setTimeout(()=>{
//     emitter.all.clear();
// },3000)

//创建并暴露mitt
export default emitter