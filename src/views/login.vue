<style scoped>
@import '../css/size.css';

.layout {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

.login {
    width: 400px;
    height: 250px;
    position: relative;
    border: 1px solid #d7dde4;
    border-radius: 8px;
    margin: 10% auto;
}

.login-header {
    width: 100%;
    height: 50px;
    background: #2b85e4;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.login-header-logo {
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
    float: left;
}

.login-header-title {
    height: 50px;
    line-height: 50px;
    float: left;
    font-size: 20pt;
    color: #fff;
    margin-left: 15px;
}

.login-content {
    padding: 20px;
}

.login-content-row {
    margin: 20px;
}

.login-content-bottom {
    margin: 20px;
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <div class="login">
            <div class="login-header">
                <img class="login-header-logo" src="../img/logo.png"></img>
                <div class="login-header-title">iview管理系统</div>
            </div>
            <div class="login-content">
                <Row class="login-content-row">
                    <Col span="2">
                    <Icon type="ios-person" size="25"></Icon>
                    </Col>
                    <Col span="22">
                    <Input v-model="username" placeholder="请输入用户名"></Input>
                    </Col>
                </Row>
                <Row class="login-content-row">
                    <Col span="2">
                    <Icon type="key" size="25"></Icon>
                    </Col>
                    <Col span="22">
                    <Input v-model="password" placeholder="请输入密码"></Input>
                    </Col>
                </Row>
                <Row class="login-content-bottom">
                    <Col span="24">
                    <Button type="ghost" shape="circle" size="large" @click="reset">重置</Button>
                    <span class="width-30"></span>
                    <Button type="primary" shape="circle" size="large" @click="login">登录</Button>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            "username": "",
            "password": ""
        }
    },
    methods: {
        reset() {
            this.username = "";
            this.password = "";
        },
        login() {
            if(this.username === '' || this.password === ''){
                this.$Message.error('用户名或密码为空');
            }else{
                this.$router.push({ path: '/view' }) 
            }
        }
    }
}
</script>