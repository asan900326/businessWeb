<template>
  <div id="app">
      <!-- 头部 -->
      <div class="header">
          <!-- 头部顶部区域 -->
          <div class="topBar">
              <div class="container">
                <div class="topBar_left">
                    <a href="#">收藏慕课</a>
                </div>
                <div class="topBar_right">
                    <span>欢迎来到慕课!</span>
                    <a href="#">[登录]</a>
                    <a href="#">[免费注册]</a>
                </div>
              </div>
          </div>
           <!-- 头部logo搜索区 -->
          <div class="topLogo">
              <div class="container">
                  <div class="logo">
                     <a href="#"><img src="./assets/headerimg/02.png" alt="慕课网"></a>
                  </div>
                  <div class="searchBox">
                    <input type="text" class="searchText">
                    <input type="button" name="counter" value="搜 索" class="searchBtn">
                  </div>
                  <div class="shopCar">
                    <span class="shopCar_title">购物车</span>
                    <span class="shopCar_num">0</span>
                  </div>
              </div>

          </div>
          <!-- 头部菜单区 -->
          <div class="topMenu">
              <div class="container">
                  <div class="topMenu_left">
                    <span class="topMenu_left_text"><a href="#">全部商品分类</a></span>
                    <span class="topMenu_left_logo"><b>V</b></span>
                  </div>
                  <div class="topMenu_right">
                    <ul >
                        <router-link v-for="(menu,index) in menuList" :key='menu.id' :to="{path: menu.path }" tag="li" @click="active(index)" >
                          <a :href="menu.href" :class="{on: index===nowIndex}">
                           {{ menu.title }}
                         </a>
                        </router-link>
                    </ul>
                  </div>
              </div>
          </div>
      </div>

    <!-- 中间内容区 -->
    <router-view></router-view>
    
    <div class="hr_30"></div>
    <!-- 底部版权区 -->
    <div class="footer">
       <div class="footer_container">
          <div class="footer_top">
            <ul v-for="item in btMessage">
              <li><a href="#"> {{ item.title }}</a></li>
            </ul>
            <span>客户热线: 400-675-123</span>
          </div><!-- footer_top结束 -->
          <div class="footer_mid">
            <span>Copyright &#169;2006 - 2014 慕课版权所有</span>
            <span>京ICP备09037834号</span>
            <span>京ICP证B1034-8373号</span>
            <span>某市公安局XX分局备案编号: 123456789123</span>
          </div><!-- footer_mid结束 -->
          <div class="footer_bottom">
              <img src="./assets/footerimg/S1.png" alt="">
              <img src="./assets/footerimg/S1.png" alt="">
              <img src="./assets/footerimg/S1.png" alt="">
              <img src="./assets/footerimg/S1.png" alt="">
          </div><!-- footer_bottom结束 -->
       </div><!-- container结束 -->
    </div>

  </div>
</template>

<script>
export default {
  methods:{
    active(index){
      if(index!==0){
        setTimeout(()=>{
          this.nowIndex= index
        },10)
        
      }
    }
  },
  data (){
    return{
      nowIndex:0,
      menuList:[
        {
          title: '数码',
          href: '#',
          path:'/',
          id:1
        },
        {
          title: '天黑黑',
          href: '#',
          path:'/detail',
          id:2
        },
        {
          title: '团购',
          href: '#',
          path:'/select',
          id:3
        },
        {
          title: '发现',
          href: '#',
          path:'introduction',
          id:4
        },
        {
          title: '二手特卖',
          href: '#',
          path:'/select',
          id:5
        },
         {
          title: '名品会',
          href: '#',
          path:'/detail',
          id:6
        }
      ],
      btMessage: [
        {
          title: '慕课简介',
          href: '#',
        },
        {
          title: '慕课公告',
          href: '#'
        },
        {
          title: '招纳贤士',
          href: '#'
        },
        {
          title: '联系我们',
          href: '#'
        }
      ]
    }
  }
}
</script>

<style >
 /*页面初始化代码*/
