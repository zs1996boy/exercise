(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-763f3304"],{"1c9f":function(o,i,t){},"83a7":function(o,i,t){"use strict";t.r(i);var s=function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("div",[t("div",{staticClass:"box",style:o.cssVars},[t("img",{staticClass:"pic",attrs:{src:o.bgPic1}}),t("img",{staticClass:"pic",attrs:{src:o.bgPic2}}),t("img",{staticClass:"pic",attrs:{src:o.bgPic3}}),t("div",{staticClass:"pic_color"},[o._v(" 颜色选择： "),o._l(o.color,(function(i){return t("li",{key:i,style:"background:"+i+";",on:{click:function(t){o.my_color=i}}})}))],2)]),this.$store.state.off_code?t("div",{staticClass:"end_text"},o._l(o.text,(function(i,s){return t("div",{key:s},[o._v(" "+o._s(i)+" ")])})),0):o._e(),t("div",{staticClass:"bottom",attrs:{"is-link":""},on:{click:o.showPopup}},[o._v("使用方法")]),t("van-popup",{style:{height:"50%"},attrs:{closeable:"",round:"",position:"bottom"},model:{value:o.show,callback:function(i){o.show=i},expression:"show"}},[t("ul",{staticClass:"text_bottom"},[t("li",[o._v("核心css "),t("ol",[o._v("filter:drop-shadow")]),t("ol",[o._v("(水平阴影偏移距离 垂直阴影偏移距离 投射的阴影颜色 );")])]),t("li",{on:{click:function(i){return o.getImg2(o.codeimg)}}},[o._v(" 代码如下： "),t("img",{staticClass:"longbtn",attrs:{src:o.codeimg,alt:""}})])])])],1)},e=[],c=t("d9d7"),l=t.n(c),r=t("ea36"),a=t.n(r),n=t("ae74"),g=t.n(n),p=t("9f5b"),A=t.n(p),m=t("28a2"),d={data(){return{color:["red","green","blue"],bgPic1:l.a,bgPic2:a.a,bgPic3:g.a,my_color:"red",show:!1,codeimg:A.a,text:["<template>","<div>",'    <div class="box" :style="cssVars">','        <img :src="bgPic1" class="pic"/>','        <img :src="bgPic2" class="pic"/>','        <img :src="bgPic3" class="pic"/>','        <div class="pic_color">',"            颜色选择：","            <li :style=\"'background:'+item+';'\" ",'            v-for="item in color" :key="item"','            @click="my_color=item"></li>',"        </div>","    </div>",'    <div class="bottom" is-link @click="showPopup">使用方法</div>',"    <van-popup",'      v-model="show"',"      closeable","      round",'      position="bottom"',"      :style=\"{ height: '50%' }\"","    >",'      <ul class="text_bottom">',"        <li>核心css","          <ol>filter:drop-shadow</ol>","          <ol>(水平阴影偏移距离 垂直阴影偏移距离 投射的阴影颜色 );</ol>","        </li>",'        <li @click="getImg2(codeimg)">',"          代码如下：",'          <img :src="codeimg" alt="" class="longbtn">',"        </li>","      </ul>","    </van-popup>","</div> ","</template>","<>","import bgPic1 from '@/assets/img/bk.png';","import bgPic2 from '@/assets/img/bk1.png';","import bgPic3 from '@/assets/img/fk.png';","import codeimg from '@/assets/img/code3.png';",'import { ImagePreview } from "vant"; //引入预览',"export default {","  data() {","            return {","                color:[","                    'red',","                    'green',","                    'blue'","                ],","                bgPic1,","                bgPic2,","                bgPic3,","                my_color:'red',","                show:false,","                codeimg","            }","        },","        computed: {","            cssVars() {","            return {",'                "--color": this.my_color',"            };","            }","        },","        methods: {","            getImg2(item) {","                ImagePreview([item]);","            },","             showPopup() {","                this.show = true;","            },","            onClose() {","                this.setData({ show: false });","            },","        }","};","</ script>",'<style lang="scss">',".box{","    font-size: 0px;","    width: 100vw;","    height: 90vh;","    // border: 1px solid blue;","    padding: .133333rem;","    box-sizing: border-box;","img{","    font-size: 0px;","    display: block;","    width: 100px;","    height: 100px;","}","}",".pic{","    margin-top: .266667rem;","    filter: drop-shadow(150px 0px 0px var(--color));","}",".pic_color{","    font-size: .426667rem;","    margin-top: 1.066667rem;","    display: flex;","    flex-wrap: wrap;","    &>li{","        border-radius: 50%;","        margin-left: .133333rem;","        list-style: none;","        width: 1.066667rem;","        height: 1.066667rem;","    }","}","</style>"]}},computed:{cssVars(){return{"--color":this.my_color}}},methods:{getImg2(o){Object(m["a"])([o])},showPopup(){this.show=!0},onClose(){this.setData({show:!1})}}},u=d,h=(t("fdc6"),t("2877")),b=Object(h["a"])(u,s,e,!1,null,null,null);i["default"]=b.exports},"9f5b":function(o,i,t){o.exports=t.p+"img/code3.png"},ae74:function(o,i,t){o.exports=t.p+"img/fk.png"},d9d7:function(o,i,t){o.exports=t.p+"img/bk.png"},ea36:function(o,i){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADjBAMAAABzzGzOAAAAG1BMVEUAAAAAofUAk/MAk/gBnfUAlvcAm/UAl/QBkO60NTzIAAAAAXRSTlMAQObYZgAABKRJREFUeNrtmEFv0zAUgBEIiSORjHdFtRA5okTceZJjztC1nCNl3jkbDVc0Lv3ZPHsubupkIVGpLfG+ZYRw8ceXF2/NMxmidCO1bvB84GZzyrcfht1mmPWmLD8eX5fjfDgo6D8019vt9anCTaW3PeYpfC36BAp9GunW9hKosA0zWIVRhChRYyqBV4Av17JyqErpU4UKHZAgQ+cuBgzKAjlWKJAnFJh884a5ChUuHFa4mVlhbSv46tOzcG0qKPslZaMdfho2ExXuA/z/uvCMKTgJKavHr0oGCjfVdlEFYZmu4KicgQxuxKIKdv1DBc+4QmVmwVcIZ6FaVOHdbsYTIeUbW2CkwnazqELvifAZhvaFLAMAxk73SK+ggl1yit29qTASQYQKMpPM1oBAoc92mJFbgRX8zngoMVIBMukWH1OYWwEV5lUAJgNw+b+vcD+Ar9DHVJihcOYKxUqMVsiGFJqzV0AF/AMrzFA4fwURsUKJDFfIjpDjqEOFb7tgm+zvku/8X8PfF9zqYkyBLVDwhAprrxAwrPD62SV5IUR0haKIrlBSBVMBM6Q3juzTswuCFYr4CrZCEVWhFFQhnVko48/Cr4QqMCklXHx3tIioCkURv4IQ0RXMtkAVEngihBBF+TaZCvYjxKW3JkQgkRWQIqEKLH4FFr8CzUIqFbJLK7x0n/v91sRIgRRIIS0F2hdIgRRIwSjMefVJCv+El19Xq5WIr7AqioIqmAppjCOwDBJ4IliUt6+IUzAVIigUjiQqAFVIYxYYVbCzAMYCiffqE7IYu2O/AqMKVCGxCsCoAlWgClSBKqRQoRRCUAWqkEaF5+/wDcc6WgWvELfCyvEWFVyFaApU4VEBIIEKELkCKsSvwKLPQgIVWPQKLIEKCcwCUAWqkM6+kMBPSqpAFahCXwGJXsFAFRKpAPEV6EZQhdgVcqrQrwCMKtAsOGgWqEL8CkAVEquQUQWqQBWoQjIVMqpAFagCVUipgkCoQuwKDwhVoAppVHhYIb+oApLnOVWgCulUyH96BYhRAS1+Rq6w3+/jKbzaW7wCIDEU0qqQQXyFBCqQAilEVsjzmAq54b+vEH8WEvlknSP0loUqBBUmYNKj9AA/nuZuFWI2JnOOp5Dj9/6pCiyD3iGPAAClm6bxOm3XM5lWeI/f5t8WVkAU11pZm9aiD9z+dYUHqzC/AtSSM6gb+fmKK3TAs2WBArKsAi6L/esa2q7x617xJRUMC2aBcc4k51LrK24KWHjbfr9UBahxBhWXtcRlG7zQzmHRLByYWQFqA3q0+uiJOKpw+69nARdHFOf8qlFyaBy7rpvzRHiFyRLypEJdS2gepXTd9ivcIv0Yu823IaW7u7v5FXAQlTnwXCuQTDIUuDXDEFaYVlhWASXwsGes0HClFBrosELfIFRYPgt1o5h0E8k5U6ypW60nKqDCGSvgunjgCayFq1B3ulfB4RXW56vAmVR4cGYnAq943eI06nagQk9hc74K5hbYCjgM5kor1XZmGk7ABp3TcApnqvB4D4yHYu65wFmwHU5w92NGhekOJ08ESAB71Wil7SSEFRDtKxxsLKv3RxpvfwNUIHB7C41FvAAAAABJRU5ErkJggg=="},fdc6:function(o,i,t){"use strict";var s=t("1c9f"),e=t.n(s);e.a}}]);