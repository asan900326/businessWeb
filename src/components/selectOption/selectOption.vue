<template>
	<div class="selectOption">
		<div class="selectOption_top">
			<span>{{ optionSortTitle }}</span>
			<ul >
				<li v-for="optionSort in optionSorts"><a href="#">{{optionSort.name}}(num)</a></li>
			</ul>
		</div><!-- selectOption_top结束 -->
		<div v-for="option in optionList" class="selectOption_list">
			<div class="selectOption_list_title">{{ option.title }}</div>
			<div class="selectOption_list_text">
				<span :class="{selected: isSelected }">不限</span>
			</div>
			<div class="selectOption_list_content">
				<ul>
					<li v-for="item in option.list">
						<a :href="item.href" :class="{selected: !isSelected }">{{ item.name }}</a>
					</li>
				</ul>
			</div>
			<button class="selectOption_list_more">更多</button>
		</div><!-- selectOption_list结束 -->
		
		<div class="select_right_other">
			<div> 更多选项 </div>
			<button v-for="btn in buttons">{{ btn.name }}</button>	

		</div>
	</div>
</template>

<script>
export default{
	props:{
		optionList:{
			type: Array,
			default:[]
		},
		optionSorts:{
			type: Array,
			default:[]
		},
		optionSortTitle:{
			type: String,
			default: ''
		},
		buttons:{
			type: Array,
			default:[]
		},
	},
	data(){
		return{
			isSelected: true
		}
	}
}
</script>

<style scoped>
 .selectOption{width:800px;}
 /*selectOption_top*/
 .selectOption_top{height: 35px;width:790px;padding:0 5px;border-bottom: 1px solid #999;line-height: 35px;}
 .selectOption_top span{width:100px;float: left;text-align: center;font-size:14px;font-weight: normal;}
 /*.selectOption_top ul{width:690px;background: green;float: left;}*/
 .selectOption_top ul li{margin-right: 100px;float: left;}

 /*selectOption_list*/
 .selectOption_list{width:790px;padding:0 5px;border-bottom:1px solid #999;min-height: 30px;overflow: hidden; }
 .selectOption_list_title{float: left;width:100px;text-align: center;padding:5px 0;}
 .selectOption_list_text{width:40px;float: left;padding:5px 0;}
 .selectOption_list_content{width:560px;float: left;}
 .selectOption_list_content li{float: left;width:120px;padding:5px 0 5px 20px;}
 .selectOption_list_more{width:80px;float:left;text-align: center;background: url('../../assets/selected/icon01.png') no-repeat 82% center;border:none;outline: none;}
.selectOption_list_more:hover{color:red;}
.selectOption_list_content a:hover{color: red;}

 .selected{background: blue;color: #FFF;}

 .select_right_other{width: 790px;height: 40px;border-bottom: 1px solid #999;line-height: 40px;}
 .select_right_other div{float: left;width:100px;text-align: center;}
 .select_right_other button{background-color: #FFF;margin:8px 15px 0 0;border:1px solid black;font-family: '微软雅黑';font-weight: normal;background: url('../../assets/selected/icon01.png') no-repeat right center;padding-right: 15px;outline: none;}
 .select_right_other button:hover{color: red;}
</style>























