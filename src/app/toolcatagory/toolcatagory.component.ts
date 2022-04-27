import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-toolcatagory',
  templateUrl: './toolcatagory.component.html',
  styleUrls: ['./toolcatagory.component.css']
})
export class ToolcatagoryComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   [x: string]:any;
// //   Tool_Name:any;
// //   clock:any;
// //   _cumulativeLab:any;
// //   _quaterLab:any;
  
// //   idToken = localStorage.getItem('csrftoken');
// apiRoot: string = "http://127.0.0.1:8001";
// //  apiRoot: string = "http://127.0.0.1:8001";
// //options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.cookie.get('csrftoken')}) };
  
//   constructor(private _data1:DataService,private http:HttpClient,) { }

//   ngOnInit() {

//     setInterval(()=>{
//         this.clock = Date.now();
//       },1000);


    
//     this.http.get(this.apiRoot+'/api/tool_category_data/1/').subscribe(data =>{
//       this._labListed1 = data as [any];
//       if (this._labListed1.Tool_efficiency === false) {
//         $('#lab1').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed1.Tool_efficiency === true) {
//         $('#lab1').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab1").hover(()=>{
//         if (this._labListed1.Tool_Category === "Qualifications") {
//             $('#lab1').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed1.Tool_Category === "Field Issues") {
//             $('#lab1').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed1.Tool_Category === "Process") {
//             $('#lab1').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed1.Tool_efficiency === false) {
//             $('#lab1').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed1.Tool_efficiency === true) {
//             $('#lab1').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

    
//     this.http.get(this.apiRoot+'/api/tool_category_data/2/').subscribe(data =>{
//       this._labListed2 = data as [any];
//       if (this._labListed2.Tool_efficiency === false) {
//         $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed2.Tool_efficiency === true) {
//         $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab2").hover(()=>{
//         if (this._labListed2.Tool_Category === "Qualifications") {
//             $('#lab2').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed2.Tool_Category === "Field Issues") {
//             $('#lab2').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed2.Tool_Category === "Process") {
//             $('#lab2').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed2.Tool_efficiency === false) {
//             $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed2.Tool_efficiency === true) {
//             $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })
    
//     this.http.get(this.apiRoot+'/api/tool_category_data/3/').subscribe(data =>{
//       this._labListed3 = data as [any];
//       if (this._labListed3.Tool_efficiency === false) {
//         $('#lab3').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed3.Tool_efficiency === true) {
//         $('#lab3').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab3").hover(()=>{
//         if (this._labListed3.Tool_Category === "Qualifications") {
//             $('#lab3').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed3.Tool_Category === "Field Issues") {
//             $('#lab3').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed3.Tool_Category === "Process") {
//             $('#lab3').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed3.Tool_efficiency === false) {
//             $('#lab3').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed3.Tool_efficiency === true) {
//             $('#lab3').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })
    
//     this.http.get(this.apiRoot+'/api/tool_category_data/4/').subscribe(data =>{
//       this._labListed4 = data as [any];
//       if (this._labListed4.Tool_efficiency === false) {
//         $('#lab4').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed4.Tool_efficiency === true) {
//         $('#lab4').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab4").hover(()=>{
//         if (this._labListed4.Tool_Category === "Qualifications") {
//             $('#lab4').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed4.Tool_Category === "Field Issues") {
//             $('#lab4').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed4.Tool_Category === "Process") {
//             $('#lab4').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed4.Tool_efficiency === false) {
//             $('#lab4').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed4.Tool_efficiency === true) {
//             $('#lab4').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })
    
//     this.http.get(this.apiRoot+'/api/tool_category_data/5/').subscribe(data =>{
//       this._labListed5 = data as [any];
//       if (this._labListed5.Tool_efficiency === false) {
//         $('#lab5').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed5.Tool_efficiency === true) {
//         $('#lab5').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab5").hover(()=>{
//         if (this._labListed5.Tool_Category === "Qualifications") {
//             $('#lab5').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed5.Tool_Category === "Field Issues") {
//             $('#lab5').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed5.Tool_Category === "Process") {
//             $('#lab5').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed5.Tool_efficiency === false) {
//             $('#lab5').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed5.Tool_efficiency === true) {
//             $('#lab5').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })
    
//     this.http.get(this.apiRoot+'/api/tool_category_data/6/').subscribe(data =>{
//       this._labListed6 = data as [any];
//       if (this._labListed6.Tool_efficiency === false) {
//         $('#lab6').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed6.Tool_efficiency === true) {
//         $('#lab6').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab6").hover(()=>{
//         if (this._labListed6.Tool_Category === "Qualifications") {
//             $('#lab6').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed6.Tool_Category === "Field Issues") {
//             $('#lab6').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed6.Tool_Category === "Process") {
//             $('#lab6').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed6.Tool_efficiency === false) {
//             $('#lab6').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed6.Tool_efficiency === true) {
//             $('#lab6').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })
    
