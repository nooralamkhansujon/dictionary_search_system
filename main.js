// get input element
let filterInput = document.getElementById('filterinput');


filterInput.addEventListener('keyup',filterName);

function filterName(){
    /// get value of input
    filterValue = document.getElementById('filterinput').value.toUpperCase();

    // get ul
    let ul = document.getElementById("names");
    let lilist = ul.querySelectorAll('.collection-item');

   for(let i = 0; i<lilist.length;i++){
      let a = lilist[i].getElementsByTagName('a')[0];

      if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        lilist[i].style.display="";
      }else{
        lilist[i].style.display='none';
      }
   }

}



//
// function filterName(){
//   // get value of input
//   let filterValue = document.getElementById('filterinput').value.toUpperCase();
//
//    // get name ul
//    let ul = document.getElementById('names');
//    // get li from ul
//    let li = ul.querySelectorAll('li.collection-item');
//    for(let i = 0; i<li.length;i++){
//    let a = li[i].getElementsByTagName('a')[0];
//    if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
//      li[i].style.display='';
//    }else{
//      li[i].style.display='none'
//   }
// }
// }
