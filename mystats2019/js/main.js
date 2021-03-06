const RASH = document.getElementById("rash");
const RP = document.getElementById("rash_pie");
const SRM = document.getElementById("sum_rash_month");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;

let RI = [
{
	'ilabel': "Internet/телефон",
	'ipm':[790,1411,1400,1520,1470,2827.84,1530,3658.56,930,1394,2855,872],
	'ibgc':"#51574a"
},
{
	'ilabel': "авто",
	'ipm':[0,0,0,0,22787.53,0,0,0,0,0,0,0],
	'ibgc':"#C51162"
},
{
	'ilabel': "бензин",
	'ipm':[0,0,0,0,5327.86,1434,3071.43,1666.20,0,0,0,0],
	'ibgc':"#C51162"
},
{
	'ilabel': "каршеринг",
	'ipm':[0,570.81,2775.21,2527.12,152.64,943,0,0,1045.55,768.10,4689.32,10717.20],
	'ibgc':"#999999"
},
{
	'ilabel': "аптека",
	'ipm':[1804.03,1300,8689.79,1045,570,27.80,2150.80,971,1444.50,489,556,4885],
	'ibgc':"#CCCC33"
},
{
	'ilabel': "вино",
	'ipm':[490.90,506.50,1024.70,0,194.70,584.10,849,0,0,543.98,1345.35,512],	
	'ibgc':"#74c493"
},
{
	'ilabel': "еда на вынос",
	'ipm':[0,2068.60,1539,1796,1525,1310,1355,0,1108.00,1717.60,995,0],	
	'ibgc':"#8e8c6d"
},
{
	'ilabel': "кафе",
	'ipm':[0,0,0,0,0,0,0,1640,0,5212,471,0],	
	'ibgc':"#FFCCCC"
},
{
	'ilabel': "квартплата",
	'ipm':[30350,30600,30700,30486,30500,48700,60278,47000,41504.42,40830.38,41912.79,40000],	
	'ibgc':"#74c493"
},
{
	'ilabel': "косметика",
	'ipm':[0,162,269,0,0,0,0,0,0,168,728,0],	
	'ibgc':"#663300"
},
{
	'ilabel': "налоги",
	'ipm':[0,0,4200,0,1995,0,252.50,0,0,0,163.14,595],
	'ibgc':"#330033"
},
{
	'ilabel': "обеды",
	'ipm':[0,0,0,0,249,3490,4158,432,0,0,0,0],	
	'ibgc':"#FFCC00"
},
{
	'ilabel': "овощи-фрукты",
	'ipm':[4907.71,1330.05,2882.01,2518.12,1062.66,2010.82,1540.61,737.82,988.02,1722.86,5185.87,6511.47],	
	'ibgc':"#6699FF"
},
{
	'ilabel': "одежда",
	'ipm':[0,0,0,6387,0,5331,0,5196,0,1098,0,0],	
	'ibgc':"#FF9999"
},
{
	'ilabel': "отпуск",
	'ipm':[0,0,0,4715.20,0,4445.98,4445.98,0,0,30540.88,0,4949.60],	
	'ibgc':"#FF66FF"
},
{
	'ilabel': "подарки",
	'ipm':[2747.67,2004.57,3712.49,3168.98,9289.48,0,1642,8788,179.99,6142.9,5288.80,24074.13],	
	'ibgc':"#c94a53"
},
{
	'ilabel': "поликлиника",
	'ipm':[0,0,0,0,0,0,0,0,0,0,3000,12200],	
	'ibgc':"#993300"
},
{
	'ilabel': "продукты",
	'ipm':[13602.36,9574,11254.37,10999.36,9852.37,11188.03,6318.24,4090.91,5437.37,7447.63,11794.18,6184.57],	
	'ibgc':"#339999"
},
{
	'ilabel': "проезд",
	'ipm':[2000,2200,800,2400,800,1600,2600,2070,1600,1600,1600,2000],	
	'ibgc':"#e2975d"
},
{
	'ilabel': "развлечения",
	'ipm':[0,0,0,0,0,0,0,0,0,1400,0,0],	
	'ibgc':"#FF0000"
},
{
	'ilabel': "сладости",
	'ipm':[3082.24,5010.69,4176.45,4981.66,3678.10,3357.14,4863.51,2541.07,2731.69,4822.42,5837.90,3546.30],	
	'ibgc':"#447c69"
},
{
	'ilabel': "спорт",
	'ipm':[13526,0,0,3000,790,4000,400,420,0,2500,0,0],	
	'ibgc':"#e4bf80"
},
{
	'ilabel': "стрижка",
	'ipm':[0,0,450,0,450,0,450,0,0,450,0,450],	
	'ibgc':"#eeeee"
},
{
	'ilabel': "такси",
	'ipm':[0,0,0,0,0,1066,953,2637,794,1239,1871.00,0],	
	'ibgc':"#FFFF33"
},
{
	'ilabel': "техника",
	'ipm':[0,0,0,0,0,0,0,0,0,0,0,0],	
	'ibgc':"#666633"
},
{
	'ilabel': "учеба",
	'ipm':[6413.60,5922,0,1600,0,0,0,1838,1983.40,0,1500,0],	
	'ibgc':"#f19670"
},
{
	'ilabel': "хозяйственное",
	'ipm':[3462.42,3619.40,4007.38,3559.40,4408.14,18639.49,2296.98,2955.99,5148.97,6508.77,6025.89,5461.37],	
	'ibgc':"#6633FF"
}];

