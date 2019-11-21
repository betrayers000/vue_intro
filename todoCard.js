
Vue.component('todo-card', {
template:`
    <div>
    <h1>{{title}}</h1>
    <h2>{{content}}</h2>
    </div>
`,
//
// props에 선언해주면 template 에서 변수로 사용가능하다.
// props로 component 간 데이터 이동이 가능하다.
props:{
    title: {
    type: String,
    required : true,
    // input은 title로 전달된 데이터
    validator: function(input){
        if (input.length < 5){
        return false
        } else {
        return true
        }
    }
    },
    content: {
    type: String,
    },
},
//
// data를 function으로 return 시키는 이유
// component 마다 독립적인 data를 가지게 하기 위해서
data: function(){
    return {}
},
methods:{},
})
