
import { rule } from '@/utils'

export default {
	data() {
		return {
			code_sending: true,
			countdown: 120,
			timer: null
		}
	},
	methods: {
		getCode() {
			if(!rule.checkPhone(this.phone) ) {
				return this.$message('输入手机号码输入有误');
			}
			this.sendCode({
        mobile: this.phone,
        captcha: this.captcha,
        type: 6,
        os: 'WEB',
        params: {
          requestno: 1,
        }
      }).then((res) => {
        console.log('-----发送验证码-----:', res)
        this.$set(this, 'code_sending', false)
        let countdown = 120;
        this.timer = setInterval(()=>{
          this.countdown = countdown--;
          if( countdown < 0){
            clearInterval(this.timer);
            this.code_sending = true;
          }
        }, 1000);
      }, (err) => {
        console.log('------err-----:', err)
      })
		}
	},
	onShow(){
		this.phone = '';
		this.code = '';
		this.codeIllegal = true;
		this.countdown = 120;
		clearInterval(this.timer);
		this.code_sending = true;
	}
}
