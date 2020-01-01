<template>
    <div class="lg">
   <!-- height: -webkit-fill-available;-->
        <iframe v-if="if_show" :src="checkUrl" frameborder="0" height="100%" width="100%"></iframe>
        <!-- <iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls' width='100%' height='600' frameborder='1'>
            </iframe> -->
        <img :src="imgUrl" v-if="imgUrl" style="width: 100%;display: block; margin: 30px auto;"/>
       
        <video :src="videoUrl" controls="controls" style="width: 80%;display: block; margin:20px auto;" v-if="videoUrl">
		当前浏览器不支持 video直接播放，点击这里下载视频： <a :href="videoUrl">下载视频</a>
		</video>
        <embed v-if="pdf_show" :src="previewUrl" type="application/pdf" width="100%" height="-webkit-fill-available">
        <!-- <div id="pdf_viewer"></div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
            	videoUrl:'',
            	imgUrl:'',
                checkUrl:'',
                format:"",
                if_show:false,
                previewUrl:'',
                pdf_show:false,
            }
        },
        created(){
        	 var filextension = this.$route.query.url.substring(this.$route.query.url.lastIndexOf("."), this.$route.query.url.length);
                    filextension = filextension.toLowerCase();
//				rm,rmvb,mpeg1-4 mov mtv dat wmv avi 3gp amv dmv flv,
				if(filextension=='.mp4'||filextension=='.ogg' ||filextension=='.webm' ||filextension=='.rmvb'||filextension=='.avi'){
					this.videoUrl=this.$route.query.url;
					return			
				}
//				bmp,jpg,png,tif,gif,pcx,tga,exif,fpx,svg,psd,cdr,pcd,dxf,ufo,eps,ai,raw,WMF,web
			if(filextension=='.jpg'||filextension=='.png' ||filextension=='.gif' ||filextension=='.svg'||filextension=='.bmp'){
				this.imgUrl=this.$route.query.url;
				return			
			}
            if (filextension=='pdf') {
                this.pdf_show=true;
                this.previewUrl=this.$route.query.url;
            }else{
                this.if_show=true;
                this.pdf_show=false;
                this.checkUrl =  this.checkUrl = 'https://view.officeapps.live.com/op/view.aspx?src='+this.$route.query.url;
            }
            
        }
    }
</script>

<style scoped lang='less'>
.lg{
    width: 100%;
    height: 100%;
    #pdf_viewer{
        width: 100%;
        height: 100%;
    }
}
iframe{
	height: -webkit-fill-available;
	height: 100vh;
}
</style>