<template>
	<div class="container">
		<div class="topImg">
			<a :href="productItd.href"><img :src="productItd.src1" alt="pic"></a>
		</div>
		<div class="text">
			<div class="text_top">
				<span class="text_titel">强烈推荐</span>
				<span>货币三家，还选</span>
			</div>
			<div class="text_detail">{{ productItd.text1}}</div>
		</div>
		<div class="bottomImg">
			<div class="text_top">
				<span class="text_titel">精美图片</span>
			</div>
			<div class="text_detail">{{ productItd.text2 }}</div>
			<img :src="productItd.src2" alt="pic">
		</div>
	</div>
</template>

<script>
export default{
	props:{
		productItd:{
			type: Object,
			default:[]
		}
	}
}
</script>

<style scoped>
.container{width:770px;padding:0 10px;}
.topImg{width:770px;height: 150px;text-align: center;line-height: 250px;padding:50px 0;}
.text{width:770px;}
.text_top{width: 770px;height: 30px;line-height: 30px;border-bottom:2px solid #999;}
.text_titel{width:80px;height:30px;font-size:16px;color:blue;margin-right:10px;border-bottom:2px solid blue;display: inline-block;}
.text_detail{height: 70px;width: 770px;padding:20px 0;font-size:14px;font-family: "微软雅黑";font-weight: normal;}
.bottomImg{width:770px;height: 670px;}
.bottomImg img{margin-left:10px;}

</style>

















































