AFRAME.registerComponent('touch-point', {
  schema: {
      color:{type:"color",default:"white"},
      opacity:{default:"0.6"},
      "radius-bottom":{default:"0"},
      "radius-top":{default:"0.76"},
      height:{default:"1.62"},
      position:{default:"-5.239 -1.004 1.092"}
  },
  init: function () {
    console.log("init tp")
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

// AFRAME.registerComponent('tp-shadow', {
//   schema:{
//     color:'#CCC'
//   }
// })



var touchpoints = [

];