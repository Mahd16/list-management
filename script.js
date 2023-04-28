let list = document.querySelector('ul');
let search = document.querySelector('input');
let input = document.querySelector('footer input');
let add = document.querySelector('footer button');

list.addEventListener('click',(e)=>{
    if(e.target.nodeName == 'BUTTON'){
        e.target.parentNode.remove()
        if(list.children.length == 0){
            let empty = document.createElement("div");
            empty.style.textAlign = 'center'
            empty.innerText = 'لیست خالی میباشد'
            empty.id = 'empty'
            list.appendChild(empty)

        }
    }

})

add.addEventListener('click',(e)=>{
    if(!input.value){
        return
    }
    
    if(document.querySelector('#empty')){
        document.querySelector('#empty').remove()
    }

    list.appendChild(creation(input.value))
    input.value = ""
    
})

function creation(value){
    let item = document.createElement('li')
    let title = document.createElement('span')
    let btn = document.createElement('button')
    title.innerText = value
    btn.innerText = 'حذف'
    item.appendChild(title)
    item.appendChild(btn)
    return item
}

search.addEventListener('input',(e)=>{
    Array.from(list.children).forEach(element=>{
        if(document.querySelector('#empty')){
            return
        }
        if(element.querySelector('span').innerText.includes(e.target.value)){
            element.style.display = 'flex'
        }
        else{
            element.style.display = 'none'

        }


    })
})