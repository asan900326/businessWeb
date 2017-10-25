<template>
	<div class="slide_show" @mouseover="clearInv" @mouseout="runInv">
		<div class="slide_img">
			<a :href="slides[nowIndex].href">
				<transition name="silde-trans">
					<img :src="slides[nowIndex].src" v-if="isShow">
				</transition>
				<transition name="silde-trans-old">
					<img :src="slides[nowIndex].src" v-if="!isShow">
				</transition>
			</a>
		</div>
		<div class="img_list">
			<ul>
				<li v-for="(item,index) in slides" @click="goto(index)" >
					<a :class="{active: index === nowIndex}"></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	computed:{
		prevIndex(){
			if(this.nowIndex ===0){
				return this.sildes.length -1
			}else{
				return this.nowIndex -1
			}
		},
		nextIndex(){
			if(this.nowIndex === this.slides.length-1){
				return 0
			}else{
				return this.nowIndex +1
			}
		}
	},
	methods: {
 		goto(index) {
 			this.isShow = false
 			setTimeout(() =>{
 				this.isShow = true
 				this.nowIndex = index
 			},10)
 		},
 		runInv(){
 			this.invId = setInterval(()=>{
 				this.goto(this.nextIndex)
 			},this.inv)
 		},
 		clearInv(){
 			clearInterval(this.invId)
 		}
	},
	mounted(){
		this.runInv();
	},
	data (){
		return{
			nowIndex: 0,
			isShow: true,
			inv:3000,
			slides: [
				{
					src: require('../assets/index/img01.png'),
					href: '#'
				},
				{
					src: require('../assets/index/img02.png'),
					href: '#'
				},
				{
					src: require('../assets/index/img03.png'),
					href: '#'
				},
				{
					src: require('../assets/index/img04.png'),
					href: '#'
				}
			]
		}
	}
}	
</script>

<style scoped>
.silde-trans-enter-active{transition: all .5s;}
.silde-trans-enter{transform: translateX(778px);}
.silde-trans-old-leave-active{transition: all .5s;transform: translateX(-778px);}

.slide_show{width:780px;height: 348px;text-align: center;position: relative;overflow: hidden;cursor: pointer;}
.slide_img{padding-top:2px;}

.img_list{position:absolute;float: left;bottom:10px;width:200px;padding-left:318px;}
.img_list li{float: left;display:inline-block;width:30px;height: 13px;margin-right: 10px;background: #FFF;cursor: pointer;}
.img_list li a{display:inline-block;width:100%;height: 100%;}
.img_list li .active{background: yellow;}
 
</style>





