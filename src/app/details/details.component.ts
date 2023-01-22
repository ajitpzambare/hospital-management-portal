import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  single = [
    {
      "name": "Covid Patients",
      "series": [
        {
          "name": "2016",
          "value": "15000"
        },
        {
          "name": "2017",
          "value": "20000"
        },
        {
          "name": "2018",
          "value": "25000"
        },
        {
          "name": "2019",
          "value": "30000"
        }
      ],
    },
    {
      "name": "Other Disease",
      "series": [
        {
          "name": "2016",
          "value": "4000"
        },
        {
          "name": "2017",
          "value": "4500"
        },
        {
          "name": "2018",
          "value": "10000"
        },
        {
          "name": "2019",
          "value": "15000"
        }
      ],
    },
    {
      "name": "Recoverd",
      "series": [
        {
          "name": "2016",
          "value": "5000"
        },
        {
          "name": "2017",
          "value": "8000"
        },
        {
          "name": "2018",
          "value": "15000"
        },
        {
          "name": "2019",
          "value": "35000"
        }
      ],
    }
  
  ];
  pieData = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];
   multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];
  
  
  public view:[number,number] = [600, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
   xAxisLabel: "Years";
  public showYAxisLabel = true;
  public yAxisLabel: "Salary";
  public graphDataChart: any[];
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    
  }
  totalAd=0;
  todayAd=0;
  discharge=0;
  rooms=0;
  ngOnInit(){
    this.totalAd=this.getRandomNo();
    this.todayAd=this.getRandomNo();
    this.discharge=this.getRandomNo();
    this.rooms=this.getRandomNo();
  }
  getRandomNo(){
   return Math.floor(1000 + Math.random() * 9000);
  }
}