body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{
  margin:0;padding:0;
}
body{font-size:12px;background-color:#EEE;}
img{border:none;}
li{list-style:none;}
input,select,textarea{outline: none;border-style: none;}
textarea{resize:none;}
a{text-decoration: none;}

/*清除浮动*/
.clearfix:after{content:'';display: block;clear: both;}
.clearfix{zoom:1;}

/*公用代码*/
.container{width:1000px;margin:0 auto;}

/*topBar*/
.topBar{width:100%;height: 31px;background: #E7E7E7;line-height: 31px;}
.topBar_left{float: left;}
.topBar_left a{background:url('./assets/headerimg/01.png') no-repeat left center;padding-left:25px;display: inline-block;}
.topBar_right{float: right;}
.topBar_right span,.topBar_right a{color: gray;margin-right: 5px;}
.topBar_left a:hover,.topBar_right a:hover{color: red;}

/*topLogo*/
.topLogo{width:100%;height: 100px;background:#1D7AD9;}
/*logo*/
.logo{float: left;padding:15px 0 15px 25px;}
/*搜索框*/
.searchBox{float: left;height: 100px;width:420px;line-height: 100px;margin-left:200px;}
.searchText{height:40px;width:350px;float: left;margin-top:30px;padding:0 5px;}
.searchBtn{height: 40px;width: 60px;background: #FF8C00;float: right;margin-top:30px;color:#FFF;font-weight:bold;font-size:14px;font-family: '微软雅黑';}
.searchBtn:hover{cursor: pointer;background: pink;color: black;}
/*购物车*/
.shopCar{float: right;width:140px;height:40px;margin-right: 50px;margin-top:30px;background-color: #FF8C00;line-height:40px;color:#FFF;font-weight:bold;font-size:14px;font-family: '微软雅黑';}
.shopCar_title{height: 40px;width:58px;background:url('./assets/headerimg/03.png') no-repeat left center;float: left;border:1px solid #E27A00;padding-left:30px;} /*也可以使用text-index首行缩进代替*/
.shopCar_num{height: 40px;width:33px;background:url('./assets/headerimg/04.png') no-repeat 90% 50%;float: right;border:1px solid #E27A00;padding-left:15px;}

/*topMenu*/
.topMenu{height: 35px;background: #1369C0;line-height: 35px;}

.topMenu_left{float:left;width:200px;height: 35px;line-height: 35px;/*background: url('./assets/headerimg/05.png') no-repeat 85% center;*/margin-right:20px;}
.topMenu_left_text {height:35px;width:160px;float: left;text-align: center;font-size:14px;}
.topMenu_left_text a{color:#FFF;width:160px;font-family: '微软雅黑';display: inline-block;}
.topMenu_left_logo {height:35px;width:40px;float:right;text-align: center;color:#FFF;font-family: '微软雅黑';}
.topMenu_left a:hover,.topMenu_left_logo:hover{background: #4539FD;}

.topMenu_right{height: 35px;}
.topMenu_right li{float:left;font-size:12px;width:100px;text-align: center;color:#FFF;}
.topMenu_right li a{width:100px;color:#FFF;font-family: '微软雅黑';display:inline-block; }
.on{background: #4539FD;}
.topMenu_right li a:hover{background: #4539FD;}

.hr_30{width:100%;height: 25px;clear: both;}

/*footer*/
.footer{width:100%;height: 300px;background:#D4D4D4;clear: both;margin-top:10px;}
.footer_container{width:1000px;height:146px;margin:0 auto;padding-top:77px;}
/*footer_top*/
.footer_top{width:998px;height:25px;line-height:25px;}
.footer_top ul{padding-left:300px;}
.footer_top ul li{float: left;margin:0 5px;}
.footer_top span{margin-left:10px;}
.footer_top ul li a{font-size:8px;font-family: '微软雅黑';color: black;}
.footer_top ul li a:hover{color:red;}
/*footer_mid*/
.footer_mid{width:998px;height:25px;margin-top:10px;line-height:25px;text-align: center;}
.footer_mid span{margin:0 15px;font-size:8px;font-family: '微软雅黑';}
/*footer_bottom*/
.footer_bottom{width: 998px;height: 56px;margin-top:25px;text-align: center;}
.footer_bottom img{margin:0 20px;}
</style>





























































