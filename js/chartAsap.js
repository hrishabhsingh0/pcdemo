window.onload = function () {
	chart();
	chart1();
	// chart2();
}
function chart() {
	
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	
	title:{
		text:""
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Employees"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
        color: "#014D65",
		dataPoints: [
            { y: 303, label: "LACC" },
            { y: 250, label: "ASAPCC" },
            { y: 360, label: "DOT PHMSA" },
            { y: 280, label: "DOT FMCSA" },
		]
	}]
});
chart.render();

}


function chart1 () {

var chart2 = new CanvasJS.Chart("chartContainer1", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: ""
	},
	legend:{
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}</strong>",
		indexLabel: "{name} - {y}",
		dataPoints: [
            { y: 474, name: "Random", exploded: true },
            { y: 11, name: "Pre-Employment" },
            { y: 4, name: "For-Cause" },
            { y: 5, name: "Return-To-Duty" },
            { y: 127, name: "Follow-Up" },
            { y: 16, name: "Other" },
            { y: 23, name: "Periodic" }
		]
	}]
});
chart2.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}



//////sdsds





var chart2 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	title: {
		text: ""
	},
	axisX: {
		interval: 1
	},
	axisY: {
		title: "Expenses in Billion Dollars",
		scaleBreaks: {
			type: "wavy",
			customBreaks: [{
				startValue: 80,
				endValue: 210
				},
				{
					startValue: 230,
					endValue: 600
				}
		]}
	},
	data: [{
		type: "bar",
		toolTipContent: "<img src=\"https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/\"{url}\"\" style=\"width:40px; height:20px;\"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP",
		dataPoints: [
			{ label: "Israel", y: 17.8, gdp: 5.8, url: "israel.png" },
			{ label: "United Arab Emirates", y: 22.8, gdp: 5.7, url: "uae.png" },
			{ label: "Brazil", y: 22.8, gdp: 1.3, url: "brazil.png"},
			{ label: "Australia", y: 24.3, gdp: 2.0, url: "australia.png" },
			{ label: "South Korea", y: 36.8, gdp: 2.7, url: "skorea.png" },
			{ label: "Germany", y: 41.1, gdp: 1.2, url: "germany.png" },
			{ label: "Japan", y: 46.1, gdp: 1.0, url: "japan.png" },
			{ label: "United Kingdom", y: 48.3, gdp: 1.9, url: "uk.png" },
			{ label: "India", y: 55.9, gdp: 2.5, url: "india.png" },
			{ label: "Russia", y: 69.2, gdp: 5.3, url: "russia.png" },
			{ label: "China", y: 215.7, gdp: 1.9, url: "china.png" },
			{ label: "United States", y: 611.2, gdp: 3.3, url: "us.png" }
		]
	}]
});
chart2.render();

var chart11 = new CanvasJS.Chart("chartContainer11", {
    animationEnabled: true,
    title: {
        text: ""
    },
    data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0",
        indexLabel: "{label} {y}",
        dataPoints: [
            { y: 3004, label: "Negative" },
            { y: 65, label: "Non-Negative" },
        ]
    }]
});
chart11.render();

