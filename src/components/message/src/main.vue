<template>
	<div class="toast-container" v-show="visible">
		<div class="toast-content">
			<span>{{ message }}</span>
		</div>
	</div>
</template>

<script>
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };

  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null,
        dangerouslyUseHTMLString: false,
        center: false
      };
    },

    computed: {
      typeClass() {
        return this.type && !this.iconClass
          ? `el-message__icon el-icon-${ typeMap[this.type] }`
          : '';
      }
    },

    watch: {
      closed(newVal) {
        this.destroyElement()
        if (newVal) {
          this.visible = false;
          this.clearTimer()
        }
      }
    },

    methods: {
      destroyElement() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
    },
    mounted() {
      this.startTimer()
    },
    beforeDestroy() {
      // this.destroyElement()
    }
  };
</script>
<style lang="scss">
	.toast-container{
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		justify-content: center;
		align-items: center;
		z-index: 9999999;
		.toast-content{
			font-size: .3rem;
			color: #fff;
			font-weight: lighter;
			padding: 10px 15px;
			background: rgba(0, 0, 0, 0.8);
			border-radius: 4px;
			animation: toastanima .3s linear;
			z-index: 9999999;
		}

	}

	@keyframes toastanima
	{
		from {transform: scale(0.3);}
		to {transform: scale(1);}
	}
</style>