//     this.http.get(this.apiRoot+'/api/tool_category_data/7/').subscribe(data =>{
//       this._labListed7 = data as [any];
//       if (this._labListed7.Tool_efficiency === false) {
//         $('#lab7').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed7.Tool_efficiency === true) {
//         $('#lab7').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab7").hover(()=>{
//         if (this._labListed7.Tool_Category === "Qualifications") {
//             $('#lab7').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed7.Tool_Category === "Field Issues") {
//             $('#lab7').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed7.Tool_Category === "Process") {
//             $('#lab7').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed7.Tool_efficiency === false) {
//             $('#lab7').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed7.Tool_efficiency === true) {
//             $('#lab7').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })
    
//     this.http.get(this.apiRoot+'/api/tool_category_data/8/').subscribe(data =>{
//       this._labListed8 = data as [any];
//       if (this._labListed8.Tool_efficiency === false) {
//         $('#lab8').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed8.Tool_efficiency === true) {
//         $('#lab8').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab8").hover(()=>{
//         if (this._labListed8.Tool_Category === "Qualifications") {
//             $('#lab8').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed8.Tool_Category === "Field Issues") {
//             $('#lab8').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed8.Tool_Category === "Process") {
//             $('#lab8').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed8.Tool_efficiency === false) {
//             $('#lab8').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed8.Tool_efficiency === true) {
//             $('#lab8').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })
    
//     this.http.get(this.apiRoot+'/api/tool_category_data/9/').subscribe(data =>{
//       this._labListed9 = data as [any];
//       if (this._labListed9.Tool_efficiency === false) {
//         $('#lab9').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed9.Tool_efficiency === true) {
//         $('#lab9').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab9").hover(()=>{
//         if (this._labListed9.Tool_Category === "Qualifications") {
//             $('#lab9').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed9.Tool_Category === "Field Issues") {
//             $('#lab9').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed9.Tool_Category === "Process") {
//             $('#lab9').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed9.Tool_efficiency === false) {
//             $('#lab9').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed9.Tool_efficiency === true) {
//             $('#lab9').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })
 
//     this.http.get(this.apiRoot+'/api/tool_category_data/10/').subscribe(data =>{
//       this._labListed10 = data as [any];
//       if (this._labListed10.Tool_efficiency === false) {
//         $('#lab10').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed10.Tool_efficiency === true) {
//         $('#lab10').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab10").hover(()=>{
//         if (this._labListed10.Tool_Category === "Qualifications") {
//             $('#lab1').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed10.Tool_Category === "Field Issues") {
//             $('#lab10').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed10.Tool_Category === "Process") {
//             $('#lab10').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed10.Tool_efficiency === false) {
//             $('#lab10').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed10.Tool_efficiency === true) {
//             $('#lab10').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

//     this.http.get(this.apiRoot+'/api/tool_category_data/11/').subscribe(data =>{
//       this._labListed11 = data as [any];
//       if (this._labListed11.Tool_efficiency === false) {
//         $('#lab11').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed11.Tool_efficiency === true) {
//         $('#lab11').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab11").hover(()=>{
//         if (this._labListed11.Tool_Category === "Qualifications") {
//             $('#lab11').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed11.Tool_Category === "Field Issues") {
//             $('#lab11').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed11.Tool_Category === "Process") {
//             $('#lab11').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed11.Tool_efficiency === false) {
//             $('#lab11').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed11.Tool_efficiency === true) {
//             $('#lab11').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

//     this.http.get(this.apiRoot+'/api/tool_category_data/12/').subscribe(data =>{
//       this._labListed12 = data as [any];
//       if (this._labListed12.Tool_efficiency === false) {
//         $('#lab12').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed12.Tool_efficiency === true) {
//         $('#lab12').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab12").hover(()=>{
//         if (this._labListed12.Tool_Category === "Qualifications") {
//             $('#lab12').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed12.Tool_Category === "Field Issues") {
//             $('#lab12').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed12.Tool_Category === "Process") {
//             $('#lab12').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed12.Tool_efficiency === false) {
//             $('#lab12').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed12.Tool_efficiency === true) {
//             $('#lab12').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

