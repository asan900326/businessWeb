<template>
	<div class="select">
		<div class="select_container">
			<div class="select_left">
				<div class="select_left_top">
					<side-bar :sortList="sortList" :totalTitle="totalTitle"></side-bar>
				</div>
				<div class="select_left_bottom">
					<side-image :imageList="imageList"></side-image>
				</div>
			</div><!-- left结束 -->

			<div class="select_right">
				<div class="select_right_top">
					<select-option :optionSortTitle="optionSortTitle" :optionSorts="optionSorts" :optionList="optionList" :buttons="buttons"></select-option>
				</div>
				<div class="select_right_img">
					<select-img :productList="productList" :pages="pages" ></select-img>
				</div>
			</div><!-- right结束 -->
		</div><!-- select_container结束 -->

	</div><!-- select结束 -->
</template>

<script>
import SideBar from '../components/sideBar'
import SideImage from '../components/sideImage'
import SelectOption from '../components/selectOption/selectOption'
import SelectImg from '../components/selectOption/selectImg'

export default{
	components:{
		SideBar,
		SideImage,
		SelectOption,
		SelectImg
	},
	data (){
		return{
			pages:[
				{key:0,href:'#'},
				{key:1,href:'#'},
				{key:2,href:'#'},
				{key:3,href:'#'},
				{key:4,href:'#'},
				{key:5,href:'#'},
				{key:6,href:'#'},
				{key:7,href:'#'},
				{key:8,href:'#'},
				{key:9,href:'#'}
			],
			productList:[
				{
					href:'#',
					src: require('../assets/selected/big01.png'),
					hot:true,
					sale:false,
					description:'小米 红米 3G(GSM/TD-SCDMA)手机 灰色',
					price: '1150.00',
					num:4886
				},
				{
					href:'#',
					src: require('../assets/selected/big02.png'),
					hot:true,
					sale:false,
					description:'G HONG 国虹 V10 海豚 3G (GSM/TD-SCDMA）双卡双待 手机 白色',
					price: '539.00',
					num:4389
				},
				{
					href:'#',
					src: require('../assets/selected/big03.png'),
					hot:false,
					sale:true,
					description:'Apple 苹果 iPhone 4 8G(GSM/TD-SCDMA)手机 白色',
					price: '2178.00',
					num: 8060
				},
				{
					href:'#',
					src: require('../assets/selected/big04.png'),
					hot:false,
					sale:false,
					description:'Nokia 诺基亚 1050 GSM手机 黑色',
					price: '169.00',
					num:3222
				}
				,
				{
					href:'#',
					src: require('../assets/selected/big05.png'),
					hot:true,
					sale:false,
					description:'小米3 移动3G(GSM/TD-SCDMA)16G版 手机 星空灰',
					price: '2399.00',
					num:3929
				},
				{
					href:'#',
					src: require('../assets/selected/big06.png'),
					hot:false,
					sale:false,
					description:'Nokia 诺基亚 1050 GSM手机 蓝色',
					price: '169.00',
					num:2782
				},
				{
					href:'#',
					src: require('../assets/selected/big01.png'),
					hot:true,
					sale:false,
					description:'小米 红米 3G(GSM/TD-SCDMA)手机 灰色',
					price: '1150.00',
					num:4886
				},
				{
					href:'#',
					src: require('../assets/selected/big02.png'),
					hot:true,
					sale:false,
					description:'G HONG 国虹 V10 海豚 3G (GSM/TD-SCDMA）双卡双待 手机 白色',
					price: '539.00',
					num:4389
				},
				{
					href:'#',
					src: require('../assets/selected/big03.png'),
					hot:false,
					sale:true,
					description:'Apple 苹果 iPhone 4 8G(GSM/TD-SCDMA)手机 白色',
					price: '2178.00',
					num: 8060
				},
				{
					href:'#',
					src: require('../assets/selected/big04.png'),
					hot:false,
					sale:false,
					description:'Nokia 诺基亚 1050 GSM手机 黑色',
					price: '169.00',
					num:3222
				}
				,
				{
					href:'#',
					src: require('../assets/selected/big05.png'),
					hot:true,
					sale:false,
					description:'小米3 移动3G(GSM/TD-SCDMA)16G版 手机 星空灰',
					price: '2399.00',
					num:3929
				},
				{
					href:'#',
					src: require('../assets/selected/big06.png'),
					hot:false,
					sale:false,
					description:'Nokia 诺基亚 1050 GSM手机 蓝色',
					price: '169.00',
					num:2782
				}
			],
			buttons:[
				{name:'CPU核心数'},
				{name:'主摄像头像素'}
			],
			optionList:[
				{
					title:'品牌',
					list:[
						{name:'Samsung/三星',href:'#'},
						{name:'Apple/苹果',href:'#'},
						{name:'Huawei/华为',href:'#'},
						{name:'Miui/小米',href:'#'},
						{name:'Lenovo/联想',href:'#'},
						{name:'Sony/索尼',href:'#'},
						{name:'HTC/宏达电',href:'#'},
						{name:'Coolpad/酷派',href:'#'},
						{name:'Meizu/魅族',href:'#'},
						{name:'Bbk/步步高',href:'#'},
						{name:'Oppo/欧珀',href:'#'},
						{name:'Motorola/摩托罗拉',href:'#'},
						{name:'Vivo/维沃',href:'#'},
						{name:'Nokia/诺基亚',href:'#'},
						{name:'King/金立',href:'#'},
						{name:'harmer/锤子',href:'#'},
						{name:'其他',href:'#'}
					]	
				},
				{
					title:'屏幕尺寸',
					list:[
						{name:'超大屏幕(>5.9英寸)',href:'#'},
						{name:'大屏幕(4.8-5.8英寸)',href:'#'},
						{name:'主流屏幕尺寸(4.0-4.7英寸)',href:'#'},
						{name:'小屏幕(<4.0英寸)',href:'#'},
					]	
				},
				{
					title:'操作系统',
					list:[
						{name:'Android',href:'#'},
						{name:'iOS',href:'#'},
						{name:'windows phone',href:'#'},
						{name:'symbian',href:'#'},
						{name:'非智能机',href:'#'},
					]	
				},
				{
					title:'通用网络格式',
					list:[
						{name:'4G(TD-LTE)',href:'#'},
						{name:'4G(FDD-LTE)',href:'#'},
						{name:'移动3G(TD-SCDMA)',href:'#'},
						{name:'地洞3.5G(TD-HSDPA)',href:'#'},
					]	
				}
				
			],
			optionSortTitle: '手机',
			optionSorts:[		
				{name:'裸机',href:'#'},
				{name:'合约机',href:'#'}
			],
			imageList:[
				{
					href: '#',
					src: require('../assets/selected/min01.png'),
					description: '全网低价 Apple苹果 ipad mini1',
					price: '2088.00'
				},
				{
					href: '#',
					src: require('../assets/selected/min02.png'),
					description: 'Haier 海尔 JSQ20-e2(12-T)',
					price: '1689.00'
				},
				{
					href: '#',
					src: require('../assets/selected/min03.png'),
					description: 'Apple 苹果 iPhone 5s 16G',
					price: '4979.00'
				},
				{
					href: '#',
					src: require('../assets/selected/min04.png'),
					description: '（二手）AKG 爱科技 K420 头戴耳机',
					price: '205.00'
				},
				{
					href: '#',
					src: require('../assets/selected/min05.png'),
					description: 'TAMRON 腾龙 SP 90mm F/2.8',
					price: '3680.00'
				}
			],
			totalTitle:'产品分类',
			sortList:[
				{
					title:'手机通讯录',
					titleHref:'#',
					list:[
						{name:'手机',href:'#'},
						{name:'对讲机',href:'#'}
					]
				},
				{
					title:'运营商',
					titleHref:'#',
					list:[
						{name:'购机送费',href:'#'},
						{name:' “0”元购机',href:'#'},
						{name:' 选号入网',href:'#'}
					]
				},
				{
					title:'手机配件',
					titleHref:'#',
					list:[
						{name:'手机电池',href:'#'},
						{name:'蓝牙耳机',href:'#'},
						{name:'充电线/数据线',href:'#'},
						{name:'手机耳机',href:'#'},
						{name:'手机贴膜',href:'#'},
						{name:'手机储存卡',href:'#'},
						{name:'手机保护套',href:'#'},
						{name:'车载配件',href:'#'},
						{name:'iPhone配件',href:'#'},
					]
				}
			]
		}
	}
}
</script>

<style>
.select{width:100%;margin-top:10px;}
.select_container{width:1000px;margin:0 auto;}	

.select_left{width:190px;float: left;}
.select_right{width:800px;float: left;margin-left:10px;}

.select_right_img{width:800px;margin-top:15px;}

</style>























