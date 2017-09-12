<template>
    <div>
        <Row :gutter="16" type="flex" justify="start" align="middle" class="margin-b-10">
            <Col span="1">编号</Col>
            <Col span="3">
            <Input></Input>
            </Col>
            <Col span="1">姓名</Col>
            <Col span="3">
            <Input></Input>
            </Col>
            <Col span="2">身份证</Col>
            <Col span="3">
            <Input></Input>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <Table size="small" :columns="table.columns1" :data="table.data1"></Table>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {
           table:{
                columns1: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }
            ]
           }
        }
    },
    mounted() {
        this.$nextTick(() => {
        })
    }
}

</script>

<style>
@import '../../css/size.css';
</style>
