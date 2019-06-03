<template>
  <div>
    <h4 class="header-info">幸福</h4>
    <p class="ed-info">
      <span>发表时间:2019-06-03 12:45:21</span>
      <span>查看次数:12次</span>
    </p>
    <hr class="ed-info">
    <div>
      <p
        class="ed-info suo"
      >在讲这篇内容之前，大家还记得怎么基于TCP来实现服务器—客户端吗？当时我们虽然实现了一个简单的模型，但是这个模型存在着致命的缺陷——单一。换个说法就是，一个服务器只能响应一个客户端的请求，而且在端口被释放后，在一段时间内是无法恢复使用的，会出现端口被占用的提示。这样的模型在实际生活中肯定是无法使用的，试想看，一个用户对应一个服务器，老马怕是真的要亏到坐公交车了。</p>
      <img
        class="img"
        src="http://p1.pstatp.com/large/pgc-image/61b57b8de13545fa80052292962ebf0c"
        alt
      >
      <p class="ed-info suo">
        当然了，这只是开个玩笑。为了解决这个问题，开发者提出了多进程，多线程等解决方案。我们今天着了解一种解决方案——IO多路复用。
        由于涉及到的代码过多，我会将内容分成三部分介绍三个函数。
      </p>
      <p class="ed-info suo">
        IO多路复用
        <br>IO多路复用听上去好像挺复杂，实际上就是使用一个进程监听多个套接字描述符，当其中某个套接字read/wirte就绪时，就进行相应的读写操作。这里要注意，select，poll，epoll在本质上都是同步IO，因为他们都需要在读写事件接续后，自己进行读写，也就是说这个读写过程是阻塞的。异步I/O则无需自己负责进行读写，而且把数据从内核拷贝到用户空间，这点非常重要。
        IO多路复用的优势就在于系统开销小，因为无论是进程还是现场都需要系统分配内存资源，很大程度上减少了系统开销。
        另外这里提一句，epoll和select有一点点不同，epoll是linux所持有的，而select是POSIX所持有，不过现在的操作系统对其都有支持。
        知道了什么是IO多路复用，接下来介绍具体的实现
      </p>
    </div>
    <div>
      <!-- 3.使用子组件  -->
      <comment-box></comment-box>
    </div>
  </div>
</template>
<script>
//1. 使用子组件
import comment from '../subcomment/Comment.vue'
export default {
    data (){
        return {
            id: this.$route.params.id
        }
    },
    //2. 注册子组件
    components: {
        "comment-box" : comment
    }
}
</script>
<style lang="scss" >
.header-info {
  text-align: center;
  margin-top: 10px;
}
.ed-info {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
.img {
  width: 90%;
  height: 100%;
  margin: 20px;
}
.suo {
  text-indent: 2em;
}
</style>