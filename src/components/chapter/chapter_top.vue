<template>
  <div>
    <a>三七中文网</a>><a>{{bookName}}</a>><span>{{chapterTitle}}</span>
    <span class="void"></span>
      <select>
        <option v-for="f in font" :value="f.value">{{f.name}}</option>
      </select>
      <select>
        <option v-for="item in size" :value="item.value">{{item.name}}</option>
      </select>
      <select>
        <option v-for="item in speed" :value="item.value">{{item.name}}</option>
      </select>
      <select>
        <option v-for="item in background" :value="item.value">{{item.name}}</option>
      </select>
      <select>
        <option v-for="item in width" :value="item.value">{{item.name}}</option>
      </select>
      <input type="checkbox">翻页</input>
      <input type="checkbox">夜间</input>
  </div>
</template>

<script>
  export default {
    name: 'ChapterTop',
    props: ['bookName', 'chapterTitle'],
    data () {
      return {
        font: [{
          value: '宋体',
          name: '字体'
        }, {
          value: '方正启体简体',
          name: '默认'
        }, {
          value: '黑体',
          name: '黑体'
        }, {
          value: '楷体_GB2312',
          name: '楷体'
        }, {
          value: '微软雅黑',
          name: '雅黑'
        }, {
          value: '方正启体简体',
          name: '启体'
        }, {
          value: '宋体',
          name: '字体'
        }],
        size: [{
          value: '#E9FAFF',
          name: '大小'
        }, {
          value: '19pt',
          name: '默认'
        }, {
          value: '10pt',
          name: '10pt'
        }, {
          value: '12pt',
          name: '12pt'
        }, {
          value: '14pt',
          name: '14pt'
        }, {
          value: '16pt',
          name: '16pt'
        }, {
          value: '18pt',
          name: '18pt'
        }, {
          value: '20pt',
          name: '20pt'
        }, {
          value: '22pt',
          name: '22pt'
        }, {
          value: '25pt',
          name: '25pt'
        }, {
          value: '30pt',
          name: '30pt'
        }],
        speed: [{
          value: 5,
          name: '滚屏'
        }, {
          value: 1,
          name: '最慢'
        }, {
          value: 2,
          name: '慢2'
        }, {
          value: 3,
          name: '慢3'
        }, {
          value: 4,
          name: '中4'
        }, {
          value: 5,
          name: '中5'
        }, {
          value: 6,
          name: '中6'
        }, {
          value: 7,
          name: '快7'
        }, {
          value: 8,
          name: '快8'
        }, {
          value: 9,
          name: '快9'
        }, {
          value: 10,
          name: '最快'
        }],
        background: [{
          value: '#E9FAFF',
          name: '背景'
        }, {
          value: '#E9FAFF',
          name: '默认'
        }, {
          value: '#FFFFFF',
          name: '白雪'
        }, {
          value: '#000000',
          name: '漆黑'
        }, {
          value: '#FFFFED',
          name: '明黄'
        }, {
          value: '#EEFAEE',
          name: '淡绿'
        }, {
          value: '#CCE8CF',
          name: '草绿'
        }, {
          value: '#FCEFFF',
          name: '红粉'
        }, {
          value: '#EFEFEF',
          name: '深灰'
        }, {
          value: '#F5F5DC',
          name: '米灰'
        }, {
          value: '#D2B48C',
          name: '茶色'
        }, {
          value: '#C0C0C0',
          name: '银色'
        }],
        width: [{
          value: '95%',
          name: '宽度'
        }, {
          value: '95%',
          name: '默认'
        }, {
          value: '85%',
          name: '85%'
        }, {
          value: '76%',
          name: '75%'
        }, {
          value: '67%',
          name: '65%'
        }, {
          value: '53%',
          name: '50%'
        }, {
          value: '41%',
          name: '40%'
        }]
      }
    },
    created: () => {
      console.log(1)
    }
  }
</script>

<style lang="stylus" scoped>
div
  display: flex
  flex-direction: row
  margin: 5px 0
  padding: 0 5px
  background-color: #E1ECED
  height: 40px
  border-bottom: solid 1px #88C6E5
  align-items: center
  .void
    flex-grow: 1
  select
    margin: 0 5px 0 5px
</style>

