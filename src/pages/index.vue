<template>
  <div class="index">

    <div class="index-top">
    	<div class="index-top_left">
    		<div v-for="(sort,index) in productSort" class="left_box" @mouseover="Show(index)" @mouseout="clearShow(index)">
    			<h3 >{{ sort.title }}</h3>
    			<ul v-for="product in sort.list ">
    				<li>
    					<a href="#" > {{ product.name }} </a>
    				</li>
    			</ul>
    		</div>
    	</div><!-- index-top_left结束 -->

    	<!-- <div class="index-top_img">
    		<div class="img_box">
    			<a href="#"><img src="../assets/index/img01.png" alt="img"></a>
    		</div>
    		<div class="img_list">
    			<a class="acitve"></a><a></a><a></a><a></a>
    		</div>
    	</div> -->
    	<!-- 使用组件代替以上的原生代码 -->
    	<div class="index-top_right">
        
    		<div class="index-top_right_img">
    			<slide-show ></slide-show>
    		</div>
        <div class="index-top_right_list2"  >          
          <phone-list v-if="isShow0"></phone-list>
          <computer-list v-if="isShow1"></computer-list>
          <house-app v-if="isShow2"></house-app>
          <kitchen-app v-if="isShow3"></kitchen-app>
          <kitchen-food v-if="isShow4"></kitchen-food>
        </div>
    		
    	</div>
		
    </div><!-- top结束 -->
 	
 	<div class="index-content">
 		<div v-for="productShow in productShowList" class="index-content_box">
 			<div class="index-content_title">
 				<span class="title_left"><a href="#">{{productShow.title}}</a></span>
 				<span class="title_right"><a href="#">更多&gt;&gt;</a></span>
 			</div><!-- index-content_title结束 -->

 			<div class="index-content_img">
 				<a href="#"><img :src="productShow.src" alt="pic"></a>
 			</div><!-- index-content_img结束 -->

 			<div class="index-content_list">
 				<div class="big_pic">
 					<ul v-for="bigpic in productShow.list1">
 						<li>
	 						<div><a href="#"><img :src="bigpic.src" alt=""></a></div>
	 						<div><a href="#">{{ bigpic.name }}</a></div>
	 						<div class="price">{{bigpic.price }}元</div>
 						</li>
 					</ul>
 				</div>
 				<div class="min_pic">
 					<ul v-for="minpic in productShow.list2">
 						<li>
	 						<div><a href="#"><img :src="minpic.src" alt=""></a></div>
	 						<div><a href="#">{{minpic.name}}</a></div>
	 						<div class="price">{{minpic.price}}元</div>
	 					</li>
 					</ul>
 				</div>
 			</div><!-- index-content_list结束 -->
 		</div><!-- index-content_box结束 -->
 	</div><!-- index-content结束 -->

  </div>
</template>

<script>
import ComputerList from '../components/productList/computerList'
import PhoneList from '../components/productList/phoneList'
import HouseApp from '../components/productList/houseApp'
import KitchenApp from '../components/productList/kitchenApp'
import KitchenFood from '../components/productList/kitchenFood'

