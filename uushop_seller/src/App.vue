<template>
  <div id="app">
    <router-view/>
    <audio hidden id="notice" :src="music"></audio>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },

    data() {
      return {
        websock: null,
        music:'alert.mp3',
      }
    },

    methods:{
      initWebSocket(){
        this.websock = new WebSocket('ws://localhost:8085/webSocket');
        this.websock.onmessage = this.webSocketOnMessage;
        this.websock.onopen = this.webSocketOnOpen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.webSocketClose;
      },
      webSocketOnOpen(event){
        console.log('建立连接')
      },
      webSocketOnMessage(event){
        document.getElementById('notice').play();
        const _this = this
        this.$alert('有新的订单', '消息', {
          confirmButtonText: '确定',
          callback: action => {
            _this.$router.push('/orderManage')
          }
        });
      },
      webSocketClose(event){
        console.log('连接关闭');
      }
    },
    beforeCreate() {
      document.querySelector('body').setAttribute('min-width', '100vh;')
      document.querySelector('html').setAttribute('min-width', '100vh;')
    },
    created() {
      this.initWebSocket();
    },
    destroyed() {
      this.websock.close()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    position:absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
</style>
