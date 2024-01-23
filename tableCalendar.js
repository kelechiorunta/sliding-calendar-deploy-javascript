import { numberofdays } from './daysofmonth.js'
const day_row = document.querySelectorAll('.day_row')
var monthnumber = new Date().getMonth()+1;
var day_number = 1
var currentyear = 2024
var day_week = new Date(`${monthnumber}-${day_number}-${currentyear}`).getDay()
var todaydate = new Date().getDate()
var n = 0;
var index_lastcells = 0;
var nums = [];
var daysinmonth = numberofdays(monthnumber, currentyear)
var daysinprevmonth = numberofdays(monthnumber - 1, currentyear)
var lastday_week = new Date(`${monthnumber}-${daysinmonth}-${currentyear}`).getDay()
const fulldate = document.querySelector('.fulldate')
const navBtn = document.querySelectorAll('i')

//console.log(todaydate)
console.log(lastday_week)

for (let i=1; i<=42; i++){
   
    const day_cell = document.createElement('td');
    day_cell.setAttribute('id', i)
    day_cell.setAttribute('class', "daycell")
    //day_cell.innerText = ""
    if (day_row[n].children.length === 7){
        n++
    }
    
    day_row[n].appendChild(day_cell)
}

    function createdate(){
        day_week = new Date(`${monthnumber}-${day_number}-${currentyear}`).getDay()
        //prevmonth_day_week = new Date(`${monthnumber - 1}-${day_number}-${currentyear}`).getDay()
        daysinmonth = numberofdays(monthnumber, currentyear)
        daysinprevmonth = numberofdays(monthnumber - 1, currentyear)
        lastday_week = new Date(`${monthnumber}-${daysinmonth}-${currentyear}`).getDay()
        const cell = document.querySelectorAll('.daycell')

        cell.forEach(item=>{item.innerText = ""; item.style.setProperty('background', 'none');
        item.style.setProperty('color', 'black'); item.style.setProperty('font-size', '15px');
        item.style.setProperty('opacity', '1')})

        for (let m = day_week-1; m>=0; m--){
            cell[m].innerText = daysinprevmonth
            cell[m].style.fontSize = `12px`
            cell[m].style.color = `white`
            cell[m].style.background = `rgba(0,0,0,0.4)`
            cell[m].style.opacity = `0.4`
            daysinprevmonth --
        }

        for (let c = 1; c <= daysinmonth ; c++ ){
            cell[day_week].innerText = c;
            c===todaydate && cell[day_week].style.setProperty('background', 'rgba(0,0,0,0.3)')
            day_week ++
            //nums.push(cell[day_week-1])
            
            
        }

        for (let l = day_week; l<42; l++){
            index_lastcells++
            cell[l].innerText = index_lastcells
            cell[l].style.fontSize = `12px`
            cell[l].style.color = `white`
            cell[l].style.background = `rgba(0,0,0,0.4)`
            cell[l].style.opacity = `0.4`
        }

        // console.log([nums,1,2,3,5])
        

        //day_row.forEach(item=>{((item.children.length===7) && (item.children[0].innerText==="") && (item.children[6].id>31)) && (console.log(item.remove())) })
        //cell.forEach(item=>{((item.id > (daysinmonth - lastday_week)) && (item.id<=42)) && (item.remove())})
        fulldate.innerText =  new Date(`${monthnumber},${todaydate},${currentyear}`).toDateString() 
    
}

createdate();

        navBtn.forEach(btn=>{
            btn.addEventListener('click', (e) =>{
                const target = e.target;
                if(target.matches('.prev')){
                    if (monthnumber <= 1){
                        currentyear -= 1
                        monthnumber = 12}
                    else
                        {monthnumber -= 1}
                }
                else if(target.matches('.next')){
                    if (monthnumber >= 12){
                        currentyear += 1
                        monthnumber = 1}
                    else
                        {monthnumber += 1}
                    
                }
                index_lastcells =  0
                daysinmonth = 0
                createdate()
            })
        })