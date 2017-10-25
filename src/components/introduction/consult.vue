<template>
	<div class="consult">
		<div class="consult_top">
			<div class="consult_top_total">全部咨询（num）</div>
			<div class="consult_top_btn"><input type="button" value="发表咨询"></div>
		</div>
		<div class="message">提示：因厂家更改产品包装、产地或者更换随机附件等没有任何提前通知，且每位咨询者购买情况、提问时间等不同，为此以下回复新的仅供参考！若给您带来不便请多多谅解，谢谢！</div>
		<div class="consult_list">
			<ul>
				<li v-for="item in consultList">
					<div class="judge_list_left">
						<img src="../../assets/product/icon02.png" alt="pic">
						<div class="account">{{ item.account }}</div>
						<div class="grade">{{ item.grade }}</div>
					</div><!-- judge_list_left结束 -->
					<div class="judge_list_right">
						<div class="judge_list_right_top">
							<span class="judge_list_right_result">[商品咨询]</span>
							<span class="judge_list_right_time">{{ item.time }}</span>
						</div>
						<div class="judge_list_right_text">
							{{ item.question }}
						</div>
						<div class="judge_list_right_bottom">
							<span>慕课网回复：</span><span class="reply">{{ item.reply }}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	created:function(){
		this.$http.get('api/getConsultList')
		.then((res)=> {
			this.consultList = res.data
		},(err)=>{
			console.log(err)
		})
	},
	data(){
		return{
			consultList:[]
		}
	}
}
</script>

<style scoped>
.consult{width:790px;}
.consult_top{height: 35px;line-height: 35px;}
.consult_top_total{width:128px;height: 35px;text-align: center;font-size: 14px;color:blue;border:1px solid blue;border-bottom: none;float:left;}
.consult_top_btn{width:660px;height: 35px;border-bottom: 1px solid blue;margin-left:130px;position: relative;}
.consult_top_btn input{outline: none;border:none;background: none;position: absolute;right:20px;height: 35px;color: red;cursor: pointer;}

.message{width:710px;height: 40px;background: #E8E8E8;margin:10px 0 0 20px;padding:5px 20px;color:gray;}
.consult_list{width:790px;padding:10px 30px;}
.consult_list li{display:inline-block;height: 150px;width:710px;padding-top:10px;}
.judge_list_left{float:left;width:100px;text-align: center;height:100px; }
.judge_list_left div{height: 20px;line-height: 20px;}

.judge_list_right{width:610px;margin-left:100px;}
.judge_list_right_top{width:610px;height: 30px;}
.judge_list_right_result{font-weight: bold;}
.judge_list_right_time{margin-left:400px;color:#999;}

.judge_list_right_text{width:610px;min-height: 30px;color:#999;}

.judge_list_right_bottom{width:590px;min-height: 25px;background-color: #E8E8E8;padding:15px 5px 10px 15px;}
.reply{color:#999;}
</style>