var totalVisitors = 883000;
var visitorsData = {
	"New vs Returning Visitors": [{
		click: visitorsChartDrilldownHandler,
		cursor: "pointer",
		explodeOnClick: false,
		innerRadius: "75%",
		legendMarkerType: "square",
		name: "New vs Returning Visitors",
		radius: "100%",
		showInLegend: true,
		startAngle: 90,
		type: "doughnut",
		dataPoints: [
            { y: 10, name: "Female", color: "#E7823A" },
            { y: 31, name: "Male", color: "#546BC1" }
		]
	}],
	"New Visitors": [{
		color: "#E7823A",
		name: "New Visitors",
		type: "column",
		dataPoints: [
			{ x: new Date("1 Jan 2015"), y: 33000 },
			{ x: new Date("1 Feb 2015"), y: 35960 },
			{ x: new Date("1 Mar 2015"), y: 42160 },
			{ x: new Date("1 Apr 2015"), y: 42240 },
			{ x: new Date("1 May 2015"), y: 43200 },
			{ x: new Date("1 Jun 2015"), y: 40600 },
			{ x: new Date("1 Jul 2015"), y: 42560 },
			{ x: new Date("1 Aug 2015"), y: 44280 },
			{ x: new Date("1 Sep 2015"), y: 44800 },
			{ x: new Date("1 Oct 2015"), y: 48720 },
			{ x: new Date("1 Nov 2015"), y: 50840 },
			{ x: new Date("1 Dec 2015"), y: 51600 }
		]
	}],
	"Returning Visitors": [{
		color: "#546BC1",
		name: "Returning Visitors",
		type: "column",
		dataPoints: [
			{ x: new Date("1 Jan 2015"), y: 22000 },
			{ x: new Date("1 Feb 2015"), y: 26040 },
			{ x: new Date("1 Mar 2015"), y: 25840 },
			{ x: new Date("1 Apr 2015"), y: 23760 },
			{ x: new Date("1 May 2015"), y: 28800 },
			{ x: new Date("1 Jun 2015"), y: 29400 },
			{ x: new Date("1 Jul 2015"), y: 33440 },
			{ x: new Date("1 Aug 2015"), y: 37720 },
			{ x: new Date("1 Sep 2015"), y: 35200 },
			{ x: new Date("1 Oct 2015"), y: 35280 },
			{ x: new Date("1 Nov 2015"), y: 31160 },
			{ x: new Date("1 Dec 2015"), y: 34400 }
		]
	}]
};

var newVSReturningVisitorsOptions = {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: ""
	},
	subtitles: [{
		text: "",
		backgroundColor: "#2eacd1",
		fontSize: 16,
		fontColor: "white",
		padding: 5
	}],
	legend: {
		fontFamily: "calibri",
		fontSize: 14,
		itemTextFormatter: function (e) {
			return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
		}
	},
	data: []
};

var visitorsDrilldownedChartOptions = {
	animationEnabled: true,
	theme: "light2",
	axisX: {
		labelFontColor: "#717171",
		lineColor: "#a2a2a2",
		tickColor: "#a2a2a2"
	},
	axisY: {
		gridThickness: 0,
		includeZero: false,
		labelFontColor: "#717171",
		lineColor: "#a2a2a2",
		tickColor: "#a2a2a2",
		lineThickness: 1
	},
	data: []
};

var chart3 = new CanvasJS.Chart("chartContainer3", newVSReturningVisitorsOptions);
chart3.options.data = visitorsData["New vs Returning Visitors"];
chart3.render();

function visitorsChartDrilldownHandler(e) {
	chart = new CanvasJS.Chart("chartContainer", visitorsDrilldownedChartOptions);
	chart.options.data = visitorsData[e.dataPoint.name];
	chart.options.title = { text: e.dataPoint.name }
	chart.render();
	$("#backButton").toggleClass("invisible");
}

$("#backButton").click(function() { 
	$(this).toggleClass("invisible");
	chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
	chart.options.data = visitorsData["New vs Returning Visitors"];
	chart.render();
});


