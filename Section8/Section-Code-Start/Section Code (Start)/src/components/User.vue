<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="chageName">Chage my name</button>
        <p>{{name}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- vinde 를 통하여 자식 component에게 data를 보낼수 있으며 vbind를 사용하지 않을 경우
                즉 name="name"과 같이 사용할 경우 동적 data 공유가 아닌 정적인 방법으로 전달된다.(자식에서는 name을 'name'으로 전달 받음)-->
                <!-- 자식에서 porps로 넘긴 data의 값이 변경될경우 이벤트를 통하여 전달하기 때문에 이벤트를 받아들이는 코드를 추가한다-->
                <app-user-detail 
                    :name="name" 
                    @nameWasReset="name=$event" 
                    :resetFn="resetName" 
                    :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age=$event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data:function(){
            return {
                name:"ydh",
                age:20
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods:{
            chageName(){
                this.name="YUN"
            },
            resetName(){
                this.name="ydh"
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
