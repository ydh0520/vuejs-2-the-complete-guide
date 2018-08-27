<template>
    <div>
        <!-- 
        부모로부터 html 코드를 전송받기 위해서 slot을 사용한다.
        <slot></slot>
        -->
        <!--
            부모에서 부여된 이름을 사용하여 선택적으로 slot을 사용한다.
        -->
       <div class="title">
           <slot name = "title"></slot>
       </div>
       <hr>
       <div>
           <slot name = "contents"></slot>
       </div>
       <hr>
       <div>
           <!-- 해당하는 이름의  slot이 없을경우 태그안의 내용이 쓰여진다. : Slot defaults-->
           <slot name = "hihih">default value</slot>
       </div>
       <hr>
       <div>
           <!-- 부모에서 이름이 부여되지 않은 html 코드의 경우 default slot으로 구분된다. : Default slot-->
           <slot></slot>
       </div>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style scoped>
div{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding : 30px;
    margin:30px auto;
    text-align: center;
}
/*slot 으로 전달받은 html 태그의 경우 전달받는 쪽의 css를 따르게 된다.
 -> 변경되서 둘다 적용되나 전달받은 쪽의 css가 나중에 적용되어 중복될 경우
    전달받은 쪽의 css를 따른다.*/
h2{
    color:blue;
}
</style>
