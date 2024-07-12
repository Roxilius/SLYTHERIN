// API Melati
let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    search();
})
function search() {
    let form = document.getElementById('form-search').addEventListener("submit", (e)=>{
        let input = document.getElementById('keyword');
        if(input.value == ''){
            e.preventDefault();
        }else{
            localStorage.setItem('keyword',input.value);
        }
    });
}