var chart16 = new CanvasJS.Chart("chartContainer16", {
	animationEnabled: true,
	//title:{
	//	text: "LACC Pool - Random Selection "
	//},
	axisX: {
		valueFormatString: "MMM,YY"
	},
	axisY: {
		title: "RAN Test",
		includeZero: true,
		suffix: ""
	},
	axisY2: {
		title: "# of Employee",
		titleFontColor: "#602320",
		lineColor: "#602320",
		labelFontColor: "#602320",
		tickColor: "#602320",
		includeZero: true
	},	
	legend:{
		cursor: "pointer",
		fontSize: 16,
		//itemclick: toggleDataSeries
	},
	toolTip:{
		shared: true
	},
	data: [{
		name: "D/A In Compliance",
		type: "spline",
		yValueFormatString: "#0",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2019,1,1), y: 115 },
			{ x: new Date(2019,2,1), y: 115 },
			{ x: new Date(2019,3,1), y: 112 },
			{ x: new Date(2019,4,1), y: 115 },
			{ x: new Date(2019,5,1), y: 115 },
			{ x: new Date(2019,6,1), y: 115 },
			{ x: new Date(2019,7,1), y: 115 },
			{ x: new Date(2019,8,1), y: 115 },
			{ x: new Date(2019,9,1), y: 115 },
			{ x: new Date(2019,10,1), y: 115 },
			{ x: new Date(2019,11,1), y: 115 },
			{ x: new Date(2019,12,1), y: 115 },
		]
	},
	{
		name: "Random Selection",
		type: "column",
		lineDashType: "dash",
		yValueFormatString: "#0",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2019,1,1), y: 22 },
			{ x: new Date(2019,2,1), y: 10 },
			{ x: new Date(2019,3,1), y: 12 },
			{ x: new Date(2019,4,1), y: 14 },
			{ x: new Date(2019,5,1), y: 12 },
			{ x: new Date(2019,6,1), y: 8 },
			{ x: new Date(2019,7,1), y: 10 },
			{ x: new Date(2019,8,1),  },
			{ x: new Date(2019,9,1),  },
			{ x: new Date(2019,10,1),  },
			{ x: new Date(2019,11,1),  },
			{ x: new Date(2019,12,1),  },
		]
	},
	{
		name: "Completed Test",
		type: "column",
		lineDashType: "dash",
		yValueFormatString: "#0",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2019,1,1), y: 10 },
			{ x: new Date(2019,2,1), y: 8 },
			{ x: new Date(2019,3,1), y: 8 },
			{ x: new Date(2019,4,1), y: 8  },
			{ x: new Date(2019,5,1), y: 8 },
			{ x: new Date(2019,6,1), y: 8 },
			{ x: new Date(2019,7,1), y: 10 },
			{ x: new Date(2019,8,1),  },
			{ x: new Date(2019,9,1),  },
			{ x: new Date(2019,10,1),  },
			{ x: new Date(2019,11,1),  },
			{ x: new Date(2019,12,1),  },		]
	},
	{
		name: "Noshow Test",
		type: "column",
		lineDashType: "dash",
		yValueFormatString: "#0",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2019,1,1), y: 12 },
			{ x: new Date(2019,2,1), y: 2 },
			{ x: new Date(2019,3,1), y: 4 },
			{ x: new Date(2019,4,1), y: 6  },
			{ x: new Date(2019,5,1), y: 4 },
			{ x: new Date(2019,6,1), y: 0 },
			{ x: new Date(2019,7,1), y: 0 },
			{ x: new Date(2019,8,1),  },
			{ x: new Date(2019,9,1),  },
			{ x: new Date(2019,10,1),  },
			{ x: new Date(2019,11,1),  },
			{ x: new Date(2019,12,1),  },		]
	},	
	{
		name: "Cumulative Random Selection",
		type: "spline",
		yValueFormatString: "#0",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2019,1,1), y: 22 },
			{ x: new Date(2019,2,1), y: 32 },
			{ x: new Date(2019,3,1), y: 44 },
			{ x: new Date(2019,4,1), y: 58 },
			{ x: new Date(2019,5,1), y: 70 },
			{ x: new Date(2019,6,1), y: 78 },
			{ x: new Date(2019,7,1), y: 88 },
			{ x: new Date(2019,8,1),  },
			{ x: new Date(2019,9,1),  },
			{ x: new Date(2019,10,1),  },
			{ x: new Date(2019,11,1),  },
			{ x: new Date(2019,12,1),  },
		]
	},
	{
		name: "Cumulative Completed Test",
		type: "spline",
		yValueFormatString: "#0",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2019,1,1), y: 10 },
			{ x: new Date(2019,2,1), y: 18 },
			{ x: new Date(2019,3,1), y: 26 },
			{ x: new Date(2019,4,1), y: 34  },
			{ x: new Date(2019,5,1), y: 42 },
			{ x: new Date(2019,6,1), y: 52 },
			{ x: new Date(2019,7,1), y: 62 },
			{ x: new Date(2019,8,1),  },
			{ x: new Date(2019,9,1),  },
			{ x: new Date(2019,10,1),  },
			{ x: new Date(2019,11,1),  },
			{ x: new Date(2019,12,1),  },		
		]
	},
	{
		type: "line",
		name: "Avg # of Employee",
		lineDashType: "dash",
		axisYType: "secondary",
		showInLegend: true,
		color: "#602320",
		//xValueFormatString: "MMM YYYY",
		yValueFormatString: "#0",
		dataPoints: [
			{ x: new Date(2019,1,1), y: 230 },
			{ x: new Date(2019,2,1), y: 230 },
			{ x: new Date(2019,3,1), y: 220 },
			{ x: new Date(2019,4,1), y: 235  },
			{ x: new Date(2019,5,1), y: 230 },
			{ x: new Date(2019,6,1), y: 230 },
			{ x: new Date(2019,7,1), y: 230 },
			{ x: new Date(2019,8,1),  },
			{ x: new Date(2019,9,1),  },
			{ x: new Date(2019,10,1),  },
			{ x: new Date(2019,11,1),  },
			{ x: new Date(2019,12,1),  },
		]
	}
	]
});
chart16.render();

