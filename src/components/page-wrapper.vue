<template>
    <div class="pager-wrapper" v-if="totalPage > 0">
        <div class="pager-pages">
            <a v-show="currentPage > 1 && showPrev" @click="go(currentPage - 1)">上一页</a>
            <a :class="{active: currentPage == 1 ? true : false}" @click="go(1)">1</a>
            <strong v-show="pages[0] > 2">...</strong>
            <a v-for="page in pages" :class="{active: currentPage == page ? true : false}" @click="go(page)">{{page}}</a>
            <strong v-show="pages[pages.length-1] < totalPage - 1">...</strong>
            <a v-if="totalPage > 1" :class="{active: currentPage == totalPage ? true : false}" @click="go(totalPage)">{{totalPage}}</a>
            <a v-show="currentPage < totalPage && showNext" @click="go(currentPage + 1)">下一页</a>
        </div>
        <div v-if="showJump" v-show="totalPage > 1" class="pager-jump">
            <span>共<em class="jump-total">{{totalPage}}</em>页 ，跳至</span>
            <input type="number" min="1" :max="totalPage" v-model="jumpPage" class="jump-input">
            <span>页</span>
            <a @click="go(jumpPage)">确定</a>
        </div>
    </div>
</template>
<script>
  export default {
        props: {
            totalPage: { // 总页数
                type: Number,
                default: 1,
                required: true
            },
            showItems: { // 显示出来的页数，如: 1 ... 34[5]67 ... 10
                type: Number,
                default: 5
            },
            showPrev: { // 是否显示“上一页”
                type: Boolean,
                default: true
            },
            showNext: { // 是否显示“下一页”
                type: Boolean,
                default: true
            },
            showJump: { // 是否显示“跳转”
                type: Boolean,
                default: true
            },
            initPage: {
                type: Number,
                default: 1
            }
        },
        data () {
            return {
                currentPage: 0,
                pages: [],
                jumpPage: 0,
            }
        },
        created () {// 初始化时currentPage赋值
            this.currentPage = this.initPage
        }
        methods: {
            go (page) {
                if(page < 1) {
                    page = 1
                }
                if(page > this.totalPage) {
                    page = this.totalPage
                }
                if(page === this.currentPage) {
                    return
                }
                this.currentPage = parseInt(page,10)
                this.$emit('go-page',{
                    page: this.currentPage
                })
            }
        },
        watch: {
            currentPage (newVal) {
                this.jumpPage = newVal
            },
            initPage (newVal) {
                if(this.currentPage !== newVal) {
                    this.currentPage = newVal
                }
            }
        },
        computed: {
            pages () {
                // 根据起始页码和结束页码得到页码数组
                let getPages = (start,end) => {
                    if(start <= 1 || start > end || start >= this.totalPage) {
                        start = 2
                    }
                    if(end >= this.totalPage || end < start || end <= 1) {
                        end = this.totalPage - 1
                    }
                    let arr = []
                    for(let i = start; i <= end; i++) {
                        arr.push(i)
                    }
                    return arr
                }
                let counts = this.showItems
                if(this.totalPage < counts + 2) {
                    return getPages(2,this.totalPage)
                } else {
                    if(this.currentPage <= Math.ceil(counts/2)) {
                        return getPages(2,counts)
                    } else if(this.currentPage >= this.totalPage - Math.floor(counts/2)) {
                        return getPages(this.totalPage + 1 - counts,this.totalPage - 1)
                    } else {
                        let half = Math.ceil(counts/2) - 1
                        let end = this.currentPage + half
                        if(counts % 2 === 0) {
                            end++
                        }
                        return getPages(this.currentPage - half,end)
                    }
                }
            }
        }
    }
</script>