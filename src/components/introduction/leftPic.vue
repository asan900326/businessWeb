<template>
	<div class="leftPic">
		<div class="top">
			<div class="title">{{ sameTitle }}</div>
			<div class="container">
				<div v-for="item in sameProduct" class="box">
					<a :href="item.href" class="box_img"><img :src="item.src" alt="pic"></a>
					<div class="box_des"><a :href="item.href">{{ item.description }}</a></div>
					<div class="box_price">￥{{ item.price }}</div>
				</div>
			</div>
		</div>
		
		<div class="bottom">
			<div class="title">{{ oldTitle }}</div>
			<div class="container">
				<div v-for="shop in buyShop" class="box">
					<a :href="shop.href" class="box_img"><img :src="shop.src" alt="pic"></a>
					<div class="box_des"><a :href="shop.href">{{ shop.description }}</a></div>
					<div class="box_price">￥{{ shop.price }}</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default{
	props:{
		sameProduct:{
			type: Array,
			default:[]
		},
		sameTitle:{
			type: String,
			default:''
		},
		buyShop:{
			type: Array,
			default:[]
		},
		oldTitle:{
			type: String,
			default:''
		}
	}
}	
</script>

<style scoped>
.leftPic{width:188px;}
.top{width:188px;border:1px solid #999;border-top:2px solid blue;}
.title{width:168px;height:40px;line-height: 40px;padding-left:20px;font-size:14px;font-weight: bold;}
.container{width:188px;background-color:#FFF; }
.box{width:188px;height: 210px;}
.box_img{width:188px;height: 130px;text-align: center;display: inline-block;cursor: pointer;}
.box_des{height:30px;width:188px;padding:5px 10px;}
.box_des a{color:black;}
.box_price{height:30px;width:188px;padding:5px 10px;color: red;font-weight: bold;}

.bottom{margin-top:15px;width:188px;border:1px solid #999;}

</style>