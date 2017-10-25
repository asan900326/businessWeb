<template>
	<div class="introduction">
		<div class="container">
			<div class="container_list">
				<ul>
					<li><a href="">首页</a></li>
					<li>></li>
					<li><a href="">平板电脑</a></li>
					<li>></li>
					<li><a href="">Apple 苹果</a></li>
					<li>></li>
					<li><a href="">MD531CH/A</a></li>
				</ul>
			</div>
			<div class="introduction_top">
				<div class="introduction_top_left">
					<picture-show :pictures="pictures"></picture-show>	
					
				</div><!-- introduction_top_left结束 -->
				<div class="introduction_top_right">
					<choice-show :choice="choice"></choice-show>
				</div><!-- introduction_top_right结束 -->
			</div><!-- introduction_top结束 -->
		</div><!-- container结束 -->
		
		<div class="bottom">
			<div class="bottom_left">
				<div class="sidebar1">
					<left-pic :sameTitle='sameTitle' :sameProduct="sameProduct" :buyShop="buyShop" :oldTitle="oldTitle"></left-pic>
				</div>
			</div><!-- bottom_left结束 -->

			<div class="bottom_right">
				<div class="nav">
					<div :class="[{active: isActive},class1]" @click="change1">产品介绍</div>
					<div :class="[{active: !isActive},class2]" @click="change2">商品评价</div>
				</div>
				<div class="show_introduction" v-if="isShow1">
					<show-introduction :productItd="productItd"></show-introduction>
				</div>
				<div class="show_judge">
					<show-judge></show-judge>
				</div>
				<div class="consult">
					<consult></consult>
				</div>
			</div>
		</div><!-- bottom结束 -->
	</div><!-- introduction结束 -->
</template>

<script>
import PictureShow from '../components/introduction/pictureShow'
import ChoiceShow from '../components/introduction/choiceShow'
import LeftPic from '../components/introduction/leftPic'
import ShowIntroduction from '../components/introduction/showIntroduction'
import ShowJudge from '../components/introduction/showJudge'
import Consult from '../components/introduction/consult'


