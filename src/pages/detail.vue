<template>
	<div class="detail">
		<div class="detail_container">
			<div class="detail_left">
				<h2 class="detail_left_title">手机、相机、数码</h2>
				<div v-for="digital in digitalList" class="detail_left_box">
					<h3 >
						<a :href="digital.titleHref">{{ digital.title }}</a>
					</h3>
					<ul v-for="goods in digital.list">
						<li>
							<a :href="goods.href">{{ goods.name }}</a>
						</li>
					</ul>
				</div><!-- detail_left_box结束 -->
			</div><!-- detail_left结束 -->

			<div class="detail_right">
				<div class="detail_right_img">
					<a href="#"><img src="../assets/detail/detail01.png" alt="图片"></a>
				</div>
				<div class="detail_right_show">
					<div class="show_container" v-for="shopping in shoppingList"> 
						<div class="show_container_top">
							<h2>{{shopping.title}}</h2>
						</div>
						<div class="show_container_list">
							<ul v-for="item in shopping.list">
								<li>
									<div class="show_container_list_img"><a href="#"><img :src="item.src" alt="pic"></a></div>
									<div class="show_container_list_description"><a href="#">{{item.description }}</a></div>
									<div class="show_container_list_price">￥{{item.price}}</div>
									<span class="show_container_list_comment">评论：</span>
									<span class="show_container_list_comment-num" 	>({{item.num}}条)</span>	
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!-- detail_container结束 -->
	</div>
</template>

<script>
export default{
	data (){
		return{
			shoppingList:[
				{
					title:'数码影像',
					list:[
						{
							src: require('../assets/detail/detail02.png'),
							description: 'Canon 佳能 IXUS 132数码相机 粉色（1600像素 LCD）',
							price: '699.00'	,
							num: '79'
						},
						{
							src: require('../assets/detail/detail03.png'),
							description: 'Canon 佳能 PowerShot N数码相机 白色 礼盒装',
							price: '2199.00',
							num: '59'	
						},
						{
							src: require('../assets/detail/detail04.png'),
							description: '全网低价 Fujifilm 富士FinePix JX710数码相机 粉色',
							price: '349.00',
							num: '30'
						},
						{
							src: require('../assets/detail/detail05.png'),
							description: 'Canon 佳能 EOS 60D 单反套机（EF-S 18-135IS）',
							price: '6099.00',
							num: '48'	
						},
						{
							src: require('../assets/detail/detail06.png'),
							description: 'SONY 索尼DSC-TX66数码相机 粉色（1820万像素/3.3英寸）',
							price: '969.00'	,
							num: '28'
						},
						{
							src: require('../assets/detail/detail07.png'),
							description: 'Canon 佳能 LEGRIA HFR506 摄像机 白色',
							price: '2799.00',
							num: '109'	
						},
						{
							src: require('../assets/detail/detail08.png'),
							description: 'Samsung 三星 GALAXY Tab3 3G版 T111 7英寸平板电脑',
							price: '1698.00',
							num: '66'	
						},
						{
							src: require('../assets/detail/detail09.png'),
							description: '全网底价 Sony 索尼 NEX-3NL 16-50mm 单变焦镜头套装 粉色',
							price: '2430.00',
							num: '28'	
						}
						
					]
				},
				{
					title:'娱乐影音',
					list:[
						{
							src: require('../assets/detail/detail10.png'),
							description: 'KSD 凯仕达 USB 电脑 跳舞毯（即接即用，性价比强，纯中文）',
							price: '39.90',
							num: '16'	
						},
						{
							src: require('../assets/detail/detail11.png'),
							description: 'Apple 苹果 iPod touch4 32G MD058CH/A 白色 多媒体播放',
							price: '1359.00',
							num: '15'	
						},
						{
							src: require('../assets/detail/detail12.png'),
							description: 'lepow乐泡 磐石6000 通用型 移动电源 大黄鸭定制版本',
							price: '139.00',
							num: '99'	
						},
						{
							src: require('../assets/detail/detail13.png'),
							description: 'Youwin 友多闻 UDN708 天乙四核手机平板 7英寸 IPS全贴',
							price: '799.00'	,
							num: '176'
						},
						{
							src: require('../assets/detail/detail14.png'),
							description: '天韵 2CJTBD 2寸吉他背带（黑色.花色）',
							price: '12.00',
							num: '37'	
						},
						{
							src: require('../assets/detail/detail15.png'),
							description: 'Philips 飞利浦 SPF1127/93 7英寸 数码相框 白色',
							price: '259.00',
							num: '179'	
						},
						{
							src: require('../assets/detail/detail16.png'),
							description: 'ibody Rainbow 蓝牙健康追踪器 蓝色',
							price: '239.00',
							num: '79'	
						},
						{
							src: require('../assets/detail/detail17.png'),
							description: 'SmartQ 智器 ZWatch 智能手表 开启可穿戴式达人酷毙生活',
							price: '699.00',
							num: '223'	
						}
						
					]
				}

			],
			digitalList:[
				{
					title:'手机通讯',
					titleHref:'#',
					list:[
						{name:'全部手机',href:'#'},
						{name:'1080P高清',href:'#'},
						{name:'双卡手机',href:'#'},
						{name:'拍照神器',href:'#'},
						{name:'老年手机',href:'#'},
						{name:'对讲机',href:'#'},
						{name:'联通专区',href:'#'}					
						]
				},
				{
					title:'数码相机',
					titleHref:'#',
					list:[
						{name:'卡片机',href:'#'},
						{name:'中长焦',href:'#'},
						{name:'专业便',href:'#'},
						{name:'携自拍神器',href:'#'},
						{name:'防水防摔',href:'#'},
						{name:'一次成像',href:'#'}
						]
				},
				{
					title:'单反',
					titleHref:'#',
					list:[
						{name:'全部',href:'#'},
						{name:'佳能',href:'#'},
						{name:'尼康',href:'#'},
						{name:'宾得',href:'#'},
						{name:'哈苏',href:'#'}
						]
				},
				{
					title:'镜头',
					titleHref:'#',
					list:[
						{name:'单反镜头',href:'#'},
						{name:'微单镜头',href:'#'}
						]
				},
				{
					title:'摄像机',
					titleHref:'#',
					list:[
						{name:'全部',href:'#'},
						{name:'索尼',href:'#'},
						{name:'松下',href:'#'},
						{name:'佳能',href:'#'},
						{name:'三星',href:'#'}
						]
				},
				{
					title:'摄像配件',
					titleHref:'#',
					list:[
						{name:'相机包',href:'#'},
						{name:'相机电池',href:'#'},
						{name:'贴膜',href:'#'},
						{name:'滤镜',href:'#'},
						{name:'三脚架',href:'#'},
						{name:'闪光灯',href:'#'},
						{name:'遮光罩',href:'#'},
						{name:'遥控器',href:'#'},
						{name:'专业配件',href:'#'},
						{name:'清洁用品',href:'#'},
						{name:'望远镜',href:'#'}						
						]
				},
				{
					title:'数码储存',
					titleHref:'#',
					list:[
						{name:'刻录盘片',href:'#'},
						{name:'盘片附件',href:'#'}
						]
				},
				{
					title:'电子教育',
					titleHref:'#',
					list:[
						{name:'电子书',href:'#'},
						{name:'盘电子词典',href:'#'},
						{name:'幼儿教育',href:'#'},
						{name:'智能学习',href:'#'},
						{name:'录音笔',href:'#'}
						]
				}
			]
		}
	}
}
</script>

