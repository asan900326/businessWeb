<template>
	<div class="computer">
		<div v-for="computer in computerList" class="computer_box">
		   <div class="computer_box_container">
		   		<ul v-for="item in computer.list">
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
			computerList:[
				{
					list:[
						{name:'电脑整机',href:'#',isTitle:true},
						{name:'笔记本',href:'#'},
						{name:'超极本',href:'#'},
						{name:'上网本',href:'#'},
						{name:'平板电脑',href:'#'},
						{name:'台式机',href:'#'}
					]
				},
				{
					list:[
						{name:'装机配件',href:'#',isTitle:true},
						{name:'CPU',href:'#'},
						{name:'硬盘',href:'#'},
						{name:'SSD固态硬盘',href:'#'},
						{name:'内存',href:'#'},
						{name:'显示器',href:'#'},
						{name:'智能显示器',href:'#'},
						{name:'主板',href:'#'},
						{name:'显卡',href:'#'},
						{name:'机箱',href:'#'},
						{name:'电源',href:'#'},
						{name:'散热器',href:'#'},
						{name:'刻录机/光驱',href:'#'},
						{name:'声卡',href:'#'},
						{name:'拓展卡',href:'#'},
						{name:'服务器配件',href:'#'},
						{name:'DIY小附件',href:'#'},
						{name:'装机/配件安装',href:'#'}
					]
				},
				{
					list:[
						{name:'整机附件',href:'#',isTitle:true},
						{name:'电脑包',href:'#'},
						{name:'电脑桌',href:'#'},
						{name:'电池',href:'#'},
						{name:'电源适配器',href:'#'},
						{name:'贴膜',href:'#'},
						{name:'清洁用品',href:'#'},
						{name:'笔记本散热器',href:'#'},
						{name:'USB拓展',href:'#'},
						{name:'平板配件',href:'#'},
						{name:'特色附件',href:'#'},
						{name:'插座网线/电话线',href:'#'},
						{name:'影音线材',href:'#'},
						{name:'电脑线材',href:'#'}
					]
				},
				{
					list:[
						{name:'电脑外设',href:'#',isTitle:true},
						{name:'鼠标',href:'#'},
						{name:'键盘',href:'#'},
						{name:'游戏外设',href:'#'},
						{name:'移动硬盘',href:'#'},
						{name:'摄像头',href:'#'},
						{name:'高清播放器',href:'#'},
						{name:'外置盒',href:'#'},
						{name:'移动硬盘包',href:'#'},
						{name:'手写板/绘图板',href:'#'}
					]
				},
				{
					list:[
						{name:'网络设备',href:'#',isTitle:true},
						{name:'路由器',href:'#'},
						{name:'网卡',href:'#'},
						{name:'3G无线上网',href:'#'},
						{name:'交换机',href:'#'},
						{name:'网络储存',href:'#'},
						{name:'布线工具',href:'#'},
						{name:'网络配件',href:'#'},
						{name:'正版软件',href:'#'}
					]
				},
				{
					list:[
						{name:'音频设备',href:'#',isTitle:true},
						{name:'音箱',href:'#'},
						{name:'耳机/耳麦',href:'#'},
						{name:'声卡',href:'#'},
						{name:'音频附件',href:'#'},
						{name:'录音笔',href:'#'}
					]
				}
			]
		}
	}
}
</script>

<style scoped>
.computer{width:530px;border:1px solid #E8E8E8;background: #FFF;}
.computer_box{width:490px;height:50px;line-height:50px;border-bottom: 1px dotted #E8E8E8;padding:0 20px;}
.computer_box_container{height: 20px;line-height: 20px;padding-top:10px;}
.computer_box li{float:left;display: inline-block;height: 10px;padding:0 8px 5px 0;}
.computer_box li a{color: black;font-size:10px;}
.computer_box li a:hover{color:red;cursor: pointer;}
.title{color: red;font-size:14px;margin-right:10px;}
</style>


























