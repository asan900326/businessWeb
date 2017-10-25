<template>
	<div class="judge">
		<div class="judge_top">
			<div class="judge_titel">商品评价</div>
			<div class="judge_box">
				<div class="judge_score" 	>
					<span class="score">4.7</span><span class="text">分</span>	
				</div>
				<div class="judge_range">
					<span >非常不满意</span><span>不满意</span><span>一般</span><span>满意</span><span>非常满意</span>
				</div>
				<div class="judge_num">共有18939位慕课网友参与评价</div>
			</div><!-- judge_box结束 -->
		</div><!-- judge_top结束 -->
		<div class="judge_mid">
			<ul>
				<li>全部</li>
				<li>满意（17490）</li>
				<li>一般(549)</li>
				<li>不满意(743)</li>
			</ul>
		</div><!-- judge_mid结束 -->
		<div class="judge_list">
			<ul>
				<li v-for="item in judgeList">
					<div class="judge_list_left">
						<img src="../../assets/product/icon03.png" alt="pic">
						<div class="account">{{ item.account }}</div>
						<div class="grade">{{ item.grade }}</div>
					</div><!-- judge_list_left结束 -->
					<div class="judge_list_right">
						<div class="judge_list_right_top">
							<span class="judge_list_right_score">{{item.score}}分</span>
							<span class="judge_list_right_result">{{ item.result }}</span>
							<span class="judge_list_right_time">{{ item.time }}</span>
						</div>
						<div class="judge_list_right_text">
							{{ item.text }}
						</div>
						<div class="judge_list_right_bottom">
							<span>踩（{{ item.downNum }}）</span>
							<span>顶（{{ item.upNum }}）</span>
						</div>
					</div><!-- judge_list_right结束 -->
				</li>
			</ul>
		</div><!-- judge_list结束 -->
	</div><!-- judge结束 -->
</template>

<script>
export default{
	created:function(){
		this.$http.get('api/getJudgeList')
		.then((res)=> {
			this.judgeList = res.data
		},(err)=>{
			console.log(err)
		})
	},
	data(){
		return{
			judgeList:[]
		}
	}
}
</script>

<style scoped>
.judge{width:790px;}
.judge_top{height: 160px;padding:10px;}
.judge_titel{height: 20px;font-size:14px;font-weight: bold;}
.judge_box{height:70px;}
.judge_score{height:50px;float: left;width:80px;padding:10px 0 10px 0;line-height: 50px;}
.score{font-size:36px;color:orange;}
.text{font-size:14px;}
.judge_range{width:450px;height: 20px;margin:10px 0 0 80px;background: #999;}
.judge_range span{width:60px;display: inline-block;padding:0 10px;color:#FFF;font-weight: normal;}
.judge_num{height: 20px;padding:10px 0;}

 /*judge_mid*/
 .judge_mid{height: 30px;padding-left:20px;background-color: #E8E8E8;line-height: 30px;}
 .judge_mid li{float:left;margin-right:30px;display: inline-block;}

 /*judge_list*/
 .judge_list{width:750px;}
 .judge_list li{width:740px;padding:10px 20px 20px 30px;min-height: 110px;border-bottom:1px dotted #E8E8E8;display: inline-block;}
 .judge_list_left{float:left;width:100px;height: 110px;text-align: center;}
 .judge_list_right{float:left;margin-left:30px;}
 .judge_list_right_top{height: 30px;}
 .judge_list_right_score{background: url('../../assets/product/icon07.png') no-repeat left center;width:30px;height: 30px;display: inline-block;padding-left:100px;line-height: 30px;font-weight: bold;}
 .judge_list_right_result{font-weight: bold;}
 .judge_list_right_time{margin-left:320px;color:#E0E0E0;}
 .judge_list_right_text{width:500px;min-height: 30px;margin-top:10px;}
 .judge_list_right_bottom{height: 20px;padding-top:10px;cursor: pointer;}

</style>































