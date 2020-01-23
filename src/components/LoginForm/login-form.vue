<template>
	<Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit" class="ltext">
		<div class="ltd">
			<div class="tx">
				<font>账号</font>
			</div>
			<FormItem prop="userName">
				<Input v-model="form.userName" placeholder="请输入登录账号" class="linput" size="large"> </Input>
			</FormItem>
		</div>
		<div class="ltd">
			<div class="tx">
				<font>密码</font>
			</div>
			<FormItem prop="password">
				<Input type="password" v-model="form.password" placeholder="请输入密码" class="linput" size="large"></Input>
			</FormItem>
		</div>
		<div class="ltd">
			<div class="tx">
				<font>验证码</font>
			</div>
			<FormItem prop="code">
				<Input type="text" v-model="form.code" placeholder="请输入验证码" class="linput ym" size="large"></Input>
			</FormItem>
			<div class="ym-img">
				<div class="code" >
					<!--<s-identify :identifyCode="identifyCode"></s-identify>-->
					 <img :src="UrL+Time" style="width: 110px;height: 40px;" @click="refresh"/>
				</div>

			</div>
		</div>
		<FormItem>
			<Button @click="handleSubmit" type="primary" long class="lbtn">
				<font>登录</font>
			</Button>
			<div class="clear"></div>
		</FormItem>
		<div class="forget">
			<Tooltip placement="right-start" theme="light" id="forget">
				<div class="top9">
					<font>忘记密码</font>
			
				</div>
				<div slot="content" class="lcot">
					<p>联系管理员重置密码</p>
					<p>拨打电话<i>13326402411</i></p>
				</div>

			</Tooltip>
		</div>

	</Form>
</template>
<script>
	import SIdentify from './valid-code'
	import { JSEncrypt } from 'jsencrypt'
	export default {
		name: 'LoginForm',
		components: {
			SIdentify
		},
		props: {
			userNameRules: {
				type: Array,
				default: () => {
					return [{
						required: true,
						message: '账号不能为空',
						trigger: 'blur'
					}]
				}
			},
			passwordRules: {
				type: Array,
				default: () => {
					return [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}]
				}
			},
			enuserNameRules: {
				type: Array,
				default: () => {
					return [{
						required: true,
						message: 'The account cannot be empty',
						trigger: 'blur'
					}]
				}
			},
			enpasswordRules: {
				type: Array,
				default: () => {
					return [{
						required: true,
						message: 'The password cannot be empty',
						trigger: 'blur'
					}]
				}
			}
		},
		data() {
			return {
				identifyCodes: "1234567890",
				identifyCode: "",
				Time:Date.parse(new Date()),
				UrL: 'https://info.dah.isport.nm.cn/index.php?g=api&m=checkcode&a=index&length=4&font_size=20&width=248&height=42&use_noise=1&use_curve=0&token_code=',
				form: {
					code: '',
					userName: '',
					password: ''
				}
			}
		},
		computed: {
			rules() {
				return {
						userName: this.userNameRules,
						password: this.passwordRules
					}
			}
		},
		created() {
		
		},
		mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
		},
		methods: {
			// 加密
			 encryptedData(data) {
			 let publicKey ="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDT52xDLN1k/dyxIM0DU+7pOZvCU0u6gxFvjkhfYKejk88eGQ4ooPX79YSz97pdRDj1jkgf3QB0l9tXQwqiWygYKWrS62Uc7gRTLxKo2O1oUUHy/6xmqhhUq+XGIiYTvS0GhUr89j76TWMbRe5vGQ/n4XfCQ4BwVlNA/GmSTOVwHQIDAQAB";
			  let encryptor = new JSEncrypt();
			  // 设置公钥
			  encryptor.setPublicKey(publicKey);
			  // 加密数据
			  return encryptor.encrypt(data);
			 },
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
				
			},
			refresh(){
				var t=Date.parse(new Date())+Math.random();
				this.Time=t;
				console.log(this.Time)
			},
			makeCode(o, l) {
				for(let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					];
				}
				//		      console.log(this.identifyCode);
			},
		
			handleSubmit() {
				this.$refs.loginForm.validate((valid) => {
					if(valid) {
//						if(this.identifyCode != this.form.code) {
//							this.$Message.info('请输入正确的验证码');
//							return
//						}
						let Password = this.encryptedData(this.form.password);
						this.$emit('on-success-valid', {
							userName: this.form.userName,
							code: this.form.code,
							token_code: this.Time,
							password: Password
						})
					}
				})
			}
		}
	}
</script>
<style type="text/css">
	.ivu-btn, .ivu-btn:active, .ivu-btn:focus{
		border-color:rgba(0, 0, 0, 0);
		box-shadow:none;
	}
	.linput .ivu-input {
		height: 46px;
		border:none;
		border-bottom: 1px solid #e6e6e6;
		background:none;
		font-family: MicrosoftYaHeiLight;
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
	}
	.linput .ivu-input:hover{
		border-bottom: 1px solid  #3775bd;
	}
	.ivu-form-item-error .ivu-input:hover{
		border-bottom: 1px solid  #ed4014;
	}
	input.ivu-input::-webkit-input-placeholder{
	color:  #969696;;
	}
	input.ivu-input:-moz-placeholder{
	color:  #969696;;
	}
	input.ivu-input::-moz-placeholder{
	color:  #969696;;
	}
	input.ivu-input:-ms-input-placeholder{
	color:  #969696;;
	}

</style>
<style scoped lang="less">
	.code {
		cursor: pointer;
	}
	
	.ltext {
		margin: 0 auto;
		width: fit-content;
		box-sizing: border-box;
		.ltd {
			display: flex;
			margin-bottom: 0px;
			.ivu-form-item {
				margin-bottom: 2.63vh;
			}
		}
		.tx {
			display: inline-block;
			font-family: MicrosoftYaHeiLight;
			font-size: 18px;
			font-weight: normal;
			font-stretch: normal;
			line-height: 145px;
			letter-spacing: 5.4px;
			color: #303030;
			flex: none;
			margin-right:30px;
			line-height: 40px;
			width: 80px;
			text-align: right;
		}
	}
	
	.linput {
		width: 342px;
	}
	
	
	
	.lbtn {
		width: 420px;
		height: 60px;
		font-family: MicrosoftYaHei;
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 40px;
		letter-spacing: 1px;
		color: #808080;
		margin-top:33px;
		float: right;
		border: none;
		background: url(../../../static/images/login/btn.png) no-repeat center;
		background-size: contain;
		color: #fff;
		&:hover{
			background: url(../../../static/images/login/btn2.png) no-repeat center;
			background-size: contain;
		}
	}
	
	.forget {
		font-family: MicrosoftYaHeiLight;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vh;
		color: #a6a6a6;
		text-align: center;
		.lcot {
			font-family: MicrosoftYaHeiLight;
			font-size: 14px;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 0vh;
			color: #a6a6a6;
			p:nth-child(1) {
				margin-bottom: 6px;
			}
			i {
				font-style: normal;
				color: #f44357;
			}
		}
		.top9 {
			cursor: pointer;
			padding-left: 20px;
			background: url(../../../static/images/login/lfor.png) no-repeat center left;
			box-sizing: border-box;
		}
		.top9:hover {
			background: url(../../../static/images/login/lfor2.png) no-repeat center left;
			color: #3775bd;
		}
	}
	
	.ym {
		width: 203px;
	}
	
	.ym-img {
		width: 110px;
		height: 40px;
		background: #ccc;
		margin-left: 20px;
	}
</style>
