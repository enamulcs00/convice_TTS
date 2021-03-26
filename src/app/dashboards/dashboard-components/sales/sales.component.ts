import { Component, AfterViewInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import * as c3 from 'c3';
import { ConvserviceService } from 'src/app/convservice.service';

declare var require: any;

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements AfterViewInit {
    keyarray = [];
    valuearray = [];
    weekly = '';
    keyarraypre = [];
    valuearraypre = [];
    valuearraysec = [];
    keyarraysec = [];
    premier = '';
    dashboarddata: any;
    userDetails: any;
    constructor(private Srvc: ConvserviceService) {
        this.getMapdata()
       this.getPremier()
    }

    getMapdata() {
        const data =
        {
            "type": this.weekly == '' ? 'weekly' : this.weekly
        }
        this.Srvc.getUserslist(data).subscribe((res: any) => {
            console.log('This is mapdata',res)
            this.dashboarddata = res.data
            for (let key in res.data.weeklyNewUsers) {
                this.keyarray.push(key);
                this.valuearray.push(res.data.weeklyNewUsers[key])

            }
        })
      
        }
    getPremier()
    {
        const datapre =
        {
            "type": this.premier == '' ? 'weekly' : this.premier
        }
        this.Srvc.getPackagelist(datapre).subscribe((res:any)=>
        {
            
            //premiumPackageWeek
            for (let key in res.data.weeklyPackages.freemium) {
                this.keyarraypre.push(key);
                this.valuearraypre.push(res.data.weeklyPackages.freemium[key])

            }
            for (let key in res.data.weeklyPackages.premium) {
                this.keyarraysec.push(key);
                this.valuearraysec.push(res.data.weeklyPackages.premium[key])

            }
            setTimeout(() => {
                this.barChartData = [
                    { data: this.valuearraypre, label: 'Freemium' },
                    { data: this.valuearraysec, label: 'premium' }
                ];
                 this.barChartLabels = this.keyarraypre;
            }, 1000);

        })
    }

    onChangepre(events)
    {   this.keyarraypre = [];
        this.keyarraysec = [];
        this.valuearraypre = [];
        this.valuearraysec = [];
        this.premier = events == 0 ? 'weekly' : 'monthly';
        const datapre = 
        {
            "type": this.premier
        }
        this.Srvc.getPackagelist(datapre).subscribe((res:any)=>
        {
            console.log('Prechnge Only',res)
            if(this.premier == 'weekly')
            {
                for (let key in res.data.weeklyPackages.freemium) {
                    this.keyarraypre.push(key);
                    this.valuearraypre.push(res.data.weeklyPackages.freemium[key])
    
                }
                for (let key in res.data.weeklyPackages.premium) {
                    this.keyarraysec.push(key);
                    this.valuearraysec.push(res.data.weeklyPackages.premium[key])
                }
            }else{
             
                for (let key in res.data.monthlyPackages.freemium) {
                    this.keyarraypre.push(key);
                    this.valuearraypre.push(res.data.monthlyPackages.freemium[key])
    
                }
                for (let key in res.data.monthlyPackages.premium) {
                    this.keyarraysec.push(key);
                    this.valuearraysec.push(res.data.monthlyPackages.premium[key])
    
                }   
            }

            setTimeout(() => {
                this.barChartData = [
                    { data: this.valuearraypre, label: 'Freemium' },
                    { data: this.valuearraysec, label: 'premium' }
                ];
                 this.barChartLabels = this.keyarraypre;
            }, 1000);
        })
    }


    barChart = {
        type: 'Bar',
        data: {
            labels: this.keyarray,
            series: [this.valuearray]
        },
        options: {
            height: 290,
            chartPadding: {
                top: 15,
                left: -25
            },
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: false,
                showGrid: false
            },
            fullWidth: true
        }
    };

    // Line chart
    lineChart = {
        type: 'Line',
        data: {
            labels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
            series: [[2, 0, 5, 2, 5, 2]]
        },
        options: {
            showArea: true,
            showPoint: false,

            chartPadding: {
                left: -35
            },
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: false,
                showGrid: true
            },
            fullWidth: true
        }
    };

    ngAfterViewInit() {
        
        const chart2 = c3.generate({
            bindto: '#product-sales',
            data: {
                columns: [
                    ['user', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                    // ['Ipad', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    show: true,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: true
                }
            },
            padding: {
                top: 40,
                right: 10,
                bottom: 40,
                left: 20
            },
            point: {
                r: 0
            },
            legend: {
                hide: false
            },
            color: {
                pattern: ['#fbb03b']
            }
        });
    }

    public lineChartLegend = true;
    public lineChartType = 'line';

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        barThickness: 10
    };
    public barChartLabels: string[] = this.keyarraypre;
    public barChartType = 'bar';
    public barChartLegend = true;

    public barChart2Data: any[] = [
        { data: this.valuearray, label: 'Sales' },
    ];
    public barChartData: any[] = [
        { data: this.valuearraypre, label: 'Freemium' },
        { data: this.valuearraysec, label: 'premium' }
    ];
    public barChartColors: Array<any> = [
        { backgroundColor: '#36bea6' }
    ];

    public barChartLabels1: string[] = this.keyarray
    public barChartColors1: Array<any> = [
        { backgroundColor: '#FFAD2B' }
    ];

    onChange(events) {
        this.weekly = events;
        this.valuearray = []
        this.keyarray = []
        const data =
        {
            "type": this.weekly == '' ? 'weekly' : this.weekly
        }
        this.Srvc.getUserslist(data).subscribe((res: any) => {
            console.log('this is old data',res)
            if(this.weekly == 'weekly')
            {
                for (let key in res.data.weeklyNewUsers) {
                    this.keyarray.push(key);
                    this.valuearray.push(res.data.weeklyNewUsers[key])
                }
            }else{
                for (let key in res.data.monthlyNewUsers) {
                    this.keyarray.push(key);
                    this.valuearray.push(res.data.monthlyNewUsers[key])
                }
            }
         
            setTimeout(() => {
                this.barChart2Data = [
                    { data: this.valuearray, label: 'Sales' },
                ];
                this.barChartLabels1 = this.keyarray
            }, 1000);
        })
    }
}
