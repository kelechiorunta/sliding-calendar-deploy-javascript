import { numberofdays } from './daysofmonth.js'
//const day_row = document.querySelectorAll('.day_row')
var day_row = document.querySelectorAll('.day_row')
var monthnumber = new Date().getMonth()+1;
var day_number = 1
var currentyear = 2024
var day_week = new Date(`${monthnumber}-${day_number}-${currentyear}`).getDay()
var todaydate = new Date().getDate()
var n = 0;
var index_lastcells = 0;
var nums = [];
var newrow = 0;
var nn = 0;
var day_cell;
var daysinmonth = numberofdays(monthnumber, currentyear)
var daysinprevmonth = numberofdays(monthnumber - 1, currentyear)
var lastday_week = new Date(`${monthnumber}-${daysinmonth}-${currentyear}`).getDay()
const fulldate = document.querySelector('.fulldate')
//const navBtn = document.querySelectorAll('.prev')
const body = document.querySelector('body')
const overall = document.querySelector('.overall_container')
var calendar_container = document.createElement('div')
var newCalendar = document.createElement('table');
var newlabel = document.createElement('tr');
var datelabel = document.createElement('h1');
var nav = document.createElement('div');
var navicon_backward = document.createElement('i');
var navicon_forward = document.createElement('i');
var navBtn_backward = document.querySelector(`.back${newrow}`);
var navBtn_forward = document.querySelector('.front');



