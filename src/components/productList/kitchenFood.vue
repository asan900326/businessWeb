<template>
	<div class="kitchenFood">
		<div v-for="kitchenFood in kitchenFoodList" class="kitchenFood_box">
		   <div class="kitchenFood_box_container">
		   		<ul v-for="item in kitchenFood.list">
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
			kitchenFoodList:[
				{
					list:[
						{name:'食品分类',href:'#',isTitle:true},
						{name:'甜食',href:'#'},
						{name:'熟食',href:'#'},
						{name:'辣食',href:'#'},
						{name:'海鲜味',href:'#'},
						{name:'椒盐味',href:'#'},
						{name:'国外食品',href:'#'},
						{name:'名食',href:'#'},
						{name:'特价',href:'#'}
					]
				},
				{
					list:[
						{name:'家用调品',href:'#',isTitle:true},
						{name:'盐巴',href:'#'},
						{name:'醋',href:'#'},
						{name:'食用油',href:'#'},
						{name:'豆瓣酱',href:'#'},
						{name:'香料',href:'#'},
						{name:'花椒',href:'#'},
						{name:'辣椒',href:'#'},
						{name:'胡椒',href:'#'}
					]
				},
				{
					list:[
						{name:'零食',href:'#',isTitle:true},
						{name:'方便面',href:'#'},
						{name:'蛋黄派',href:'#'},
						{name:'沙琪玛',href:'#'},
						{name:'巧克力',href:'#'},
						{name:'薯片',href:'#'},
						{name:'青豆',href:'#'},
						{name:'鱼豆腐',href:'#'},
						{name:'饼干',href:'#'},
						{name:'泡椒鸡爪',href:'#'},
						{name:'瓜子',href:'#'},
					]
				},
				{
					list:[
						{name:'饮料',href:'#',isTitle:true},
						{name:'芬达',href:'#'},
						{name:'雪碧',href:'#'},
						{name:'可乐',href:'#'},
						{name:'豆奶',href:'#'},
						{name:'咖啡',href:'#'},
						{name:'王老吉',href:'#'},
						{name:'茶派',href:'#'},
						{name:'哇哈哈',href:'#'},
						{name:'雪梨',href:'#'}
					]
				},
				{
					list:[
						{name:'其他产品',href:'#',isTitle:true},
						{name:'豆奶',href:'#'},
						{name:'燕窝',href:'#'},
						{name:'养生粥',href:'#'},
						{name:'黑黑乳',href:'#'},
						{name:'青汁饮品',href:'#'},
						{name:'澳洲牛奶',href:'#'},
						{name:'果冻',href:'#'},
						{name:'奶酪',href:'#'}
					]
				}
			]
		}
	}
}
</script>

<style scoped>
.kitchenFood{width:530px;border:1px solid #E8E8E8;background: #FFF;}
.kitchenFood_box{width:490px;height:50px;line-height:50px;border-bottom: 1px dotted #E8E8E8;padding:0 20px;}
.kitchenFood_box_container{height: 20px;line-height: 20px;padding-top:10px;}
.kitchenFood_box li{float:left;display: inline-block;height: 10px;padding:0 8px 5px 0;}
.kitchenFood_box li a{color: black;font-size:10px;}
.kitchenFood_box li a:hover{color:red;cursor: pointer;}
.title{color: red;font-size:14px;margin-right:10px;}
</style>


























