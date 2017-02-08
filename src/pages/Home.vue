<template>
	<el-row class="panel">
		<!--标题-->
		<el-col :span="24" class="panel-top">
			<el-col :span="20" class="top-logo">
				<i class="fa fa-ship" aria-hidden="true"></i> <span>巡航舰</span>
			</el-col>
			<el-col :span="4" class="rightbar">
				<el-dropdown trigger="click">
					<span class="el-dropdown-link" style="color:#fff;cursor: pointer;">陈润程<i class="el-icon-caret-bottom el-icon--right"></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>个人信息</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<!--标题-->

		<!--主菜单-->
		<section class="main-menus">
			<el-menu default-active="2" class="el-menu-vertical-demo" style="width:140px;">
				<div class="main-menus-collapse"><i class="fa fa-bars"></i></div>
				<el-menu-item index="2"><i class="fa fa-line-chart"></i>运维&监控</el-menu-item>
			</el-menu>
		</section>
		<!--主菜单-->

		<!--内容-->
		<el-col :span="24" class="panel-center">
			<section class="sub-menus">
				<el-menu :default-active="$route.path" class="" @open="handleopen" @close="handleclose" @select="handleselect"
					unique-opened router>
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
					</el-menu>
			</section>
			<section class="panel-c-c">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" style="margin-bottom:15px;">
						<strong style="width:200px;float:left;color: #475669;">{{$route.name}}</strong>
						<el-breadcrumb separator="/" style="float:right;">
							<el-breadcrumb-item v-for="item in $route.matched">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
						<!--<transition name="fade">-->
						<router-view></router-view>
						<!--</transition>-->
					</el-col>
				</div>
			</section>
		</el-col>
		<!--内容-->
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});


			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
		}
	}

</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	.panel {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	
	.panel-top {
		height: 50px;
		line-height: 50px;
		background: #09C;
		color: #fff;
	}
	
	.panel-top .rightbar {
		text-align: right;
		padding-right: 35px;
	}
	
	.panel-top .rightbar .head {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
		float: right;
	}
	
	.top-logo {
		font-size: 20px;
		padding-left: 15px;
	}
	
	.main-menus{
		position: absolute;
		background: #324057;
		top: 50px;
		z-index: 999;
		bottom: 0;
	}
	.main-menus li{
		padding-left: 20px;
    	color: #fff;
    	background: #09C;
	}
	.main-menus .main-menus-collapse{
		width:100%;
		padding:4px 0px;
		background: #324057;
		color: #fff;
		text-align: center;
	}

	.sub-menus{
		width:200px;
		height: 100%;
    	background: #f1f2f3;
		position: absolute;
		left:0px;
		top: 0px;
		bottom: 0px;
	}

	.panel-center {
		background: #fff;
		position: absolute;
		left:140px;
		top: 50px;
		bottom: 0px;
		overflow: hidden;
	}
	
	.panel-c-c {
		background: #fff;
		margin-left: 200px;
		/*position: absolute;
		right: 0px;
		top: 0px;
		bottom: 0px;
		left: 200px;*/
		overflow-y: scroll;
		padding: 20px;
	}
	
	.logout {
		/*background: url(../assets/logout_36.png);*/
		background-size: contain;
		width: 20px;
		height: 20px;
		float: left;
	}
	
	.logo {
		width: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
	}
	
	.tip-logout {
		float: right;
		margin-right: 20px;
		padding-top: 5px;
	}
	
	.tip-logout i {
		cursor: pointer;
	}
	
	.admin {
		color: #c0ccda;
		text-align: center;
	}
</style>