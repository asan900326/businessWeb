<template>
	<div class="sideImage">
		<ul v-for="image in imageList">
			<li>
				<div class="image"><a :href="image.href"><img :src="image.src" alt="pic"></a></div>
				<div class="description"><a :href="image.href">{{ image.description}}</a></div>
				<div class="price">￥{{ image.price}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	props:{
		imageList:{
			type: Array,
			default:[]
		}
	}
}
</script>

<style scoped>
.sideImage{border:1px dotted #E8E8E8;border-top:none;width:188px;}
.sideImage li{widows: 178px;height: 80px;padding:5px;}
.image{float: left;width:80px;text-align: center;}
.description a{color:#999;font-weight: normal;}
.price{margin-top:5px;}
.sideImage li a:hover{color:red;}


</style>
