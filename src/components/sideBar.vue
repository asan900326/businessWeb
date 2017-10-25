<template>
	<div class="sidebar">
		<h2 class="totalTitle">{{ totalTitle }}</h2>
		<div class="box" v-for="sort in sortList">
			<h2><a href="#">{{sort.title}}</a></h2>
			<ul v-for="item in sort.list">
				<li><a :href="item.href">{{ item.name}}</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		sortList:{
			type: Array,
			default:[]
		},
		totalTitle:{
			type: String,
			default: ''
		}
	},
	data(){
		return{

		}
	}
}
</script>

<style scoped>
.sidebar{width:188px;background: #E8E8E8;border:1px dotted #999;}
.totalTitle{width:188px;height:40px;line-height: 40px;text-align: center;font-weight: normal;}
.box{border-top: 1px dotted #999;width:188px;padding:5px 0;}
.box h2{width:188px;font-size:14px;height: 20px;padding:5px 10px;font-weight: normal;}
.box h2 a{color:black;}
.box li{padding-left:30px;height: 15px;margin:5px 0;font-size:12px;}
.box li a{color:#999;}
.box li a:hover{color:red;text-decoration: underline;}

</style>
