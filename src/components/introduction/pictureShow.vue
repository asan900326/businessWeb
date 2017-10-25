<template>
	<div class="pictureShow">
		<div class="big_pic">
			<transition name="pic-trans">
				<img :src="pictures[nowIndex].bigsrc" v-if="isShow">
			</transition>
			<transition name="old-pic-trans">
				<img :src="pictures[nowIndex].bigsrc" v-if="isShow">
			</transition>
		</div>
		<div class="min_pic">
			<ul>
				<li v-for="(picture,index) in pictures" @mouseover="goto(index)" :class="{active: index===nowIndex}">
					<img :src="picture.minsrc" alt="">
				</li>
			</ul>
		</div>
	</div>	
</template>

<script>
export default{
	props:{
		pictures:{
			type: Array,
			default:[]
		}
	},
	data() {
		return{
			nowIndex:0,
			isShow:true
		}
	},
	methods:{
		goto(index){
			
			if(index !== this.nowIndex){
				this.isShow = false,
				setTimeout(()=>{
			 	 this.isShow = true,
			 	 this.nowIndex = index
				},10)
			}
			
		}
	}

}
</script>

<style scoped>
.pic-trans-enter-active{transition:all .5s;}
.pic-trans-enter{transform:translateX(-298px);}
.old-pic-trans-leave-active{transition:all .5s;transform:translateX(298px);}

.pictureShow{width:298px;height:598px;}	
.big_pic{width:298px;height: 310px;overflow: hidden;padding-left:40px;padding-top:10px;position: relative;}
/*.big_pic img{float:left;}*/
.min_pic{text-align: center;padding-left:38px;margin-top:15px;}
.min_pic li{float:left;width:55px;height: 55px;border:1px solid #E8E8E8;cursor: pointer;margin-right:5px;}
.min_pic li.active{border-color:blue;}

</style>