var chart4 = new CanvasJS.Chart("chartContainer4", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title: {
		text: ""
	},
	axisY: {
		title: "Growth Rate (in %)",
		suffix: "%",
		includeZero: false
	},
	axisX: {
		title: "Countries"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,##0.0#\"%\"",
        dataPoints: [
{ label: "1 Operator", y: 2 },
{ label: "2 Operator", y: 1 },
{ label: "Accounting / File Clerk", y: 1 },
{ label: "Accounts Payable Supervisor", y: 1 },
{ label: "Advanced Administrative Assistant", y: 1 },
{ label: "Albq Terminal Manager Asphalt", y: 1 },
{ label: "API operator", y: 2 },
{ label: "Apprentice Electricain", y: 2 }



/*
Aprentace Electricin	1
Armed Security	1
Asphalt Operator, Terminals	2
Asphalt Trip Driver Day	3
Asphalt Trip Driver Night	3
Assembly Line	1
Assistant	2
Assistant Lead	1
Assistant Manager	17
Assistant Turnaround Supervisr	1
Assitant Manager	2
Associate	1
Associate II - Accounting	1
Associate Process Engineer	1
Associate Safety Captain	1
Associate Safety Specialist - Logistics	1
Asst Controller Retail Account	1
Bakery Delivery Driver	1
Bakery Driver	1
Bakery helper	1
Bakery production	1
Bay Scaffolding	1
Board Operator	1
Boil Maker	2
Boiler Maker	4
Boiler Opeator	1
Boiler Operator	1
Boilermaker	3
Buyer II	1
Call Manager	1
Caller unable to provide	1
Cardlock Service Technician	1
Carpenter	7
Carpenter Help	1
Carwasher	1
Cashier	104
Cashier(CSR)	1
Cashier and Stocking	1
Cashier Manager	1
Cashier / Maintenance worker	1
Cashier / Stocker	1
CDL Driver	1
Chasier	1
Chemist	1
Chief Inspector	1
Civil Journeyman	1
Cleaning Lady	1
Clerk	1
Co Manager	16
Cole Manager	1
Co - Manager	8
Commercial Driver	1
Concrete Civil	1
Conductor	1
Construction	1
Construction Coordinator Pipel	1
Construction Superintendent - Logistics	1
Constuction Worker	1
Contractor	3
Cook	1
Costumer Service Rep	1
CPWI	1
Craft Workers(skilled)	53
Craftsman A, Mechanic	1
Craftsman B, Pipefitter	1
Craftsman C, Pipefitter	1
Crane Operator	4
Crew Member	1
CRS	1
Crude Board Operator	1
Crude Driver	1
Crude Oil Driver	1
Crude Oil Hauler	1
Crude Oil Truck Driver	1
Crude Operations Manager	1
Cruel Oil Hauler	1
CSA	2
CSR	41
CSR cashier	1
Customer Representative	2
Customer Service	5
Customer Service Assistant	1
Customer Service Clerk	1
Customer service rep	10
Customer Service Rep / Floor Department	1
Customer Service Rep - Shift Lead	1
Customer Service Rep.	3
Customer Service Representative	13
Customer Service Representative(CSR)	1
Deli Manager	1
Delivery	1
Delivery Driver	1
Director Logistics Engineering	1
Director Marketing	1
Dispatcher	1
Distribution Scheduler	2
District Manager	1
DOT Transport driver	1
Drilling Assistant	1
Driver	16
Driver(Trip Pay)	18
ECST	1
Electrician	12
Electrician Assistant	1
Electrician Helper	1
Emergency Response Tech	1
Entry Process Engineer	1
Environmental Laborer	1
Environmental Technician	1
Executive Asst Environmental	1
FCC Operator	1
Field Operator	1
Field Technician	2
Finish Prod Trip Driver, Day	17
Finish Prod Trip Driver, Night	37
Finishing Product	1
Fire watch	1
Firefighter	2
Fixed Equipment Inspector Elp	1
Fleet Operations Coordinator	1
Fleet Supervisor - Logistics	1
Floor lead	1
Floor Worker	2
Food Preparation / Cashier	2
Foreman	5
Fuel Transferer	1
Gasoline Transporter	1
General line Assembly	1
General Manager	1
GUL Tech	1
Handyman	1
Head Cashier	1
Health and Safety Inspector	1
Heavy Machine Operator	1
Helper	2
HR Director	1
I & E Technician	1
Inside Operator	1
Inspector	7
Inspector Welding	1
Instrument Man	1
Instrument tech	1
Instrument technician	1
Insulation Lead	1
Insulator	10
Intermediate Sales Rep	1
Iron Worker	1
Ironworker	1
IW Unable To Provide	3
IW was unable to provide	1
Journeyman Electrician	2
Kitchen	1
Lab Tech	1
Labor	2
Labor Foreman	1
Labor Hand	2
Laboratory Inspector	3
Laboratory Technician	1
Laborer	21
Laborer / Plumbing	1
Laborers(unskilled)	1
Landscaping Manager, Retail	1
Lead	2
Lead Advisor	1
Lead Cashier	2
Lead Pipeline Engineer	1
Lead Project Engineer - Logistics	1
Line Assembly	1
Lineman	1
Loader	1
Machine Operator	1
Maintance	1
Maintenance	7
Maintenance helper	1
Maintenance Supervisor	1
Maintenance Tech	1
Maintenance Tech 1	1
Maintenance Welder	1
Maitenance	1
Manager	15
Manager Retail Environmental Compliance	1
Marketing Coordinator	1
Material Coordinator / Office Manager	1
MDE Inspections	1
Meat Slicer	2
Mechanic	5
Mechanic A - 11Elect	1
Mechanic A - 13PF - W	2
Mechanic A - 14MACH	2
Mechanic II	5
Mill Wright Foreman	1
NDE Tech	2
Night Moline	1
Night Shift Cashier	1
Not provided	1
Off Sites Lead	1
Oil Hauler 2	1
Operation Specialist Logistics	1
Operation Supervisor	1
Operations Support Assistant	1
Operations Support Specialist	1
Operatives(semi - skilled)	16
Operator	15
Operator - 2FCC	1
Operator - 4HYD	4
Operator - 6TNKFLD	1
Operator - 8LDRACK	1
Operator Asphalt	1
Operator B	1
Operator C	1
Operator Helper	1
Operator TraineeII - 3CPS	2
OTR	1
Overnight Shift Leader	1
Painter	3
Painter Helper	1
Painter Sandblaster	1
Partner	1
PIC	1
Pilot Pipeline Delivery Operat	1
Pipe Fitter	8
Pipeline Office Coordinator	1
Pipeline operator	2
Pipeline Technician II	6
Pipeliner II	1
Plant Operator	2
President Of The Company	1
Pricebook Specialist	1
Process Engineer	1
Process Engineering	1
Production	3
Project Field Superintendent	1
Project Manager	1
Pump Operator	1
Railcar Operator	1
Refinery Trainer	1
Retail	1
Retail Account Manager	1
Retail Clerk	1
Retail Sales Associate	1
Rig Welder	1
Rigger	4
Road Driver	1
Rotating Mechanic	1
Roustabout	1
Route Driver	1
ROW Foreman	1
Safety Attendant	2
Safety Attending	1
Safety Coordinator Gallup	1
Safety Manager, Wholesale	1
Safety Superviosr	1
Sale Associate	1
Sales Associate	18
Sales Associate / Cashier	2
Sales Clerk	1
Sales Rep	1
Sales / Cashier	1
Sandblaster	1
Sandwich Artist	1
Sanitation	4
Sanitation Technician	1
Scaffold Builder	4
Scaffold Supervisor	1
Scaffolding	2
Scaffolding Contractor	1
Scraper Operator	2
Security	2
Security Officer	9
Senior Analyst - BP & A	1
Senior Buyer	1
Senior Designer / Drafter	1
Senior Lab Technician	1
Senior Manager Projects - Logistics	1
Senior Mechanic - 13PF - W	1
Senior Merchandising Specialist	1
Senior Project Engineer - Logistics	2
Senior Retail Environmental  Admnr	2
Senior Stock Plan Administrator	1
Service Representative	1
Service Workers	2
Shift Lead	20
Shift Leader	10
Shift Leafer	1
Shift Maid	1
Shift Manager	2
Shift Supervisor Elp	1
Ship Lead	1
Ship Leader	1
Shipper	2
Skilled labor for directional drilling	1
Skilled Laborer	2
Spacer	1
Spotter	1
Sr Environmental Coordinat Pip	1
Store associate	1
Store Employee	1
Store Manager	24
Store Manger	1
Store Retailer	1
Subway Employee	2
Superintendent	1
Superintendent Health & Safety	1
Superintendent Refinery Operations	1
Supervising Operator	1
Supervisor	1
Supervisor / Foreman	1
Supervisor Refinery Maintenance	1
Supervisor Refinery Operations	2
Supervisor Terminal	1
Supervisor Trucking Maintenance	1
Supervisor, Retail Maintenance	1
Swamper	1
Tank Wagon Driver, Class A	1
Tank Wagon Operator	1
Technician	8
Terminal Manager	1
Terminal Operator	3
Third Party Inspector	1
Tool Room Lead	1
Tool Technician	1
Torcher	1
Training & Relief Operator 5	1
Transport Driver	48
Transportation	2
Transportation Supv, Crude	1
Truck Driver	19
Truck Driver(Bakery)	1
Truck Driver, Crude	12
Truck Driver, Crude Night Shif	14
Type Fitter	1
unable to provide	2
Unit Operator - 4HYD	2
Unit Operator - 6TNKFLD	1
UT Tech	1
Utility Inspector	1
UTT Tech	2
Vibration Analyst	1
Warehouse	1
Warehouse Lead	1
Warehouse Supervisor Gal	1
Water Treatment Operator B	1
Welder	19
Welder Helper	11
Welder II	1
Welder's assistant	1
Welders Helper	3
Welder's Helper	1
Welding	1
Wrapping	1
XTO Mason	1

*/


			
		]
	}]
});
chart4.render();


