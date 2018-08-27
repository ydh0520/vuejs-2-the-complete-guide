<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponet='appQutoe'">Quote</button>
                <button @click="selectedComponet='appAuthor'">Author</button>
                <button @click="selectedComponet='appNew'">New</button>

                <hr>
                <p>{{selectedComponet}}</p>
                <!-- 변수에 컴포넌트이름을 저장하여 사용하면 동적인 컴포넌트 사용이 가능하다.-->
                <!-- 이러한 컴포넌트의 변화가 일어날 때마다 해당하는 컴포넌트들이 destry되었다가 새로 생성된다-->
                <!--<component :is="selectedComponet"></component>-->
                
                <keep-alive>
                <!--keep alive를 사용할 경우 해당된는 컴포넌트가 파괴되지 않는다.-->
                <component :is="selectedComponet"></component>
                </keep-alive>

                <app-qutoe>
                    <!-- 자식 컴포넌트로 data가 아닌 html 코드를 전송하기 위해서는
                    자식 컴포넌트 사이에 전달하고자 하는 html 코드를 작성한다.-->
                    
                    <!-- 다양한 slot을 사용하기 위하여 슬롯에 구분할수 있는 이름을 부여한다.-->
                    <h2 slot="title">{{quoteTitle}}</h2>
                    <p slot ="contents">A wonderful Quote</p>
                    <p>default slot</p>
                </app-qutoe>

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue"
    import Author from "./components/Author.vue"
    import New from "./components/New.vue"
   
    export default {
        //css 와는 다르게 변수의 경우 부모에서 적용이 가능한다. 컴파일 차이;;
        data:function(){
            return {
                quoteTitle:'The Quote',
                selectedComponet:'appQutoe'
            }
        },
        components:{
            appQutoe :Quote,
            appAuthor : Author,
            appNew : New
        }
    }
</script>

<style scoped>
h2{
    color: red;
}
</style>
