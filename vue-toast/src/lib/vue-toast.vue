<template>
  <section class="toast-container">
    <div class="toast"
         :class="[visible?'fade-in':'fade-out']">
      <span>{{message}}</span>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      message: '',
      visible: false
    }
  },
}
</script>
<style lang="scss">
.toast-container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  .toast {
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.61);
    color: #ffffff;
    border-radius: 6px;
  }
  .fade-in {
    animation: fade-in 0.3s both;
  }
  .fade-out {
    animation: fade-out 0.3s both;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}
</style>