var chart5 = new CanvasJS.Chart("chartContainer5", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: ""
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}",
        dataPoints: [

            { y: 8, label: "Alprazolam" },
            { y: 9, label: "Amphetamines" },
            { y: 15, label: "Amphetamine" },
            { y: 2, label: "Benzodiazepines" },
            { y: 5, label: "Buprenorphine" },
            { y: 3, label: "Butalbital" },
            { y: 2, label: "Cannabinoids" },
            { y: 58, label: "Cocaine" },
            { y: 6, label: "Codeine" },
            { y: 1, label: "Diazepam" },
            { y: 2, label: "Ethyl Glucuronide MS" },
            { y: 40, label: "Hydrocodone" },
            { y: 26, label: "Marijuana" },
            { y: 1, label: "Meprobamate" },
            { y: 29, label: "Methamphetamine" },
            { y: 4, label: "Nordiazepam" },
            { y: 6, label: "Opioids" },
            { y: 20, label: "Oxycodone" },
            { y: 1, label: "Oxymorphone" },
            
		]
	}]
});
chart5.render();

var chart6 = new CanvasJS.Chart("chartContainer6", {
	animationEnabled: true,  
	title:{
		text: ""
	},
	axisY: {
		title: "# of Random Test",
		valueFormatString: "#0.",
		suffix: "",
		prefix: ""
	},
	data: [{
		type: "splineArea",
		color: "rgba(54,158,173,.7)",
		markerSize: 5,
		xValueFormatString: "YYYY",
		yValueFormatString: "#0",
		dataPoints: [
			{ x: new Date(2017, 6, 0), y: 40 },
			{ x: new Date(2017, 7, 0), y: 46 },
            { x: new Date(2017, 8, 0), y: 40 },
            { x: new Date(2017, 9, 0), y: 35 },
            { x: new Date(2017, 10, 0), y: 46 },
            { x: new Date(2017, 11, 0), y: 56 },
            { x: new Date(2017, 12, 0), y: 43 },
            { x: new Date(2018, 1, 0), y: 52 },
            { x: new Date(2018, 2, 0), y: 71 },
            { x: new Date(2018, 3, 0), y: 63 },
            { x: new Date(2018, 4, 0), y: 64 },
            { x: new Date(2018, 5, 0), y: 77 },
            { x: new Date(2018, 6, 0), y: 70 },
            { x: new Date(2018, 7, 0), y: 65 },
            { x: new Date(2018, 8, 0), y: 82 },
            { x: new Date(2018, 9, 0), y: 57 },
            { x: new Date(2018, 10, 0), y: 83 },
            { x: new Date(2018, 11, 0), y: 81 },
            { x: new Date(2018, 12, 0), y: 60 },
            { x: new Date(2019, 1, 0), y: 78 },
            { x: new Date(2019, 2, 0), y: 79 },
/*
			{ x: new Date(2003, 0), y: 2840000 },
			{ x: new Date(2004, 0), y: 2396000 },
			{ x: new Date(2005, 0), y: 1613000 },
			{ x: new Date(2006, 0), y: 2821000 },
			{ x: new Date(2007, 0), y: 2000000 },
			{ x: new Date(2008, 0), y: 1397000 },
			{ x: new Date(2009, 0), y: 2506000 },
			{ x: new Date(2010, 0), y: 2798000 },
			{ x: new Date(2011, 0), y: 3386000 },
			{ x: new Date(2012, 0), y: 6704000},
			{ x: new Date(2013, 0), y: 6026000 },
			{ x: new Date(2014, 0), y: 2394000 },
			{ x: new Date(2015, 0), y: 1872000 },
			{ x: new Date(2016, 0), y: 2140000 }
*/
		]
	}]
	});
