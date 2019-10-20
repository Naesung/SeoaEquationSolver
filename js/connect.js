document.getElementById('btn').addEventListener('click',()=>{
  const equation = document.getElementById("input").value
  const res = main(equation)
  document.getElementById('display').innerHTML = res
})
function insert(str){
  document.getElementById('input').value+=str
}