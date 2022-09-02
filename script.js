const menuItems=[
    {
    id:1,
    item:"Beef Kabab",
    onerLiner : "One: A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of four PSD and four AI files that are fully layered for easy customisation.",
    img:"image/img2.jpg",
    hotel:"Salhuya Resturant",
    desc:"A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of"
},

{
    id:2,
    item:"Food Item2",
    onerLiner : "Two:A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of four PSD and four AI files that are fully layered for easy customisation.",
    img:"image/img1.jpg",
    hotel:"Hotel name2",
    desc:"A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of" 
},
{
    id:3,
    item:"Food Item3",
    onerLiner : "Three:A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of four PSD and four AI files that are fully layered for easy customisation.",
    img:"image/img3.jpg",
    hotel:"Hotel name3",
    desc:"A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of" 
},
{
    id:4,
    item:"Food Item4",
    onerLiner : "Three:A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of four PSD and four AI files that are fully layered for easy customisation.",
    img:"image/img4.jpg",
    hotel:"Hotel name4",
    desc:"A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of" 
},
{
    id:5,
    item:"Food Item5",
    onerLiner : "Five:A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of four PSD and four AI files that are fully layered for easy customisation.",
    img:"image/img5.jpg",
    hotel:"Hotel name5",
    desc:"A gorgeous menu design for a semi-casual restaurant, this well-organised template consists of" 
},

]

const item=document.getElementById('item');
const onerLiner=document.getElementById('onerLiner');
const img=document.getElementById('img');
const hotel=document.getElementById('hotel');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

let currentMenu=0;

window.addEventListener('DOMContentLoaded',function(){
    allMenu(currentMenu);

})

const allMenu=()=>{
    let menu = menuItems[currentMenu];
    item.textContent=menu.item;
    onerLiner.textContent=menu.onerLiner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;
 
}


random.addEventListener('click',()=>{
    currentMenu = Math.floor(Math.random*menuItems.length);
   allMenu(currentMenu);
    //console.log(currentMenu);
})

prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu = currentMenu.length-1;
    }
    allMenu(currentMenu);
})








