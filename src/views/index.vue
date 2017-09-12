<style scoped>
.layout {
    border: 1px solid #d7dde4;
    border-radius: 8px;
    margin: 4px;

    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
}

.color-fff {
    color: #fff
}

.font-10 {
    font-size: 10pt;
}

.layout-header {
    background: #2b85e4;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 80px;
}

.layout-header-logo {
    height: 80px;
    line-height: 80px;
    margin-left: 10px;
    float: left;
}

.layout-header-title {
    height: 80px;
    line-height: 80px;
    float: left;
    font-size: 20pt;
    color: #fff;
    margin-left: 15px;
}

.layout-header-fun {
    height: 80px;
    line-height: 80px;
    float: right;
    margin-right: 15px;
}


.layout-content {
    position: absolute;
    top: 80px;
    right: 0px;
    left: 0px;
    bottom: 0px;
}

.layout-content-main {
    padding: 10px;
    height: 100%;
    overflow: auto;
    border-bottom-right-radius: 8px;
}

.layout-content-nav {
    height: 100%;
    float: left;
    overflow: auto;
    border-bottom-left-radius: 8px;
}
</style>
<template>
    <div class="layout">
        <div class="layout-header">
            <img class="layout-header-logo" src="../img/logo.png"></img>
            <div class="layout-header-title">iview管理系统</div>
            <div class="layout-header-fun">
                <a href="javascript:void">
                    <Icon type="android-contact" size="15" color="#fff"></Icon>
                    <span class="color-fff font-10">欢迎您，小潘</span>
                </a>
            </div>
        </div>
        <div class="layout-content">
            <Menu class="layout-content-nav" active-name="1-2" min-width="300px" :open-names="['1']" @on-select="toggleMenu">
                <Submenu v-for="(menu, key) in menus" v-bind:key="key" v-bind:name="menu.name">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{ menu.name }}
                    </template>
                    <MenuItem v-for="(m,k) in menu.menus" v-bind:key="k" v-bind:name="m.name">{{m.name}}</MenuItem>
                </Submenu>
            </Menu>
            <div class="layout-content-main">
                <router-view></router-view>
                <!-- <Tabs id="Tabs" type="card" @on-tab-remove="handleTabRemove" v-bind:value="activeTabName">
                    <TabPane label="首页" name="首页" v-bind:style="{ height:autoHeight + 'px' }">
                        <iframe src="http://map.baidu.com/" width="100%" height="100%" border="0px"></iframe>
                    </TabPane>
                    <TabPane closable v-for="(tab, key) in tabs" v-bind:key="key" v-bind:style="{ height:autoHeight + 'px' }" v-bind:label="tab.name" v-bind:name="tab.name" v-if="tab.show">
                         <router-view></router-view>
                    </TabPane>
                </Tabs> -->
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            autoHeight: 200,
            menus: [{
                "id": 1, "name": "基础资料", "menus": [
                    { "id": 11, "name": "卡片信息", "action": "/basic/userManage" },
                    { "id": 12, "name": "设备信息" },
                    { "id": 13, "name": "用户授权" },
                ]
            }, {
                "id": 2, "name": "系统监控", "menus": [
                    { "id": 21, "name": "消防联动" },
                    { "id": 22, "name": "设备状态" },
                    { "id": 23, "name": "刷卡记录" },
                ]
            }, {
                "id": 3, "name": "消费管理", "menus": [
                    { "id": 31, "name": "消费充值" },
                    { "id": 32, "name": "消费记录" },
                    { "id": 33, "name": "消费结余" },
                ]
            }, {
                "id": 4, "name": "考勤管理", "menus": [
                    { "id": 41, "name": "考勤设置" },
                    { "id": 42, "name": "考勤登记" },
                    { "id": 43, "name": "考勤统计" },
                ]
            }],
            "prefixCls": "",
            "activeTabName": "",
            "tabs": []
        }
    },
    methods: {
        handleTabRemove(name) {
            for (var i = 0; i < this.tabs.length; i++) {
                if (this.tabs[i]["name"] === name) {
                    this.tabs[i]["show"] = false;
                    return;
                }
            }
        },
        toggleMenu(name) {
            for (var i = 0; i < this.tabs.length; i++) {
                if (this.tabs[i]["name"] === name) {
                    this.tabs[i]["show"] = true;
                    this.activeTabName = name;
                    return;
                }
            }

            console.log("add new tab,name is:" + name);
            this.tabs.push({ "name": name, "show": true });
            this.activeTabName = name;
            this.$router.push('/view/basic/userManage') ;
        }
    },
    mounted() {
        this.$nextTick(() => {
            let tabDiv = document.querySelectorAll("div[class='ivu-tabs-bar']");
            let contentDiv = document.querySelectorAll("div[class='layout-content-main']");
            this.autoHeight = contentDiv[0].offsetHeight - tabDiv[0].offsetHeight - 40;
        })
    }
}
</script>