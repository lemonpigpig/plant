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

<template>
	<div class="toast-container" v-if="toast.show">
		<div class="toast-content">
			<span>{{ toast.title }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				toast: {}
			}
		},
		methods: {
			show({title, timeout=2000}) {
        
				clearTimeout(this.toast.timer)
				// 弹层设置~
				this.toast = {
					show: true,
					title
        }
				var timer = setTimeout(() => {
					this.hide.call(this)
				}, timeout || 3000)

				this.toast.timer = timer
				
			},
			hide() {
				clearTimeout(this.toast.timer)
				this.toast.show = false
			}
		}
	}
</script>