chart6.render();


var chart7 = new CanvasJS.Chart("chartContainer7", {
	animationEnabled: true,
	exportEnabled: true,
	title:{
		text: ""
	},
	data: [{
		type: "funnel",
		reversed: true,
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "{label} - {y}",
		toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
		indexLabelFontColor: "black",
        dataPoints: [
            { y: 316, label: "Minnesota" },
            { y: 207, label: "Texas" },
            { y: 196, label: "New Mexico" },
            { y: 138, label: "North Dakota" },
            { y: 118, label: "California" },
            { y: 78, label: "Arizona" },
            { y: 31, label: "Utah" },
            { y: 20, label: "Washington" },
            { y: 11, label: "Alaska" },
            { y: 15, label: "Other" } //"Colorado, Idaho, Wisconsin, Montana, Nevada, Ohio, Wyoming" },
            /*
            { y: 4, label: "Colorado" },
            { y: 3, label: "Idaho" },            
            { y: 3, label: "Wisconsin" },
            { y: 2, label: "Montana" },
            { y: 1, label: "Nevada" },
            { y: 1, label: "Ohio" },
            { y: 1, label: "Wyoming" }
            */
		]
	}]
});

chart7.render();

var chart8 = new CanvasJS.Chart("chartContainer8", {
	animationEnabled: true,
	exportEnabled: true,
	title:{
		text: ""
	},
	data: [{
        type: "pie", //"funnel",
		reversed: true,
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "Age: {label} ({y})",
		toolTipContent: "<b>Age: {label}</b> ({y})",
		indexLabelFontColor: "black",
        dataPoints: [
            { y: 2, label: "18-" },
            { y: 58, label: "18-20" },
            { y: 40, label: "21-25" },
            { y: 29, label: "25-30" },
            { y: 26, label: "31-40" },
            { y: 20, label: "40-50" },
            { y: 15, label: "50-55" },
            { y: 9, label: "55+" },
            /*
            { y: 58, label: "Cocaine" },
            { y: 40, label: "Hydrocodone" },
            { y: 29, label: "Methamphetamine" },
            { y: 26, label: "Marijuana" },
            { y: 20, label: "Oxycodone" },
            { y: 15, label: "Amphetamine" },
            { y: 9, label: "Amphetamines" },
            { y: 8, label: "Alprazolam" },
            { y: 6, label: "Codeine" },
            { y: 6, label: "Opioids" },
            { y: 5, label: "Buprenorphine" },
            { y: 4, label: "Nordiazepam" },
            { y: 3, label: "Butalbital" },
            { y: 2, label: "Benzodiazepines" },            
            { y: 2, label: "Cannabinoids" },
            { y: 2, label: "Ethyl Glucuronide MS" },
            { y: 1, label: "Diazepam" },
            { y: 1, label: "Meprobamate" },
            { y: 1, label: "Oxymorphone" },*/
		]
	}]
});

chart8.render();


var chart9 = new CanvasJS.Chart("chartContainer9", {
	animationEnabled: true,
	title: {
		text: ""
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0",
		indexLabel: "{label} {y}",
        dataPoints: [
            { y: 65, label: "Medical Treatment"},
            { y: 304, label: "FirstAid"}
		]
	}]
});
chart9.render();



var chart10 = new CanvasJS.Chart("chartContainer10", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title: {
		text: ""
	},
	axisY: {
		title: "Growth Rate (in %)",
		suffix: "%",
		includeZero: false
	},
	axisX: {
		title: "Countries"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,##0.0#\"%\"",
		dataPoints: [
			{ label: "India", y: 7.1 },	
			{ label: "China", y: 6.70 },	
			{ label: "Indonesia", y: 5.00 },
			{ label: "Australia", y: 2.50 },	
			{ label: "Mexico", y: 2.30 },
			{ label: "UK", y: 1.80 },
			{ label: "United States", y: 1.60 },
			{ label: "Japan", y: 1.60 }
			
		]
	}]
});
chart10.render();