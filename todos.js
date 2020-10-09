const button=document.getElementById('btnn')
const form=document.getElementById('form')
const todo_list=document.getElementById('list')
const li=document.getElementsByTagName('li')
var arr=[]



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    fun()
})


function fun(){
    const input_value=document.getElementById('input1')
    if(input_value.value){

        var li=document.createElement('li')
        var strr=input_value.value
        // console.log(strr)
        li.innerHTML=input_value.value+'<i class="gg-close " onclick=remove(this)></i>'
        todo_list.appendChild(li)
        li.addEventListener('click',()=>{
            li.classList.toggle('complete')
        })
        input_value.value=''
        
        update(strr)
              
    }

}


function remove(a){
  a.parentNode.remove()
}

function update(strr){
   arr.push({'task':strr})
 
   localStorage.setItem(arr,JSON.stringify(arr))
}
