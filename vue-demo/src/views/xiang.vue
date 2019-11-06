<template>
  <div class="wrap">
    <header>
      <router-link to="/xiang/home/guanzhu">关注</router-link>
       <router-link to="/xiang/home/tuijian">推荐</router-link>
        <router-link to="/xiang/home/rebang">热榜</router-link>
    </header>
    <main>
    <router-view></router-view>
    </main>
    <footer>
      <router-link to="/xiang/home">首页</router-link>
      <router-link to="/xiang/classify">分类</router-link>
      <router-link to="/xiang/daxue">大学</router-link>
      <router-link to="/xiang/my">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html,body{
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 50px;
  background: #f00;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a{
    width: 33.3%;
    height: 100%;
    text-align: center;
    line-height: 50px;
  }
}
main {
  flex: 1;
  overflow: hidden;
  overflow: auto;
}
footer {
  width: 100%;
  height: 50px;
  background: #f0f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a{
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: 50px;
  }
}
</style>