let need_show = ["квартплата","продукты","овощи-фрукты","сладости","обеды","подарки","хозяйственное","бензин"];

let DS = [];
need_show.forEach(function(item){
	RI.forEach(function(o){
		if (o.ilabel == item) {
				let d = {};
				d.label = item;
				d.backgroundColor = o.ibgc;
				d.data = o.ipm;
				d.fill = true;
				d.spanGaps = false;
				DS.push(d);
		}
	});
});

const total_sum = document.querySelector('#total');
let t = 0;
RI.forEach(item => {
	a = [...item['ipm']];
	a.map(i=> t+=i);
});
total_sum.textContent = Math.round(t);

let rashody_chart = new Chart(RASH, {
	type: 'bar',
	data: {
		labels: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
		datasets: DS
	},
	options:{
		onClick: function(c,i) {
			e = i[0];
			console.log(e._view.label); // month.label e._index month number
			console.log(this.getElementsAtEvent(c));
			//console.log(this.data.labels[e._index]);
			//console.log(this.data.datasets);
			/* console.log(e._index)
			var x_value = this.data.labels[e._index];
			var y_value = this.data.datasets[0].data[e._index];
			console.log(x_value);
			console.log(y_value); */
		}
	}	
});

let data = [];
labels = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
for(var i=0; i < labels.length; i++){
	let sum = 0;
	RI.forEach(function(o){
		//console.log(o.ilabel+' : '+o.ipm[i]);
		sum += o.ipm[i];
	});
	data.push(Math.round(sum));
}

let sum_rashody_month = new Chart(SRM, {
	type: 'bar',
	data: {
		labels: labels,
		datasets: [{
			label: '2019 год',
			data: data,
			backgroundColor: ["#6633FF","#f19670","#339999","#666633","#447c69","#FFCC33","#993300","#f19670","#666633","#f19670","#330033","#666633"]
		}]
	}
});

let pielabels = [];
let piedata = [];
let bgcl = [];

RI.forEach(function(obj){
	pielabels.push(obj.ilabel);
	let sum = 0;
	obj.ipm.forEach(function(item){sum = sum+item});
	piedata.push(sum);
	bgcl.push(obj.ibgc);
});

let rashody_pie_chart = new Chart(RP, {
	type: 'doughnut',
	data: {
		labels: pielabels,
		datasets: [
			{
				data: piedata,
				backgroundColor: bgcl
			}
				],
		options: {}
	}	
});