(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/edit"],{"09a0":function(t,e,n){"use strict";n.r(e);var o=n("4517"),i=n("6584");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("8a01");var u,s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"bc035dd8",null,!1,o["a"],u);e["default"]=r.exports},"0af6":function(t,e,n){"use strict";(function(t,o){function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return l(t)||c(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d=function(){return n.e("node-modules/_@dcloudio_uni-ui@1.1.8@@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(n.bind(null,"b50e"))},f=function(){return n.e("node-modules/_@dcloudio_uni-ui@1.1.8@@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(n.bind(null,"fc91"))},p=function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/_@dcloudio_uni-ui@1.1.8@@dcloudio/uni-ui/lib/uni-icons/uni-icons")]).then(n.bind(null,"cc1c"))},h=function(){return n.e("node-modules/_@buuug7_uniapp-components@0.7.0@@buuug7/uniapp-components/lib/simple-datetime-picker/index").then(n.bind(null,"b9e0"))},b={components:{uniIcons:p,uniNavBar:f,uniPopup:d,simpleDatetimePicker:h},data:function(){return{Token:t.getStorageSync("userId")||"",ismolnum:1,paytype:[],types:{collect:[],branch:[]},dataobj:{genre:1,amount:"",useDate:"",payType:{},useType:{},remarks:"",picture:""},typeitems:[]}},onLoad:function(t){if(this.paytype=s(this.GlobalJson.paytype),t.item){var e=JSON.parse(t.item);this.dataobj=e}else this.dataobj.useDate=this.utils.Format(new Date)},onShow:function(){this.gettypelist()},methods:{toback:function(){this.dataobj._id?t.redirectTo({url:"./details?id="+this.dataobj._id}):t.navigateBack({delta:1})},handleexin:function(t){if(this.$refs.popup.close(),this.dataobj.genre=t,this.gettypelist(),this.dataobj._id)this.dataobj.useType={};else{var e={genre:t,amount:"",useDate:"",payType:{},useType:{},remarks:""};e.useDate=this.utils.Format(new Date),this.dataobj=e}},gettypelist:function(){var e=this;t.showLoading({title:"数据加载中...",mask:!0}),o.callFunction({name:"settype",data:{pay:4,token:this.Token,genre:this.dataobj.genre}}).then((function(n){t.hideLoading();var o=[{iconclass:"iconjia",label:"编辑",isadd:!0}];if(0==n.result.status){e.isnull=!1;var i=s(n.result.list.data);e.typeitems=[].concat(s(i),o)}else e.typeitems=[].concat(o),t.showToast({title:n.result.msg,icon:"none"})})).catch((function(e){t.hideLoading(),t.showModal({content:"操作失败，请重新操作",showCancel:!1})}))},showModel:function(t){this.ismolnum=t,this.$refs.popup.open()},upload:function(){var e=this;new Promise((function(e,n){t.chooseImage({chooseImage:1,success:function(t){var n=t.tempFilePaths[0],o={filePath:n};e(o)},fail:function(){n(new Error("Fail_Cancel"))}})})).then((function(e){return t.showLoading({title:"文件上传中..."}),o.uploadFile(e)})).then((function(n){t.hideLoading(),t.showToast({title:"图片上传成功",mask:!0}),e.dataobj.picture=n.fileID})).catch((function(e){t.hideLoading(),console.log(e),"Fail_Cancel"!==e.message&&t.showModal({content:"图片上传失败，请重新上传",showCancel:!1})}))},seeimgsrc:function(){this.$refs.picture.open()},closeimgSrc:function(){this.dataobj.picture=""},saveData:function(){if(this.dataobj.amount)if(this.dataobj.payType.label)if(this.dataobj.useType.label){t.showLoading({title:"数据保存中...",mask:!0});var e=a({},this.dataobj),n="",i=this;e.useDategetTime=new Date(e.useDate).getTime();var u=e.useDate.split(" "),s=u[0].split("-");e.useYear=s[0],e.useMonth=s[1],e.useDay=s[2],e.useHour=u[1],e.token=this.Token,n=e._id?"update":"add",o.callFunction({name:n,data:e}).then((function(n){if(console.log(n),n.result.id){if(t.hideLoading(),t.showToast({title:"数据保存成功",mask:!0,duration:2e3}),e.dataId){e._id=e.dataId,delete e.dataId;try{t.setStorageSync("editData",e)}catch(o){}}setTimeout((function(){i.toback()}),2500)}else t.showToast({title:"保存失败，请重新输入",icon:"none",mask:!0,duration:2e3})})).catch((function(e){t.hideLoading(),t.showToast({title:"数据保存失败，请重新保存",mask:!0,icon:"none",duration:2e3}),console.error(e)}))}else t.showToast({title:"请选择方式",icon:"none"});else t.showToast({title:"请选择方式",icon:"none"});else t.showToast({title:"请输入金额",icon:"none"})},handlepay:function(t){this.dataobj.payType=t,this.$refs.popup.close()},handleType:function(e){this.$refs.popup.close(),e.isadd?t.navigateTo({url:"./typelist?genre="+this.dataobj.genre}):this.dataobj.useType=e},openDatetimePicker:function(){this.$refs.myPicker.show()},closeDatetimePicker:function(){this.$refs.myPicker.hide()},handleSubmit:function(t){t.year&&t.month&&t.day&&(this.dataobj.useDate="".concat(t.year,"-").concat(t.month,"-").concat(t.day," ").concat(t.hour,":").concat(t.minute))}}};e.default=b}).call(this,n("543d")["default"],n("a9ff")["default"])},1287:function(t,e,n){"use strict";(function(t){n("99cf"),n("921b");o(n("66fd"));var e=o(n("09a0"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},4517:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},6584:function(t,e,n){"use strict";n.r(e);var o=n("0af6"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"8a01":function(t,e,n){"use strict";var o=n("bc2f"),i=n.n(o);i.a},bc2f:function(t,e,n){}},[["1287","common/runtime","common/vendor"]]]);