export default{
	components:{
		PictureShow,
		ChoiceShow,
		LeftPic,
		ShowIntroduction,
		ShowJudge,
		Consult
	},
	methods:{
		change1(){
			this.isShow1 = true
			if(this.isActive === false){
				this.isActive =true
			}
		},
		change2(){
			this.isShow1 = false
			if(this.isActive === true){
				this.isActive =false
			}
		}
	},
	data (){
		return{
			isShow1:true,
			isActive:true,
			class1:'nav_introduction',
			class2: 'nav_judge',
			productItd:{
				href:'#',
				src1: require('../assets/product/pic01.png'),
				src2: require('../assets/product/pic02.png'),
				text1: '现在就是买mini的还是后！换代清仓直降，但苹果品质不变！A5双核，内置Lightning闪电接口，正反可插，方便人性。小身材，炫丽的7.9英寸显示屏，7.2mm的厚度，薄如铅笔。女生包包随身携带更时尚！facetime视屏通话，与密友24小时畅聊不断线。微信倾力打造，你的智能助理。苹果的牌子就不用我说了，1111补仓，存货不多哦!',
				text2:'苹果ipad7.9英寸显示屏可带来新的ipad体验，炫丽的显示屏，在每一寸画面中呈现灵动鲜活的美妙影像。苹果miniMD528CH/A采用500万像素iSight摄像头，清晰记录每一次的幸福。'
			},
			sameTitle:'同价位', //套用leftPic组件
			oldTitle:'最终买了',
			buyShop:[
				{
					href:'#',
					src: require('../assets/product/side05.png'),
					description:'Samsung 三星 GALAXY Tab 3 8.0 SLAN版本 T310平板电话',
					price: '3588.00'
				},
				{
					href:'#',
					src: require('../assets/product/side06.png'),
					description:'Samsung 三星 GALAXY Tab 3 8.0 SLAN版本 T310平板电话',
					price: '2588.00'
				},
				{
					href:'#',
					src: require('../assets/product/side07.png'),
					description:'Samsung 三星 GALAXY Tab 3 8.0 SLAN版本 T310平板电话',
					price: '3128.00'
				}
			],
			sameProduct:[    //leftPic组件
				{
					href:'#',
					src: require('../assets/product/side01.png'),
					description:'Samsung 三星 GALAXY Tab 3 8.0 SLAN版本 T310平板电话',
					price: '3588.00'
				},
				{
					href:'#',
					src: require('../assets/product/side02.png'),
					description:'Samsung 三星 GALAXY Tab 3 8.0 SLAN版本 T310平板电话',
					price: '2588.00'
				},
				{
					href:'#',
					src: require('../assets/product/side03.png'),
					description:'Samsung 三星 GALAXY Tab 3 8.0 SLAN版本 T310平板电话',
					price: '3128.00'
				},
				{
					href:'#',
					src: require('../assets/product/side04.png'),
					description:'Samsung 三星 GALAXY Tab 3 8.0 SLAN版本 T310平板电话',
					price: '2988.00'
				}


			],
			choice:       //choiceShow组件的内容
				{
				title: '全网底价 Apple 苹果 iPad mini 16G 平板电脑 前白后银 MD531CH/A 银白两色生产批次不同回合发货',
				price:'1999.00',
				sale:'购ipad加价优惠购配件或USB充电插座',
				colorlist:['白色','黑色','灰色'],
				sizelist:['WIFI 16G','WIFI 64G','WIFI 32G','WIFI Cellular 32G','WIFI Cellular 64G','WIFI Cellular 16G']
				},
			pictures:[   //pictureShow组件的内容
				{
					bigsrc:require('../assets/product/ipadbig01.png'),
					minsrc:require('../assets/product/ipadmin01.png')
				},
				{
					bigsrc:require('../assets/product/ipadbig02.png'),
					minsrc:require('../assets/product/ipadmin02.png')
				},
				{
					bigsrc:require('../assets/product/ipadbig03.png'),
					minsrc:require('../assets/product/ipadmin03.png')
				},
				{
					bigsrc:require('../assets/product/ipadbig04.png'),
					minsrc:require('../assets/product/ipadmin04.png')
				}
			]
		}
	}
}
</script>

<style scoped>
.introduction{width:100%; margin-top:20px;}
.container{width:1000px;margin:0 auot;}
/*container_list*/
.container_list{height:20px;}
.container_list li{float:left;padding-right:5px;}
.container_list li a{color: black;font-size:12px;}
.container_list li a:hover{color: red;}

/*introduction_top*/
.introduction_top{width:998px;height: 598px;border:1px solid #999;background:#FFF; margin-top:10px;}

.introduction_top_left{width:298px;height:598px;border-right:1px solid #999;float: left;}
.introduction_top_right{width:699px;height: 598px;}

.bottom{width:1000px;margin:0 auto;margin-top:10px;}
.bottom_left{width:190px;float: left;}
.bottom_right{width:790px;margin-left:208px;}
.nav{width:790px;height: 40px;border:1px solid #999;border-bottom: none;}
.nav_introduction{float:left;width:394px;height: 40px;line-height: 40px;text-align: center;border-right:1px solid #999;font-size:14px;font-weight: bold;cursor: pointer;}
.nav_judge{float:left;width:395px;height: 40px;line-height: 40px;text-align: center;font-size:14px;font-weight: bold;cursor: pointer;}

.show_introduction{width:790px;background: #FFF;border:1px solid #999;margin-bottom:20px;}
.show_judge{width: 790px;background: #FFF;border:1px solid #999;}
.active{background-color: blue;color:#FFF;}

.consult{background-color:#FFF;margin-top:20px;}

</style>








































