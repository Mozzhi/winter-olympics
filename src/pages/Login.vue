<template>
	<div class="login">
		<img src="../../static/images/login/logo.png" class="lg"/>
		<div class="lm">
			<login-form @on-success-valid="handleSubmit"></login-form>
			<div class="wxcode">
				<img src="../../static/images/login/wxcode.png"/>
				<div class="wxtext">微信小程序</div>
			</div>
		</div>
		<div class="lb">版权©中华人民共和国第十四届冬季运动会组织委员会</div>
	</div>
</template>
<script>

	import LoginForm from '../components/LoginForm/login-form'

	export default {
		data () {
            return {
            	
            }
        },
		components: {
			LoginForm
		},
		methods: {
			handleSubmit({
				userName,
				code,
				password
			}) {
								console.log(userName, password)

			},
			
		},
		
		
	}
</script>
<style scoped lang="scss">
	.login {
		height: 100vh;
		background: url(../../static/images/login/bg.png);
		background-size:cover;
		padding-top: 51px;
    	box-sizing: border-box;
    	.lg{
    		height: 146px;
    		width: 1000px;
    		margin: 0 auto;
    		margin-bottom: 60px;
    		display: block;
    	}
    	.lm{
			width: 900px;
			height: 500px;
			background-color: #fffef7;
			border-radius: 4px;
			box-shadow: 0px 0px 20px #dadada;
			margin: 0 auto;
			background: url(../../static/images/login/t.png) top no-repeat,url(../../static/images/login/b.png) bottom no-repeat #fffef7;;
			margin-bottom: 34px;
			display: flex;
			justify-content: center;
			padding-right: 4.43vw;
			box-sizing: border-box;
			padding-top: 77px;
			.wxcode{
				padding-top:30px;
				img{
					width: 238px;
					height: 238px;
					display: block;
					margin-bottom: 29px;
				}
				.wxtext{
					width:238px;
					font-family: MicrosoftYaHeiLight;
					font-size: 20px;
					position: relative;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0px;
					color: #303030;
					background: #fff;
					text-align: center;
					&:after{
						content: "";
						position: absolute;
						display: block;
						width: 48px;
						height: 0.005rem;
						background:#303030;
						top: 50%;
						left:0px;
					}
					&:before{
						content: "";
						position: absolute;
						display: block;
						width:48px;
						height: 0.005rem;
						background:#303030;
						top: 50%;
						right: 0px;
					}
				}
			}
		}
		.lb{
			text-align: center;
			font-family: MicrosoftYaHeiLight;
			font-size: 16px;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: -0.2px;
			color: #969696;
		}
		
	}
</style>