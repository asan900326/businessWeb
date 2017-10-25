<template>
	<div class="choice">
		<div class="choice_title">
			{{ choice.title }}
		</div>
		<div class="choice_price">
			<span class="choice_head">淘宝价</span>
			<span>￥<b>{{ choice.price }}</b></span>	
		</div>
		<div class="choice_sale">
			<span class="choice_head">优惠</span>
			<span>{{ choice.sale }}</span>	
		</div>

		<div class="choice_detail">
			<div class="choice_detail_address">
				<span class="head">送到</span>
				<span class="address">北京市 海淀区 五环内</span>
				<span>有货，可当日出货</span>
			</div>
			<div class="choice_detail_color">
				<span class="head">选择颜色</span>
				<ul>
					<li v-for="(color,index) in choice.colorlist" @click="choiced(index)" :class="{active: index===colorIndex}">{{color}}</li>
				</ul>
			</div>
			<div class="choice_detail_size">
				<span class="head">选择规格</span>
				<ul>
					<li v-for="(size,index) in choice.sizelist" @click="selected(index)" :class="{active: index===sizeIndex}" >{{ size }}</li>
				</ul>
			</div>
			<div class="choice_detail_num">
				<span class="head">数量</span>
				<div class="number">
					<div class="number_box">
						<input type="button" class="number_des" @click="desNum" value="-"><input type="text" class="number_count" :value="num"><input type="button" class="number_des" @click="addNum" value="+">
					</div>
					<span class="number_total">限购<b>9</b>件</span>
				</div>
			</div><!-- choice_detail_num结束 -->
		</div><!-- choice_detail结束 -->
		
		<div class="choice_bottom">
			<div class="choice_bottom_box">
				 <span class="choice_bottom_box_name">已选择</span>
				 <span>"</span> 
				 <span>{{ choice.colorlist[colorIndex] }}</span>
				 <span v-if="isShow">|</span>
				 <span> {{ choice.sizelist[sizeIndex] }}</span>
				 <span>"</span>				
			</div><!-- choice_bottom_box结束 -->
			<div class="choice_bottom_shop">
				<span class="car"><div>加入购物车</div></span><span><div>立即购买</div></span>
			</div>
			<div class="choice_bottom_message">
				注意：此商品可提供普通发票，不提供增值税发票。
			</div>
		</div><!-- choice_bottom结束 -->
	</div><!-- choice结束 -->
</template>

<script>
export default{
	props:{
		choice:{
			type: Object,
			default:[]
		}
	},
	data(){
		return{
			num: 1,
			colorIndex:'',
			sizeIndex:'',
			isShow:false
		}
	},
	methods:{
		desNum () {
			if(this.num > 1){
				this.num -= 1
			}
		},
		addNum(){
			if(this.num<9){
				this.num += 1
			}
		},
		choiced(index){
			if(index !== this.colorIndex){
				setTimeout(()=>{
			 	 this.colorIndex = index
				},10)
			}
			if(this.sizeIndex!==''){
				this.isShow = true
			}		
		},
		selected(index){
			if(index !== this.sizeIndex){
				setTimeout(()=>{
			 	 this.sizeIndex = index
				},10)
			}
			if(this.colorIndex!==''){
				this.isShow = true
			}			
		}
	}
}	
</script>

<style scoped>
.choice{width:676px;height: 576px;padding:10px;margin-left:300px;}
.choice_title{width:666px;height: 60px;padding-left:10px;font-size:16px;font-family: "微软雅黑";font-weight: bold;}
.choice_price{padding-left:10px;height: 30px;font-size:12px;line-height: 30px;}
.choice_price b{color:red;font-size:20px;}
.choice_sale{padding-left:10px;height: 30px;font-size:12px;line-height: 30px;}
.choice_head{width:60px;display: inline-block;}

.choice_detail{width:676px;height: 250px;background: #E8E8E8;margin-top:10px;}

.choice_detail_address{padding:20px 0px 0px 10px;}
.address{width:150px;height: 20px;display: inline-block;background: url('../../assets/product/icon04.png') no-repeat 90% center;background-color: #FFF;margin-right:5px;}


.choice_detail_color{padding:10px 0px 0px 10px;height: 30px;line-height: 30px;}
.choice_detail_color span{float:left;}
.choice_detail_color ul li{float: left;width:80px;height: 30px;border:1px solid #999;text-align: center;background-color:#FFF;margin-right:10px; }

.choice_detail_size{padding:10px 0px 0px 10px;height: 80px;margin-top:5px;}
.choice_detail_size span{float:left;line-height: 80px;}
.choice_detail_size ul{width:500px;padding-left:60px;}
.choice_detail_size ul li{float:left;height: 20px;border:1px solid #999;text-align: center;background-color:#FFF;margin:0 10px 10px 0;padding:5px;}

.choice_detail_color ul li:hover,.choice_detail_size ul li:hover{cursor: pointer;color: red;}

.head{width:60px;height:30px;display: inline-block;}

/*choice_detail_num*/
.choice_detail_num{padding:10px 0px 0px 10px;height: 30px;}
.choice_detail_num span{float:left;line-height: 30px;}
.number{height: 30px;line-height: 30px}
.number_box{float:left;}
.number_des{width:15px;height: 30px;border:1px solid #999;outline: none;cursor: pointer;}
.number_count{width: 50px;height: 28px;border:1px solid #999;border-left:none;border-right:none;text-align: center;background-color: #FFF;outline: none;}
.number_add{width:15px;height: 30px;border:1px solid #999;outline: none;cursor: pointer;}
.number_total{font-size:14px;margin-left:10px;}
.number_total b{color: red;}

.choice_detail_color ul li.active,.choice_detail_size ul li.active{border-color:blue;}

/*choice_bottom*/
.choice_bottom{margin-top:20px;}
.choice_bottom_box{padding-left:10px;font-size:12px;font-weight: bold;color:blue;}
.choice_bottom_box_name{color:black;margin-right:20px;}
.choice_bottom_shop{height:85px;padding:10px;}
.choice_bottom_shop span{display: inline-block;width:260px;height: 85px;line-height: 85px;padding-left:65px;}
.car{border-right:1px dotted #999;}
.choice_bottom_shop span div{width: 180px;height: 50px;line-height: 50px;text-align: center;margin-top:17px;font-size:18px;color: #FFF;font-weight: normal;background:url('../../assets/product/icon01.png')no-repeat 15% center;background-color:orange; padding-left:20px;cursor: pointer;}

.choice_bottom_message{height: 50px;padding:20px 0 0 10px;}
</style>









