import SlideShow from '../components/slideShow'
export default {
  components:{
  	ComputerList,
  	SlideShow,
    PhoneList,
    HouseApp,
    KitchenApp,
    KitchenFood
  },
  methods: {
    // Show(index){
    //   if(index===0){
    //     this.isShow[0] = true
    //   }
      
    // },
    // clearShow(index){
    //   this.isShow[this.index] = false
    // }

  	Show(index) {
      switch(index){
        case 0:
        this.isShow0 = true;
        break;
        case 1:
        this.isShow1 = true;
        break;
        case 2:
        this.isShow2 = true;
        break;
        case 3:
        this.isShow3 = true;
        break;
        case 4:
        this.isShow4 = true;
        break;
      }	
  	},
    clearShow(index) {
      switch(index){
        case 0:
        this.isShow0 = false
        break;
        case 1:
        this.isShow1 = false
        break;
        case 2:
        this.isShow2 = false
        break;
        case 3:
        this.isShow3 = false
        break;
        case 4:
        this.isShow4 = false
        break;
      }     
    }
  },
  data () {
    return {
      isShow0: false,
      isShow1:false,
      isShow2:false,
      isShow3:false,
      isShow4:false,
      // isShow:[
      //   false,false,false,false,false
      // ],
      productShowList:[
      	{
      		title:'家用电脑',
      		src: require('../assets/index/index02.png'),
      		list1:[
      			{
      				src: require('../assets/index/index04.png'),
      				name: 'HTC新渴望系列',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index04.png'),
      				name: 'HTC新渴望系列',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index04.png'),
      				name: 'HTC新渴望系列',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index04.png'),
      				name: 'HTC新渴望系列',
      				price: '1899',
      				href: '#'
      			}
      		]
      		,
      		list2:[
      			{
      				src: require('../assets/index/index05.png'),
      				name: '全网低价 Apple苹果iPad mini 1',
      				price: '1888.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index05.png'),
      				name: '全网低价 Apple苹果iPad mini 1',
      				price: '1888.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index05.png'),
      				name: '全网低价 Apple苹果iPad mini 1',
      				price: '1888.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index05.png'),
      				name: '全网低价 Apple苹果iPad mini 1',
      				price: '1888.00',
      				href: '#'
      			}
      		]

      	},
      	{
      		title:'食品酒水',
      		src: require('../assets/index/index03.png'),
      		list1:[
      			{
      				src: require('../assets/index/index06.png'),
      				name: '三月美食狂享购',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index06.png'),
      				name: '三月美食狂享购',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index06.png'),
      				name: '三月美食狂享购',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index06.png'),
      				name: '三月美食狂享购',
      				price: '50',
      				href: '#'
      			}
      		],
      		list2:[
      			{
      				src: require('../assets/index/index07.png'),
      				name: '康比特 维他宝咀嚼片 60片',
      				price: '600.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index07.png'),
      				name: '康比特 维他宝咀嚼片 60片',
      				price: '600.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index07.png'),
      				name: '康比特 维他宝咀嚼片 60片',
      				price: '600.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index07.png'),
      				name: '康比特 维他宝咀嚼片 60片',
      				price: '600.00',
      				href: '#'
      			}
      		]

      	},
      	{
      		title:'家用电脑',
      		src: require('../assets/index/index02.png'),
      		list1:[
      			{
      				src: require('../assets/index/index04.png'),
      				name: 'HTC新渴望系列',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index04.png'),
      				name: 'HTC新渴望系列',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index04.png'),
      				name: 'HTC新渴望系列',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index04.png'),
      				name: 'HTC新渴望系列',
      				price: '1899',
      				href: '#'
      			}
      		]
      		,
      		list2:[
      			{
      				src: require('../assets/index/index05.png'),
      				name: '全网低价 Apple苹果iPad mini 1',
      				price: '1888.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index05.png'),
      				name: '全网低价 Apple苹果iPad mini 1',
      				price: '1888.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index05.png'),
      				name: '全网低价 Apple苹果iPad mini 1',
      				price: '1888.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index05.png'),
      				name: '全网低价 Apple苹果iPad mini 1',
      				price: '1888.00',
      				href: '#'
      			}
      		]

      	},
      	{
      		title:'食品酒水',
      		src: require('../assets/index/index03.png'),
      		list1:[
      			{
      				src: require('../assets/index/index06.png'),
      				name: '三月美食狂享购',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index06.png'),
      				name: '三月美食狂享购',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index06.png'),
      				name: '三月美食狂享购',
      				price: '1899',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index06.png'),
      				name: '三月美食狂享购',
      				price: '50',
      				href: '#'
      			}
      		],
      		list2:[
      			{
      				src: require('../assets/index/index07.png'),
      				name: '康比特 维他宝咀嚼片 60片',
      				price: '600.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index07.png'),
      				name: '康比特 维他宝咀嚼片 60片',
      				price: '600.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index07.png'),
      				name: '康比特 维他宝咀嚼片 60片',
      				price: '600.00',
      				href: '#'
      			},
      			{
      				src: require('../assets/index/index07.png'),
      				name: '康比特 维他宝咀嚼片 60片',
      				price: '600.00',
      				href: '#'
      			}
      		]

      	}
      ],
      productSort:[
      	{
      		title: '手机 数码',
      		list:[
      			{
      				href: '#',
      				name: '合约机',
      				hot: true
      			},
      			{
      				href: '#',
      				name: '荣耀3X',
      			},
      			{
      				href: '#',
      				name: '单反',
      			},
      			{
      				href: '#',
      				name: '智能设备',
      			}
      		]
      	},
      	{
      		title: '电脑 硬件设备',
      		list:[
      			{
      				href: '#',
      				name: '装机宝',
      			},
      			{
      				href: '#',
      				name: '笔记本',
      			},
      			{
      				href: '#',
      				name: '台式机',
      			},
      			{
      				href: '#',
      				name: '超极本',
      			},
      			{
      				href: '#',
      				name: '平板',
      			}
      		]
      	},
      	{
      		title: '大家电',
      		list:[
      			{
      				href: '#',
      				name: '电视机',
      			},
      			{
      				href: '#',
      				name: '冰箱',
      			},
      			{
      				href: '#',
      				name: '空调',
      			},
      			{
      				href: '#',
      				name: '洗衣机',
      			}
      		]
      	},
      	{
      		title: '厨房电器 生活电器',
      		list:[
      			{
      				href: '#',
      				name: '空气净化器',
      			},
      			{
      				href: '#',
      				name: '微博炉',
      			},
      			{
      				href: '#',
      				name: '取暖设备',
      			}
      		]
      	},
      	{
      		title: '食品/饮料/生抽',
      		list:[
      			{
      				href: '#',
      				name: '粮油',
      			},
      			{
      				href: '#',
      				name: '进口',
      			},
      			{
      				href: '#',
      				name: '方便面',
      			},
      			{
      				href: '#',
      				name: '零食',
      			},
      			{
      				href: '#',
      				name: '保健',
      			}
      		]
      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{width:100%;margin-bottom:10px;}

  .index-top{width:1000px;margin:0 auto;}
  /*.index-top_left*/
  .index-top_left{width:220px;height:350px;float: left;}
  .left_box{width:218px;height:68px;border:1px solid blue;color:#FFF;background:#4539FD;}
  .left_box h3{height: 20px;padding:10px 0 5px 10px;}
  .left_box ul li{height:30px;float: left;margin-left:5px;}
  .left_box:hover{background:white;color:black;border:1px solid blue;cursor: pointer;}
  .left_box ul li a:hover{color:red;text-decoration: underline;}

  /*.index-top_img 原生代码的css*/
  /*.index-top_img{width:780px;margin-left:220px;text-align: center;height: 348px;position: relative;}
  .img_box{}
  .img_box img{padding-top:2px;}
  .img_list{position:absolute;float: left;bottom:10px;width:200px;padding-left:318px;}
  .img_list a{display:inline-block;width:30px;height: 10px;background: #FFF;margin-right: 10px;cursor: pointer;}
  .img_list a:hover,.img_list a:active{background: yellow;} */

  /*.index-top_rigth*/
  .index-top_right{margin-left:220px;height:350px;position: relative;}
  .index-top_right_img{position: absolute;z-index: 2;}
  .index-top_right_list2{position: absolute;z-index:3;}

  /*index-content*/
  .index-content{width:1000px;margin:0 auto;}
  .index-content_box{width:1000px;height:460px;float: left;}
  /*.index-content_title*/
  .index-content_title{width: 1000px;height: 60px;line-height: 60px;}

  .title_left{float:left;font-size:22px;font-family: "微软雅黑";font-weight: bold;padding-left:60px;background: url('../assets/index/icon02.png') no-repeat left center;}
  .title_left a{color:black;}
  .title_right{float:right;padding-right:30px;font-size:10px;font-family: "微软雅黑";}
  .title_right a{color:#E8E8E8;}
  .title_left a:hover,.title_right a:hover{color:red;cursor: pointer;}
  /*.index-content_img*/
  .index-content_img{width:190px;height: 400px;float: left;}
  /*.index-content_list*/
  .index-content_list{width:796px;height: 398px;float: right;border:1px solid #E8E8E8;border-right: none;}
  .big_pic{width:796px;height: 257px;border-bottom: 1px solid #E8E8E8;}
  .min_pic{width:798px;height: 138px;}

  .big_pic li{width:198px;height: 258px;float:left;border-right: 1px solid #E8E8E8;text-align: center;}
  .min_pic li{width:198px;height: 140px;float:left;border-right: 1px solid #E8E8E8;text-align: center;}
  .big_pic li img{padding-top:10px;}
  .big_pic li a{font-size:16px;font-weight: bold;padding:10px 0;}
  .min_pic li img{padding-top: 5px;}
  .min_pic li a{font-size:12px;font-weight: bold;padding:10px 0;color: red;}
  .index-content_list a:hover{cursor: pointer;color: red;}

</style>















