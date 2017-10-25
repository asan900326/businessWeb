<template>
	<div class="phone">
		<div v-for="phone in phoneList" class="phone_box">
		   <div class="phone_box_container">
		   		<ul v-for="item in phone.list">
					<li >
						<a href="#" v-bind:class="{ title: item.isTitle}">
						{{ item.name }}
						</a>
					</li>
				</ul>
		   </div>	
		</div>
	</div>
</template>

<script>
export default{
	data (){
		return{
			phoneList:[
				{
					list:[
						{name:'手机品牌',href:'#',isTitle:true},
						{name:'苹果',href:'#'},
						{name:'小米',href:'#'},
						{name:'华为',href:'#'},
						{name:'魅族',href:'#'},
						{name:'三星',href:'#'},
						{name:'oppo',href:'#'},
						{name:'vivo',href:'#'},
						{name:'锤子',href:'#'},
						{name:'金立',href:'#'},
						{name:'诺基亚',href:'#'}
					]
				},
				{
					list:[
						{name:'手机配件',href:'#',isTitle:true},
						{name:'屏保',href:'#'},
						{name:'手机壳',href:'#'},
						{name:'耳机',href:'#'},
						{name:'数据线',href:'#'},
						{name:'音箱',href:'#'},
						{name:'服务器配件',href:'#'},
						{name:'DIY小附件',href:'#'},
						{name:'装机/配件安装',href:'#'}
					]
				},
				{
					list:[
						{name:'数码品牌',href:'#',isTitle:true},
						{name:'Nikon/尼康',href:'#'},
						{name:'Panasonic/松下',href:'#'},
						{name:'Cannon/佳能',href:'#'},
						{name:'Sony/索尼',href:'#'},
						{name:'Honor/荣耀',href:'#'},
						{name:'Sumsung/三星',href:'#'},
						{name:'Meizu/魅族',href:'#'},
						{name:'philips/飞利浦',href:'#'},
						{name:'OPPO',href:'#'},
						{name:'小米',href:'#'},
					]
				},
				{
					list:[
						{name:'数码配件',href:'#',isTitle:true},
						{name:'背包',href:'#'},
						{name:'支架',href:'#'},
						{name:'摄像头',href:'#'},
						{name:'移动硬盘',href:'#'},
						{name:'转接头',href:'#'},
						{name:'高清播放器',href:'#'},
						{name:'清洗套装',href:'#'},
						{name:'DIY小附件',href:'#'},
						{name:'手写板/绘图板',href:'#'}
					]
				},
				{
					list:[
						{name:'其他配件',href:'#',isTitle:true},
						{name:'路由器',href:'#'},
						{name:'网卡',href:'#'},
						{name:'3G无线上网',href:'#'},
						{name:'交换机',href:'#'},
						{name:'网络储存',href:'#'},
						{name:'布线工具',href:'#'},
						{name:'网络配件',href:'#'},
						{name:'正版软件',href:'#'}
					]
				}
			]
		}
	}
}
</script>

<style scoped>
.phone{width:530px;border:1px solid #E8E8E8;background: #FFF;}
.phone_box{width:490px;height:50px;line-height:50px;border-bottom: 1px dotted #E8E8E8;padding:0 20px;}
.phone_box_container{height: 20px;line-height: 20px;padding-top:10px;}
.phone_box li{float:left;display: inline-block;height: 10px;padding:0 8px 5px 0;}
.phone_box li a{color: black;font-size:10px;}
.phone_box li a:hover{color:red;cursor: pointer;}
.title{color: red;font-size:14px;margin-right:10px;}
</style>


























