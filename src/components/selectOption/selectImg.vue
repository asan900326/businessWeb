<template>
	<div class="selectImg">
		<div class="mesNav">
			<div class="mesNav_address">
				<span>送至</span>
				<span class="mesNav_address_area">海淀区五环内</span>
			</div>
			<div class="mesNav_num">
				<input type="checkbox">
				<span>仅显示有货</span>
				<span class="mesNav_num_total">共 <b class="num">123456</b> 件产品 </span>
			</div>
		</div><!-- mesNav结束 -->
		<div class="picList">
			<div v-for="product in productList" class="picList_box">
				<div class="picList_pic">
					<a :href="product.href"><img :src="product.src" alt="show"></a>
					<span v-if="product.hot" >人气</span>
					<span v-if="product.sale">特价</span>
				</div>
				<div class="picList_description"><a :href="product.href">{{ product.description }}</a></div>
				<div class="picList_price">
					<span class="picList_price_money">￥{{ product.price }}</span>
					<span class="picList_price_num"><b class="num2">{{product.num}}</b>评论</span>
				</div>
				<div class="picList_car"><a>加入购物车</a></div>
			</div>
		</div><!-- picList结束 -->
		<div class="pageNum">
			<div class="pageNum_box">
				<ul>
					<li @click="goto(prevIndex)"><a href="#">上一页</a></li>
					<li v-for="(page,index) in pages" @click="goto(index)">
						<a :href="page.href" :class="{active: index===nowIndex}">{{ index +1 }}</a>
					</li>
					<li @click="goto(nextIndex)"><a href="#">下一页</a></li>
				</ul>
			</div>
			<div class="pageNum_msg">
				<span>共10页，到第</span><input type="text" v-model="goIndex" class="goIndex"><span>页</span>
				<input type="submit" value="确定" class="submit">	
			</div>
		</div><!-- pageNum结束 -->
	</div>
</template>

<script>
export default{
	props:{
		productList:{
			type: Array,
			default:[]
		},
		pages:{
			type: Array,
			default:[]
		}
	},
	data(){
		return{
			nowIndex:0,
			goIndex:1,
		}
	},
	computed: {
	    prevIndex () {
	      if (this.nowIndex === 0) {
	        return this.pages.length - 1
	      }
	      else {
	        return this.nowIndex - 1
	      } 
	    },
	    nextIndex () {
	      if (this.nowIndex === this.pages.length - 1) {
	        return 0
	      }
	      else {
	        return this.nowIndex + 1
	      }
	    }
  },
  methods: {
    goto (index) {
      // this.isActive = false
      setTimeout(() => {
        // this.isActive = true
        this.nowIndex = index
      }, 10)
    }
}
}
</script>

<style scoped>
.selectImg{width:800px;}
/*mesNav*/
.mesNav{width:800px;height: 30px;background-color: #E8E8E8;line-height: 30px;}
.mesNav_address{float:left;padding-left:20px;font-family: '微软雅黑';font-weight: normal;}
.mesNav_address_area{border:1px solid #999;padding:2px 15px 2px 2px;background:url('../../assets/selected/icon01.png') no-repeat right center; background-color: #FFF;margin-left:5px;}
.mesNav_num{float: right;padding-right:80px;}
.mesNav_num_total{padding-left:20px;}
.num{color:red;}

/*picList*/
.picList{width: 760px;padding:20px;}
.picList_box{float:left;width:240px;height: 320px;margin:10px 0 0 11px;}
.picList_pic{width: 240px;height:210px;text-align: center;padding-top:10px;position: relative;}
.picList_pic span{background-color:red;display:inline-block;width:40px;height: 40px;border-radius: 20px;line-height: 40px;position: absolute;top:20px;right:20px;}
.picList_description{width:240px;height:30px;font-weight: normal;line-height: 15px;padding-left:20px; }
.picList_price{height: 20px;padding-top:10px;padding-left:20px;}
.picList_price_money{font-weight: bold;font-size: 14px;color: red;}
.picList_price_num{margin-left:10px;}
.num2{color: blue;}
.picList_car{width:65px;border:1px solid #999;height: 20px;line-height: 20px;background:url('../../assets/selected/shoppingCar.png') no-repeat left center;padding-left:15px;margin:10px 0 0 20px;cursor: pointer;}

/*pageNum*/
.pageNum{width:800px;height:40px;border-bottom: 1px solid black;margin-top:1350px;padding-bottom: 10px;}
.pageNum_box{padding-left:100px;}
.pageNum_box li{float:left;margin-right:5px;}
.pageNum_box ul li a{display: inline-block;height:20px;border:1px solid #999;padding:5px 10px;}
.pageNum_msg{float:left;margin-left:10px;}
.pageNum_box ul li a:hover{color: red;}
.goIndex{width:20px;height:20px;border:1px solid #999;padding:5px;text-align: center;margin:0 2px;}
.submit{border:1px solid #999;padding:5px;background: #EEE;height: 30px;}
.active{background: blue;color: #FFF;}

</style>









































































