import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-bayhome',
  templateUrl: './bayhome.component.html',
  styleUrls: ['./bayhome.component.css']
})
export class BayhomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.clock = Date.now();
  //   }, 1000);

  //   this.toolData = this._data1.getTools().subscribe(data =>{
  //     this._toolsListed = data as [any];


  //     this.bay1 =  this._toolsListed.filter(data=>{
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay1.forEach(function (value) {
  //       if (value.status === 'IN') {
  //         $('#bay1').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay1').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay1').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay1').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay2 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay2.forEach(function (value)  {
  //       if (value.status === 'IN') {
  //         $('#bay2').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay2').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay2').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay2').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay3 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay3.forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay3').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay3').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay3').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay3').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay4 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay4.forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay4').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay4').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay4').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay4').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay5 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay5.forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay5').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay5').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay5').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay5').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay6=  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay6.forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay6').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay6').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay6').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay6').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay7 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay7.forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay7').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay7').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay7').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay7').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay8 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay8.forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay8').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay8').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay8').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay8').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay9 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this.bay9.forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay9').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay9').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay9').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay9').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay10 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay10'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay10').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay10').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay10').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay10').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay11 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay11'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay11').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay11').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay11').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay11').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //       this.bay12 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay12'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay12').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay12').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay12').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay12').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //     this.bay13 =  this._toolsListed.filter(data=> {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay13'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay13').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay13').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay13').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay13').css({ fill: "#9ac3f5" });
  //       }
  //     })

  // this.bay14 = this._toolsListed.filter(data => {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay14'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay14').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay14').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay14').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay14').css({ fill: "#9ac3f5" });
  //       }
  //     })

  // this.bay15 = this._toolsListed.filter(data => {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay15'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay15').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay15').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay15').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay15').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //  this.bay16 = this._toolsListed.filter(data => {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay16'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay16').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay16').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay16').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay16').css({ fill: "#9ac3f5" });
  //       }
  //     })

  // this.bay17 = this._toolsListed.filter(data => {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay17'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay17').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay17').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay17').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay17').css({ fill: "#9ac3f5" });
  //       }
  //     })

  // this.bay18 = this._toolsListed.filter(data => {
  //       return data.bay_number == 31 && data.is_active == true
  //     });
  //     this['bay18'].forEach(function (value)   {
  //       if (value.status === 'IN') {
  //         $('#bay18').css({ fill: "#ffff80" });
  //       }
  //       else if (value.status === 'ID') {
  //         $('#bay18').css({ fill: "#ff7f7f" });
  //       }
  //       else if (value.status === 'PR') {
  //         $('#bay18').css({ fill: "#c2de80" });
  //       }
  //       else if (value.status === 'MA') {
  //         $('#bay18').css({ fill: "#9ac3f5" });
  //       }
  //     })

  //   })
  // }



  // ngOnDestroy(){
  //   this['toolData'].unsubscribe();
  // }

  setId(id: string) {
    this['router'].navigate(['toolinfo' + '/' + id]);
  }
}