<style>
.detail{width: 100%;margin-top:15px;}
.detail_container{width:1000px;margin:0 auto;}
/*detail_left*/
.detail_left{width:183px;background: #E8E8E8;float: left;border:1px solid gray;border-bottom: none;}
.detail_left_title{width:184px;height:35px;text-align: center;line-height: 35px;font-size:16px;font-family: '微软雅黑';font-weight: normal;border-bottom: 1px solid gray;}

.detail_left_box{width:183px;min-height: 55px;border-bottom:1px solid gray;}
.detail_left_box h3{width:183px;height: 30px;line-height: 30px;padding-left: 20px;}
.detail_left_box h3 a{font-size:14px;color: black;font-weight: normal;}
.detail_left_box ul{width:143px;padding:0 20px 5px;/*background: green;*/}
.detail_left_box ul li{width:70px;height: 20px;line-height: 20px;}
.detail_left_box ul li a{color: #999;font-size:10px;}
.detail_left_box ul li a:hover{cursor: pointer;color: red;}

/*.detail_right*/
.detail_right{width:810px;float: left;margin-left:5px;;}
.detail_right_img{width:810px;height:330px;text-align: center;}
.detail_right_img img{border: none;}
.detail_right_show{width:810px;margin-top:5px;}

.show_container{width:810px;height:600px;}
.show_container_top{width:810px;height: 28px;border-bottom: 2px solid #999;}
.show_container_top h2{width: 160px;height:28px;padding-left:10px;border-bottom: 2px solid blue }

.show_container_list{width: 810px;}
.show_container_list  ul li{float:left;width:190px;height:270px;padding:0 5px;}
.show_container_list_img{height: 175px;line-height: 175px;text-align: center;}
.show_container_list_description{color:black;padding:5px;}
.show_container_list_description a:hover{color:red;text-decoration: underline;}
.show_container_list_price{color:red;font-weight: bold;font-size:14px;height: 20px;line-height: 20px;}
.show_container_list_comment-num{background: url('../assets/detail/icon01.png') no-repeat left center;padding-left:80px;}

</style>
