//     this.http.get(this.apiRoot+'/api/tool_category_data/13/').subscribe(data =>{
//       this._labListed13 = data as [any];
//       if (this._labListed13.Tool_efficiency === false) {
//         $('#lab13').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed13.Tool_efficiency === true) {
//         $('#lab13').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab13").hover(()=>{
//         if (this._labListed13.Tool_Category === "Qualifications") {
//             $('#lab13').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed13.Tool_Category === "Field Issues") {
//             $('#lab13').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed13.Tool_Category === "Process") {
//             $('#lab13').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed13.Tool_efficiency === false) {
//             $('#lab13').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed13.Tool_efficiency === true) {
//             $('#lab13').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

//     this.http.get(this.apiRoot+'/api/tool_category_data/14/').subscribe(data =>{
//       this._labListed14 = data as [any];
//       if (this._labListed14.Tool_efficiency === false) {
//         $('#lab14').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed14.Tool_efficiency === true) {
//         $('#lab14').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab14").hover(()=>{
//         if (this._labListed14.Tool_Category === "Qualifications") {
//             $('#lab14').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed14.Tool_Category === "Field Issues") {
//             $('#lab14').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed14.Tool_Category === "Process") {
//             $('#lab14').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed14.Tool_efficiency === false) {
//             $('#lab14').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed14.Tool_efficiency === true) {
//             $('#lab14').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

//     this.http.get(this.apiRoot+'/api/tool_category_data/15/').subscribe(data =>{
//       this._labListed15 = data as [any];
//       if (this._labListed15.Tool_efficiency === false) {
//         $('#lab15').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed15.Tool_efficiency === true) {
//         $('#lab15').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab15").hover(()=>{
//         if (this._labListed15.Tool_Category === "Qualifications") {
//             $('#lab15').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed15.Tool_Category === "Field Issues") {
//             $('#lab15').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed15.Tool_Category === "Process") {
//             $('#lab15').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed15.Tool_efficiency === false) {
//             $('#lab15').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed15.Tool_efficiency === true) {
//             $('#lab15').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

//     this.http.get(this.apiRoot+'/api/tool_category_data/16/').subscribe(data =>{
//       this._labListed16 = data as [any];
//       if (this._labListed16.Tool_efficiency === false) {
//         $('#lab16').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed16.Tool_efficiency === true) {
//         $('#lab16').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab16").hover(()=>{
//         if (this._labListed16.Tool_Category === "Qualifications") {
//             $('#lab16').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed16.Tool_Category === "Field Issues") {
//             $('#lab16').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed16.Tool_Category === "Process") {
//             $('#lab16').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed16.Tool_efficiency === false) {
//             $('#lab16').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed16.Tool_efficiency === true) {
//             $('#lab16').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

//     this.http.get(this.apiRoot+'/api/tool_category_data/17/').subscribe(data =>{
//       this._labListed17 = data as [any];
//       if (this._labListed17.Tool_efficiency === false) {
//         $('#lab17').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed17.Tool_efficiency === true) {
//         $('#lab17').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab17").hover(()=>{
//         if (this._labListed17.Tool_Category === "Qualifications") {
//             $('#lab17').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed17.Tool_Category === "Field Issues") {
//             $('#lab17').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed17.Tool_Category === "Process") {
//             $('#lab17').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed17.Tool_efficiency === false) {
//             $('#lab17').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed17.Tool_efficiency === true) {
//             $('#lab17').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })

//     this.http.get(this.apiRoot+'/api/tool_category_data/18/').subscribe(data =>{
//       this._labListed18 = data as [any];
//       if (this._labListed18.Tool_efficiency === false) {
//         $('#lab18').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed18.Tool_efficiency === true) {
//         $('#lab18').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }
//       $("#lab18").hover(()=>{
//         if (this._labListed18.Tool_Category === "Qualifications") {
//             $('#lab18').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed18.Tool_Category === "Field Issues") {
//             $('#lab18').css("fill", "rgb(255, 193, 203)");
//         }
//         else if (this._labListed18.Tool_Category === "Process") {
//             $('#lab18').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed18.Tool_efficiency === false) {
//             $('#lab18').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed18.Tool_efficiency === true) {
//             $('#lab18').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });
//     })






//     // this._cumulativeLab = '';
//     // this._data1.dashboardCumulative().subscribe(data=>{
//     //     this._cumulativeLab = data;
//     // })

//     // this._quaterLab = '';
//     // this._quaterUtilization = this.http.get('assets/json/quaterlyLab.json').subscribe(data=>{
//     //   this._quaterLab = data;
//     // })

//     // this._quaterLab = '';
//     // this._data1.dashboardQuaterly().subscribe(data=>{
//     //     this._quaterLab = data;
//   }


  ngOnDestroy(){
      
  }

}
