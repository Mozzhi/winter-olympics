<template>
	<div class="home">
		<header-bar active=""></header-bar>
    <news-box></news-box>
		<div class="centerMain wrapper">
			<!--面包屑-->
      <breadcrumb> > <a href="#">正文</a></breadcrumb>
			<div class="details p100">
				<div class="de-head">
					<div class="de-title">{{list.title}}</div>
					<div class="de-time deC">{{list.published_at}}</div>
					<div class="de-for deC" v-if="list.source">
						<font>来自</font>
						/
						<p>{{list.source}}</p>
					</div>
				</div>
				<div class="de-main" :class="{'downDetail': groupId == 1, 'small-size': list.is_size == '2'}" v-html="list.details">

				</div>
				<!--文件-->
				<div class="de-botm"  v-if="list.accessory&&language==2">
					<div class="title">
						<div class="about">相关附件</div>

						<Row class="b-line" v-for="(item,ac) in list.accessory" :key="ac">
							<Col span="18">
							<div>{{item.file_name}}ddddd</div>
							</Col>
							<Col span="3" class="do">
							<router-link :to="{path:'/preview',query: {url: item.url}}" tag="a" target="_blank">
								<div class="hv">
									<img src="../../static/images/do.png" />
									<font>预览</font>
								</div>
							</router-link>

							</Col>
							<Col span="3" class="do">
							<a :href="item.url" :download="item.file_name" class="hv" @click="download(item)">
								<img src="../../static/images/down.png" />
								<font>下载</font>
							</a>
							</Col>
						</Row>

					</div>

				</div>
			</div>
		</div>
			<Footer></Footer>
	</div>
</template>
<script>
	import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
	import Footer from '../components/Footer/Footer.vue';
	import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
  import NewsBox from '../components/NewsBox/NewsBox';
  import Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue';
  import getToken from '../libs/auth'
	export default {
		name: 'EventServices',
		data() {
		  let queries = this.$route.query;
			return {
				groupId:'',
				id:'',
				list:[],
        fromWhere: {},
        queries: queries
			}
		},
		components: {
			HeaderBar,
			Footer,
			SubpageTitle,
      NewsBox,
      Breadcrumb
		},
		created(){
			this.id=this.$route.query.id || 867;
			this.init();
		},
		watch:{
	        $route(val){//普通的watch监听
	            //console.log(val.query.id);
	            if(val.query.id){
	            	this.id=val.query.id;
					this.init()
	            }
	            
	        },
	    },
		mounted() {

		},
		methods: {
      download(item){
        let dto={
          article_id:item.article_id,
          accessory_id:item.accessory_id
        }
        this.$http.download(dto)
              .then((res) => {
                  this.$Modal.info({
              title: '提示',
              content: res.msg
            });
              })
        
      },
      stopsVideo(){
        document.oncontextmenu = function(){
        　　return false;
        }
        
      },
      init() {
        let dto={
          id:this.id
        };
        this.$http.articleDetails(dto)
              .then((res) => {
              if(res.status == 0) {
            this.list=res.data;
            this.groupId=res.data.group_id;
            //1-视频要不下载，2-视频可以下载
            if(res.data.group_id==1){
              this.stopsVideo()
                  var dat = res.data.details.replace(/\<video /gi, '<video controlsList="nodownload"');
                  this.list.details=dat;
            }
            
          } else {
            this.$Modal.info({
              title: '提示',
              content: res.msg
            });
          }
              })
        
      },
		}
	}
</script>
<style type="text/css">
		.de-main > p{
      /*margin-bottom: 20px;*/
      font-size: 24px!important;/*no*/
		}
    .small-size > p {
      font-size: 16px!important;/*no*/
    }
    .de-main img, .de-main video {
      display: block;
      margin: 0 auto;
    }
</style>
<style scoped lang="scss">
	@import "../assets/commom";
	
	.p100{
		padding: 0px 100px;
		box-sizing:border-box;
	}


	.details{
		.de-head{
			text-align: center;
			border-bottom: 1px dashed rgba(224, 224, 224, 1);
			margin-bottom: 27px;
			.de-title{
				font-size:30px;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(48,48,48,1);
				margin-bottom: 25px;
			}
			
			.deC{
				font-size:14px;
				font-family:MicrosoftYaHei;
				font-weight:400;
				color:rgba(166,166,166,1);
				margin-bottom: 10px;
			}
			.de-for{
				margin-bottom: 20px;
				p{
					display: inline-block;
				/*	color:rgba(64,64,64,1);*/
				}
			}
		}
		.de-main{
			margin-bottom: 90px;
			text-align: justify;
/*        	text-align-last: justify;*/
		
		}
		span{
			display:inline-block!important;
		}
		.de-botm{
			border:1px solid rgba(163,201,245,1);
			padding: 20px 40px;
			box-sizing: border-box;
			margin-bottom: 80px;
			position: relative;
			&:before{
				display: block;
				position: absolute;
				top:-1px;
				left:0px;
				content: "";
				width: 100%;
				height: 44px;
				background: url(../../static/images/de/ubg.png) 0px 0px no-repeat;
				background-size: 1000px 44px;
			}
			&:after{
				display: block;
				position: absolute;
				bottom:-1px;
				left:0px;
				content: "";
				width: 100%;
				height: 26px;
				background: url(../../static/images/de/dbg.png) 0px 0px no-repeat;
				background-size: 1000px 26px;
			}

			.do{
				text-align: right;
				a{
					font-size:14px;
					font-family:Microsoft YaHei;
					font-weight:400;
					color:rgba(55,117,189,1);
					img{
						width: 15px;
						height: 15px;
						position: relative;
						top: 4px;
						left: -3px;
					}
				}
			}
			.about{
				margin-bottom: 40px;
				width:fit-content;
				padding: 0px 40px;
				box-sizing: border-box;
				margin: 0 auto;
				font-size:20px;
				font-family:Microsoft YaHei;
				font-weight:600;
				color:rgba(55,117,189,1);
				text-align: center;
				background: url(../../static/images/de/l.png) left no-repeat,url(../../static/images/de/r.png) right no-repeat;
				background-size: 26px 30px;
			}
			.title{
				font-size:16px;
				font-family:Microsoft YaHei;
				font-weight:bold;
				color:rgba(50,84,179,1);
				margin-bottom: 17px;
			}
			.b-line{
				cursor: pointer;
				margin-bottom: 28px;
				font-size:16px;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(55,117,189,1);
			}
			.b-line:nth-last-child(1){
				margin-bottom: 0px;
			}
		}
		
	}
	

	
	
	
</style>
