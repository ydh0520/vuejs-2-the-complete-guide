<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name:{{name}}</p>
        <p>User Name Reverse:{{switchName()}}</p>
        <p>User Name age:{{userAge}}</p>
        <button @click="resetName">ResetName</button>
        <button @click="resetFn()">ResetFn</button>    
    </div>
</template>

<script>
    import {eventBus} from "../main";
    export default{
        //props을 통하여 부모컴포넌트의 속성을 가져올수 있다.
        //props:['name'],
        props:{
            //다음과 같은 작업을 통하여 전달받은 data의 type를 설정할수 있으며 일치하지 않을경우 에러가 발생한다.
            //name:String
            name:{
                //다음 과 같은 옵션을 추가 할 수 있다.
                type:String,//type설정
                default:"default",//default값 설정
                required:true//필요성 
            },
            resetFn:Function,
            userAge:Number
        },
        methods:{
            //pros를 통하여 전달받은 data를 사용할수 있다.
            switchName(){
                return this.name.split("").reverse().join("");
            },
            //array 또는 object의 경우 포인터로 전달되기 때문에 자식 compnet에서 값을 변경할 경우 자동으로 부모copmponet의 값도 변경된다.
            //String이나 다른 변수의 경우 
            resetName(){
                this.name="ydh";
                //다른 기초 자료형의 경우 자료가 변했음을 알리는 이벤트를 추가해야한다.
                this.$emit('nameWasReset',this.name);
            }
        },
        // 부모노드를 거치치 않고 통신하는 방법
        created(){
            eventBus.$on('ageWasEdited',(age)=>{
                this.userAge=age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
