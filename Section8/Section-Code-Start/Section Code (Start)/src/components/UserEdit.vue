<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age : {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    //main 에서 새로운 vue 인스턴스를 새성한 후 import 한다.
    import {eventBus} from "../main";
    export default{
        props:['userAge'],
        methods:{
            //정보를 부모노드를 통해 보내지 않고 새로운 vue 인스턴스를 통해 보낸다.
            editAge(){
                this.userAge=30;
                //this.$emit('ageWasEdited',this.userAge);
                //evenetBus를 통하여 전달하는 방식
                //eventBus.$emit('ageWasEdited',this.userAge);
                //eventBus내부에 미리 함수를 작성해놓고 값을 전달하는 방식
                eventBus.chageAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
