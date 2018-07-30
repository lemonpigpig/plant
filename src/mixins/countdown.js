export default {
	data(){
		return {
			timer: ''
		}
	},
	methods: {
		countDown(currentTime, endtime, cb) {
			
			let self = this;
			let day, hour, minute, second;
	
			let end_time   = endtime,
				sys_second = (end_time - currentTime);
			let timer = setInterval(function () {
				if (sys_second >= 1) {
					sys_second -= 1;
					day = Math.floor((sys_second / 3600) / 24);
					hour = Math.floor((sys_second / 3600) % 24);
					minute = Math.floor((sys_second / 60) % 60);
					second = Math.floor(sys_second % 60);
					day = self.formatNum(day);
					hour = self.formatNum(hour+day*24);
					minute = self.formatNum(minute);
					second = self.formatNum(second);
	
					cb({
						day,
						hour,
						minute,
						second,
						timer
					})
				} else {
					clearInterval(timer);
				}
			}, 1000);
			this.timer = timer;
			return timer;
		},
		formatNum(num) {
			return num < 10 ? "0" + num : num;
		}
	},
	onShow() {
		clearInterval(this.timer);
	}
}