//console.log(todaydate)
console.log(lastday_week)
    function initiator(rows_arg, cellclass){
        //day_row = "";
        day_row = document.querySelectorAll(`.${rows_arg}`)
        for (let i=1; i<=42; i++){
            var day_cell = document.createElement('td');
            day_cell.setAttribute('id', i)
            day_cell.setAttribute('class', `${cellclass}`)
            //day_cell.innerText = i;
            if (day_row[n].children.length === 7){
                n++
            }
            
            day_row[n].appendChild(day_cell)
        }
    }



    function createdate(cellclass){
        day_week = new Date(`${monthnumber}-${day_number}-${currentyear}`).getDay()
        //prevmonth_day_week = new Date(`${monthnumber - 1}-${day_number}-${currentyear}`).getDay()
        daysinmonth = numberofdays(monthnumber, currentyear)
        daysinprevmonth = numberofdays(monthnumber - 1, currentyear)
        lastday_week = new Date(`${monthnumber}-${daysinmonth}-${currentyear}`).getDay()
        var cell = document.querySelectorAll(`.${cellclass}`)

        cell.forEach(item=>{item.innerText = ""; item.classList.remove('currentcell');
        item.classList.remove('selected')})

        for (let m = day_week-1; m>=0; m--){
            cell[m].innerText = daysinprevmonth
            cell[m].classList.remove('currentcell')
            cell[m].classList.remove('selected')
            cell[m].classList.add('oddcell')
            daysinprevmonth --
        }

        for (let c = 1; c <= daysinmonth ; c++ ){
            cell[day_week].innerText = c;
            c===todaydate && cell[day_week].classList.add('selected')//style.setProperty('background', 'rgba(0,0,0,0.3)')
            
            cell[day_week].classList.add('currentcell')
            cell[day_week].classList.remove('oddcell')
           
            day_week ++
            
            //nums.push(cell[day_week-1])
            
            
        }

        for (let l = day_week; l<42; l++){
            cell[l].classList.remove('currentcell')
            cell[l].classList.remove('selected')
            cell[l].classList.add('oddcell')
            index_lastcells++
            cell[l].innerText = index_lastcells
            
        }

        // console.log([nums,1,2,3,5])
        fulldate.innerText =  new Date(`${monthnumber},${todaydate},${currentyear}`).toDateString() 
        datelabel.innerText = new Date(`${monthnumber},${todaydate},${currentyear}`).toDateString()
    
}
initiator('day_row', 'daycell');
createdate('daycell');
//day_cell = "";

        // navBtn.forEach(btn=>{
        //     btn.addEventListener('click', (e) =>{
        //         const target = e.target;
        //         if(target.matches('.prev')){
        //             if (monthnumber <= 1){
        //                 currentyear -= 1
        //                 monthnumber = 12}
        //             else
        //                 {monthnumber -= 1}
        //         }
        //         else if(target.matches('.next')){
        //             if (monthnumber >= 12){
        //                 currentyear += 1
        //                 monthnumber = 1}
        //             else
        //                 {monthnumber += 1}
                    
        //         }
        //         index_lastcells =  0
        //         daysinmonth = 0
        //         createdate(`daycell`)
        //     })
        // })

        // function selectday(){
        //     const currentcell = document.querySelectorAll('.currentcell');
        //     const inputdate = document.querySelector('#input_currentdate');
            
        //     currentcell.forEach((cell, index)=>{
        //         cell.addEventListener('click', function(e){const selectedid = e.target.id;
        //             console.log(selectedid); alert("hi");
        //             inputdate.value = new Date(`${monthnumber},${this.innerText},${currentyear}`).toDateString()
        //             // (index!==selectedid) && (currentcell.classList.remove('expand'));
        //         })
        //     })
        // }

        //selectday()

        const btncreate_next = document.querySelector('.next_calendar')
        const btncreate_prev = document.querySelector('.prev_calendar')

        function createCalendar(element, nn=1, posCurrentCalendar, posPrevCalendar){
            calendar_container = document.createElement('div')
            newCalendar = document.createElement('table');
            newlabel = document.createElement('tr');
            datelabel = document.createElement('h1');
            nav = document.createElement('div');
            navicon_backward = document.createElement('i');
            navicon_forward = document.createElement('i');
            navicon_backward.setAttribute('class', 'fas fa-backward')
            navicon_forward.setAttribute('class', 'fas fa-forward')
            datelabel.setAttribute('class', 'fulldate')
            nav.setAttribute('class', 'nav')
            nav.appendChild(navicon_backward)
            nav.appendChild(datelabel)
            nav.appendChild(navicon_forward)
            newCalendar.appendChild(newlabel)
           
           
            newrow++ 
            navicon_backward.classList.add(`back${newrow}`)
            navicon_forward.classList.add(`front${newrow}`)

            for (let l=1; l<8; l++){
                const newlabel_weekday = document.createElement('th')
                const dayrow = document.createElement('tr')
                newlabel_weekday.innerText = wkdayname(l)
                newlabel_weekday.setAttribute('class', 'label_weekday')
                newlabel_weekday.classList.add('labelwkday')
                newlabel.appendChild(newlabel_weekday)
                dayrow.setAttribute('id', l)
                dayrow.setAttribute('class', `new_row${newrow}`)
                newCalendar.appendChild(dayrow)
                
            }

            newCalendar.classList.add('calendar_grid')
            newlabel.classList.add('label_row')

          

            calendar_container.appendChild(nav)
            calendar_container.appendChild(newCalendar)
            calendar_container.classList.add('calendar_container')
            calendar_container.setAttribute('class','calendar_container')
            
            //overall.appendChild(nav)
            overall.appendChild(calendar_container)
            
            calendar_container.setAttribute('id', `${nn}`)

            if (overall.children.length > 1){
                calendar_container.previousElementSibling.classList.remove('visible')
                calendar_container.previousElementSibling.classList.add(`${posPrevCalendar}`)
            }
            
            
            calendar_container.classList.add(`${posCurrentCalendar}`)
           
            if (element==="next"){
                calendar_container.scrollIntoView({ behavior: 'smooth', block: 'center' , inline:'center'}) 
            }
            else{
                calendar_container.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'center' , inline:'center'});
            }
            
            calendar_container.classList.add('visible')
            
            var navBtn_backward = document.querySelector(`.back${newrow}`);
            var navBtn_forward = document.querySelector(`.front${newrow}`);

            console.log(navBtn_backward, navBtn_forward)

            navBtn_backward.addEventListener('click', function(){
                createCalendar("next", monthnumber, 'start_left', 'invisible_right');
                
                n=0
                daysinprevmonth = 0
                day_week = 0;
                index_lastcells = 0
    
                if (monthnumber <= 1){
                    currentyear -= 1
                    monthnumber = 12}
                else
                    {monthnumber -= 1}
               
                initiator(`new_row${newrow}`, `newrow${newrow}`);
                createdate(`newrow${newrow}`);
                selectday()
            })
    
            navBtn_forward.addEventListener('click', function(){
                createCalendar("prev", monthnumber, 'start_right', 'invisible_left');
                n=0
                daysinprevmonth = 0
                day_week = 0;
                index_lastcells = 0
    
                if (monthnumber >= 12){
                    currentyear += 1
                    monthnumber = 1}
                else
                    {monthnumber += 1}
                
                initiator(`new_row${newrow}`, `newrow${newrow}`);
                createdate(`newrow${newrow}`);
                selectday();
            })

            

        
        }

        function selectday(){
            var currentcell = document.querySelectorAll('.currentcell');
            var inputdate = document.querySelector('#input_currentdate');
            
            currentcell.forEach((cell, index)=>{
                cell.addEventListener('click', function(e){const selectedid = e.target.id;
                    console.log(selectedid); //alert("hi");
                    inputdate.value = new Date(`${monthnumber},${this.innerText},${currentyear}`).toDateString()
                    // (index!==selectedid) && (currentcell.classList.remove('expand'));
                })
            })
        }

        //selectday()

        btncreate_next.addEventListener('click', function(){
 
            createCalendar("next", monthnumber, 'start_left', 'invisible_right');
            n=0
            daysinprevmonth = 0
            day_week = 0;
            index_lastcells = 0

            if (monthnumber >= 12){
                currentyear += 1
                monthnumber = 1}
            else
                {monthnumber += 1}
            
            initiator(`new_row${newrow}`, `newrow${newrow}`);
            createdate(`newrow${newrow}`);

            selectday();
        
            
        })

        btncreate_prev.addEventListener('click', function(){
            
            createCalendar("prev", monthnumber, 'start_right', 'invisible_left');
            n=0
            daysinprevmonth = 0
            day_week = 0;
            index_lastcells = 0

            if (monthnumber <= 1){
                currentyear -= 1
                monthnumber = 12}
            else
                {monthnumber -= 1}
           
            initiator(`new_row${newrow}`, `newrow${newrow}`);
            createdate(`newrow${newrow}`);

            selectday()
            
        })

        {createCalendar("next", 1, 'visible', 'visible');
            n=0
            daysinprevmonth = 0
            day_week = 0;
            index_lastcells = 0
            
            initiator(`new_row${newrow}`, `newrow${newrow}`);
            createdate(`newrow${newrow}`);}

            selectday()

        
        

        function wkdayname(dayweek_num){
            switch (dayweek_num){
                case 1:{
                    return "Sun"
                }
                case 2:{
                    return "Mon"
                }
                case 3:{
                    return "Tue"
                }
                case 4:{
                    return "Wed"
                }
                case 5:{
                    return "Thur"
                }
                case 6:{
                    return "Fri"
                }
                case 7:{
                    return "Sat"
                }
                default:{
                    return ""
                }
            }
        }

        // const calendar_container = document.createElement('div')
        //     const newCalendar = document.createElement('table');
        //     const newlabel = document.createElement('tr');
        //     newCalendar.appendChild(newlabel)
        //     //newrow = 0;
        //     newrow++
        //     for (let l=1; l<8; l++){
        //         const newlabel_weekday = document.createElement('th')
        //         const dayrow = document.createElement('tr')
        //         newlabel_weekday.innerText = wkdayname(l)
        //         newlabel_weekday.setAttribute('class', 'label_weekday')
        //         newlabel_weekday.classList.add('labelwkday')
        //         newlabel.appendChild(newlabel_weekday)
        //         dayrow.setAttribute('id', l)
        //         dayrow.setAttribute('class', `new_row${newrow}`)
        //         newCalendar.appendChild(dayrow)
                
        //     }

        //     newCalendar.classList.add('calendar_grid')
        //     newlabel.classList.add('label_row')
        //     calendar_container.classList.remove('start_left')
        //     calendar_container.classList.add('start_right')
        //     calendar_container.classList.add('calendar_container')
            
        //     calendar_container.appendChild(newCalendar)
            
        //     //body.appendChild(calendar_container)
           
            
        //     overall.appendChild(calendar_container)
            
        //     //calendar_container.classList.remove('invisible_right')
        //     calendar_container.nextElementSibling.classList.add('invisible_left')
        //     //if (calendar_container.previousElementSibling.length>=0){
        //         calendar_container.scrollIntoView({ behavior: 'smooth', block: 'center' , inline:'start'});
        //     //}
        //     //else{
        //     //calendar_container.scrollIntoView({ behavior: 'smooth', block: 'center' , inline:'start'});
        //     calendar_container.classList.add('visible')
        //     //calendar_container.previousElementSibling.remove()
            