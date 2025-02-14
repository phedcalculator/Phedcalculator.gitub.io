// JavaScript Document

const tariffs = {
  'Band A-Non MD': 209.5, 
  'Band A-MD1': 209.5, 
  'Band A-MD2': 209.5, 
  'Band B-Non MD': 68.96,
  'Band B-MD1': 67.18,
  'Band B-MD2': 67.12,
  'Band C-Non MD': 56.38,
  'Band C-MD1': 54.64,
  'Band C-MD2': 54.64,
  'Band D-Non MD': 39.67,
  'Band D-MD1': 55.43,
  'Band D-MD2': 55.43,
  'Band E-Non MD': 39.44,
  'Band E-MD1': 55.43,
  'Band E-MD2': 55.43
};


//$('.lor__form').hide();

$('.billingKwh__form').hide();
//$('.billingKwh__form').hide();

$('.billing__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.lor__button').removeClass('active');
   $('.billingKwh__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.billing__form').show();
   $('.billingKW__form').hide();
   $('.lor__form').hide();
   $('.billingKwh__form').hide();
   $('.DTRloading__form').hide();
   $('.fuse__form').hide();

});

$('.lor__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.billingKwh__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.lor__form').show();
   $('.billingKwh__form').hide();
   $('.billingKW__form').hide();
   $('.billing__form').hide();
   //   $('.fuse__form').hide();
   $('.DTRloading__form').hide();
   $('.fuse__form').hide();

});


$('.billingKwh__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.lor__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.billingKwh__form').show();
   $('.lor__form').hide();
   $('.billingKW__form').hide();
   $('.billing__form').hide();
   $('.DTRloading__form').hide();
   $('.fuse__form').hide();
})

$('.DTRloading__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.billingKwh__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.lor__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.DTRloading__form').show();
   $('.billingKW__form').hide();
   $('.billingKwh__form').hide();
   $('.lor__form').hide();
   $('.billing__form').hide();
   $('.fuse__form').hide();
});

$('.fuse__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.billingKwh__button').removeClass('active');
   $('.lor__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.fuse__form').show();
   $('.billingKwh__form').hide();
   $('.lor__form').hide();
   $('.billingKW__form').hide();
   $('.billing__form').hide();
   $('.DTRloading__form').hide();
});

$('.billingKW__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.billingKwh__button').removeClass('active');
   $('.lor__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.billingKW__form').show();
   $('.billingKwh__form').hide();
   $('.lor__form').hide();
   $('.fuse__form').hide();
   $('.billing__form').hide();
   $('.DTRloading__form').hide();


});


//  BILLING (AMP)

//  BILLING (AMP)


const loadAmps = document.querySelector("#singlePhaseAmps");
const Band = document.querySelector("#selectBand");
const output = document.querySelector("#outputCost");
const outputkWh = document.querySelector("#outputKilowattHr");
const start = document.getElementById("btnStart");
const refresh = document.getElementById("btnRefresh");
const a = document.getElementById("rAmp");
const b = document.getElementById("yAmp");
const c = document.getElementById("bAmp");
const neutral = document.getElementById("nAmp");



function calculate(e) {
  e.preventDefault();
  
  // Calculate the average current if phase values are provided
  let avg = (Number(a.value) + Number(b.value) + Number(c.value) + Number(neutral.value)) / 3;
  
  // Check if any of the phase values are provided
  let isAvgProvided = a.value || b.value || c.value || neutral.value;
  
  // Use 0.415 x root 3 if avg is provided, otherwise use 0.240
  let multiplier = isAvgProvided ? 0.719 : 0.240;
  
  // Get the selected band and category
  let selectedBand = Band.options[Band.selectedIndex].text;
  
  // Calculate total cost based on whether avg or loadAmps.value is used
  let totalCost;
  if (isAvgProvided) {
    totalCost = avg * Number(Band.value) * tariffs[selectedBand] * multiplier * 0.6 * 0.85 * 1.075;
  } else {
    totalCost = Number(loadAmps.value) * Number(Band.value) * tariffs[selectedBand] * multiplier * 0.85 * 0.6 * 1.075;
  }
	
  let kWh;
  if (isAvgProvided) {
    kWh = avg * Number(Band.value) * multiplier * 0.6 * 0.85;
  } else {
    kWh = Number(loadAmps.value) * Number(Band.value) * multiplier * 0.6 * 0.85;
  }
	totalCost = totalCost || 0;
	outputkWh.innerHTML = "Your bill for " + kWh.toFixed(1) + "kWh consumption is:";
  
  output.innerHTML = "\u20a6" + totalCost.toLocaleString(undefined,{maximumFractionDigits:2});
}





function emptyInput() {
   output.innerHTML = "";
   outputkWh.innerHTML = "";
   loadAmps.value = "";
   Band.value = "";
   a.value = "";
   b.value = "";
   c.value = "";
   neutral.value = "";
   //  Phase.value = "";
}


start.addEventListener("click", calculate);
refresh.addEventListener("click", emptyInput);
tab1.addEventListener("click", emptyInput);
tab2.addEventListener("click", emptyInput);


//      BILLING (WATT)

const loadW = document.querySelector("#inputW");
const BandW = document.querySelector("#selectBandW");
const outputW = document.querySelector("#outputCostW");
const startW = document.getElementById("btnStartW");
const refreshW = document.getElementById("btnRefreshW");

function calcBillWatt(e) {
  e.preventDefault();
  
  // Get the selected band
  let selectedBand = BandW.options[BandW.selectedIndex].text;
  
  // Calculate the total cost
  var total = (((loadW.value) / 1000) * Number(BandW.value) * tariffs[selectedBand] * 1.075 * 0.6);
 
  outputW.innerHTML = "\u20a6" + total.toLocaleString(undefined,{maximumFractionDigits:2});
}
function emptyBillWattInput() {
 
   outputW.innerHTML = "";
   loadW.value = "";
   BandW.value = "";
   //  Phase.value = "";
}


startW.addEventListener("click", calcBillWatt);
refreshW.addEventListener("click", emptyBillWattInput);

//       LOR (ENERGY THEFT)

const loadAmps1 = document.querySelector("#inputAmps1");
const billHrs = document.querySelector("#inputHrs");
const Band1 = document.querySelector("#selectBand1");
const output1 = document.querySelector("#outputCost1");
const start1 = document.getElementById("btnStart1");
const refresh1 = document.getElementById("btnRefresh1");

function calcLorRPD(e) {
  e.preventDefault();
  
  // Get the selected band
  let selectedBand = Band1.options[Band1.selectedIndex].text;
  
  // Calculate the total cost
  var total = Number(loadAmps1.value) * Number(billHrs.value) * Number(Band1.value) * tariffs[selectedBand] * 0.240 * 0.6 * 0.85 * 1.075;
  
  output1.innerHTML = "\u20a6" + total.toLocaleString(undefined,{maximumFractionDigits:2});
}

function emptyLorRPDInput() {
   
   output1.innerHTML = "";
   loadAmps1.value = "";
   billHrs.value = "";
   Band1.value = "";
   //  Phase1.value = "";
}


start1.addEventListener("click", calcLorRPD);
refresh1.addEventListener("click", emptyLorRPDInput);


//              BILLING (kWh)

const loadMW = document.querySelector("#inputMW");

const Band2 = document.querySelector("#selectBand2");
const output2 = document.querySelector("#outputCost2");
const start2 = document.getElementById("btnStart2");
const refresh2 = document.getElementById("btnRefresh2");

function calcbillingKwh(e) {
  e.preventDefault();
  
  // Get the selected band
  let selectedBand = Band2.options[Band2.selectedIndex].text;
  
  // Calculate the total cost
  var total = loadMW.value * tariffs[selectedBand] * 1.075;
  
  output2.innerHTML = "\u20a6" + total.toLocaleString(undefined,{maximumFractionDigits:2});
}

function emptybillingKwhInput() {
  output2.innerHTML = "";
  loadMW.value = "";
  Band2.value = "";
}
start2.addEventListener("click", calcbillingKwh);
refresh2.addEventListener("click", emptybillingKwhInput);

//       BILL DISCOUNT
document.getElementById("btnStartDiscount").addEventListener('click', doDisc);

   function doDisc() {
      var totalArrears = parseFloat(document.querySelector("#inputBill").value);
      var currentBill = parseFloat(document.querySelector("#currentCharge").value);
      let rate = 0;
//      let tax = 1.06;
	  currentBill = currentBill || 0;
	  totalArrears = totalArrears || 0;
      let total = totalArrears
      if (total ==="") {
      rate = "";
	  discGiven = "null"; 
      } else if (total > 9999 && total <50000){
        rate = 0.2;
	  } else if (total > 49999 && total <200000){
        rate = 0.22;
	  } else if (total > 199999 && total <300000){
        rate = 0.25;
	  } else if (total > 299999 && total <400000){
        rate = 0.3;
	  }  else if (total > 399999 && total <500000){
        rate = 0.35;
	  }  else if (total >= 500000){
        rate = 0.4;
	  }  else if (total >0 && total <10000){
        rate = "0";
      } else{
        rate = 0;
      }
      let discount = total * rate;
      if (rate == 0.2) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 20% discount.";
      }else if (rate == 0.22) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 22% discount.";
	  }else if (rate == 0.25) {
        disctotal = "\u20a6" +discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 25% discount.";
	  }else if (rate == 0.3) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 30% discount.";
	  }else if (rate == 0.35) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 35% discount.";
	  }else if (rate == 0.4) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 40% discount.";
	  }else if (rate =="") {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "";
      } else {
        if (rate == 0) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Sorry, you are not eligible for this promo.";
        } else {
          disctotal = "";
        }
      }
//      taxtotal = tax;
      finaltotal = ((total - discount)+(currentBill));
      
      document.getElementById('discountDiv').innerHTML = disctotal;
      document.getElementById('discountGiven').innerHTML = discGiven;
      document.getElementById('totalDebt').innerHTML = "\u20a6" + total.toLocaleString(undefined,{maximumFractionDigits:2});
//      document.getElementById('taxDiv').innerHTML = "Tax: $".toFixed(2);
      document.getElementById('totalDiv').innerHTML = "\u20a6" + finaltotal.toLocaleString(undefined,{maximumFractionDigits:2});
    }

$( ".btnReset2" ).click(function() {
  $( ".clear2" ).empty();
	document.querySelector('#totalArrears').value ='';
	document.querySelector('#inputBill').value ='';
	document.querySelector('#discountDiv').value ='';
	document.querySelector('#totalDiv').value ='';
	document.querySelector('#discountGiven').value ='';
//	document.querySelector('#inputKVA1').value ='';
});	

document.getElementById("btnRefreshDisc").addEventListener('click', emptyArrears);
 const Arrears = document.querySelector("#inputBill");
 const currentB = document.querySelector("#currentCharge");
function emptyArrears() {
  console.log("emptied!");
  
  Arrears.value = "";
  currentB.value = "";
  
//  Phase1.value = "";
};



//        DTR LOADING

document.getElementById("btnStart3").addEventListener('click', doCalc);

function doCalc() {

   let x = parseFloat(document.querySelector("#red").value);
   let y = parseFloat(document.querySelector("#yellow").value);
   let z = parseFloat(document.querySelector("#blue").value);
   const outputLoad = document.querySelector("#outputLoading");
   const capacity = document.querySelector("#inputKVA");
	
//  const refresh3 = document.getElementById("btnRefresh3");

   let loading = ((Math.max(x, y, z) / (capacity.value * 1.4)) * 100);

   loading = loading || 0;
	if(loading === 0) {
	document.getElementById('outputLoading').style.color = "black";
		
    }else if(loading < 50) {
	document.getElementById('outputLoading').style.color = "green";
		
    }else if(loading >= 50) {
                document.getElementById('outputLoading').style.color = "red";
	}
	
   outputLoad.innerHTML = loading.toFixed(0) + "%";
}

document.getElementById("btnStart3").addEventListener('click', doMath);

		
	function doMath() {
//function calculatePercentageImbalance(xx, yy, zz) {
   let xx = parseFloat(document.querySelector("#red").value);
   let yy = parseFloat(document.querySelector("#yellow").value);
   let zz = parseFloat(document.querySelector("#blue").value);
//   let nn = parseFloat(document.querySelector("#neutral").value);
	
		
		function calculatePercentageImbalance(xx, yy, zz) {
    // Calculate the average current
    let avgCurrent = (xx + yy + zz) / 3;

    // Calculate the deviations
    let redDeviation = Math.abs(xx - avgCurrent);
    let yellowDeviation = Math.abs(yy - avgCurrent);
    let blueDeviation = Math.abs(zz - avgCurrent);

    // Find the maximum deviation
    let maxDeviation = Math.max(redDeviation, yellowDeviation, blueDeviation);

    // Calculate the percentage imbalance
    let percentageImbalance = (maxDeviation / avgCurrent) * 100;
			percentageImbalance = percentageImbalance || 0;
			
			if(percentageImbalance === 0) {
    balance.innerHTML = "";
    document.getElementById('outputImbalance').style.color = "black";
} else if(percentageImbalance <= 4) {
    document.getElementById('outputImbalance').style.color = "green";
    document.getElementById('balance').style.color = "green";
    balance.innerHTML = "DTR's Load is Balanced";
} else if(percentageImbalance > 4 && percentageImbalance <= 10) {
    document.getElementById('outputImbalance').style.color = "brown";
    document.getElementById('balance').style.color = "brown";
    balance.innerHTML = "DTR's Load is Moderately Balanced";
} else if(percentageImbalance > 10) {
    document.getElementById('outputImbalance').style.color = "red";
    document.getElementById('balance').style.color = "red";
    balance.innerHTML = "DTR's Load is Highly Unbalanced";
}
    return percentageImbalance;
			
			
}

let percentageImbalance = calculatePercentageImbalance(xx, yy, zz);


outputImbalance.innerHTML = (percentageImbalance.toFixed(0) + "%");


}

	$( ".btnReset" ).click(function() {
  $( ".clear" ).empty();
	document.querySelector('#red').value ='';
	document.querySelector('#yellow').value ='';
	document.querySelector('#blue').value ='';
	document.querySelector('#neutral').value ='';
	document.querySelector('#inputKVA').value ='';
});		




document.getElementById("lbRecord").addEventListener('click', extractValues);

function extractValues() {
    const red = parseFloat(document.querySelector("#red").value);
    const yellow = parseFloat(document.querySelector("#yellow").value);
    const blue = parseFloat(document.querySelector("#blue").value);
    const neutral = parseFloat(document.querySelector("#neutral").value);
    const capacity = parseFloat(document.querySelector("#inputKVA").value);

    // Check if any value is empty
    if (isNaN(red) || isNaN(yellow) || isNaN(blue) || isNaN(neutral) || isNaN(capacity)) {
        const errorMessageDiv = document.getElementById("errorMessage");
        errorMessageDiv.textContent = "Please fill in all the required values.";

        // Hide the error message after 5 seconds
        setTimeout(() => {
            errorMessageDiv.textContent = "";
        }, 5000); // 5000 milliseconds = 5 seconds

        return; // Stop execution
    }

    // Calculate loading percentage
    const loading = ((Math.max(red, yellow, blue) / (capacity * 1.4)) * 100) || 0;

    // Calculate percentage imbalance
    const avgCurrent = (red + yellow + blue) / 3;
    const maxDeviation = Math.max(Math.abs(red - avgCurrent), Math.abs(yellow - avgCurrent), Math.abs(blue - avgCurrent));
    const imbalance = (maxDeviation / avgCurrent) * 100 || 0;

    const url = `LB Report.html?red=${red}&yellow=${yellow}&blue=${blue}&neutral=${neutral}&capacity=${capacity}&loading=${loading.toFixed(2)}&imbalance=${imbalance.toFixed(2)}`;

    // Open the result page in a new tab
    window.open(url, '_blank');
}


	

$(document).ready(function(){
  $(".toggleButton").click(function(){
    var button = $(this);
    var text = button.next(".displayText");

    if (text.is(":hidden")) {
        text.slideDown("fast");
        button.text("X");
        button.css({"padding-left": "10px", "padding-right": "10px"});
    } else {
        text.slideUp("fast");
        button.text("Helpful Tips!");
        button.css({"padding-left": "5px", "padding-right": "5px"});
    }
  });
});



	
//                    TARIFF TICKER



// Get the current date
function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString('en-NG', { month: 'long' });
  const year = date.getFullYear();

  // Function to add the ordinal suffix to the day
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
}

// Usage
const currentDate = new Date();
const formattedDate = formatDate(currentDate); // "21st May, 2024"


const news = `&nbsp Electricity Tariff as at <span class="brown-text">${formattedDate}</span> &nbsp | &nbsp
  Band A-Non MD - <span class="green-text">₦${tariffs['Band A-Non MD']}kWh</span> &nbsp &nbsp
  Band A-MD1 - <span class="green-text">₦${tariffs['Band A-MD1']}kWh</span> &nbsp &nbsp
  Band A-MD2 - <span class="green-text">₦${tariffs['Band A-MD2']}kWh</span> &nbsp &nbsp
  Band B-Non MD- <span class="green-text">₦${tariffs['Band B-Non MD']}</span>  &nbsp &nbsp
  Band B-MD1- <span class="green-text">₦${tariffs['Band B-MD1']}</span>  &nbsp &nbsp
  Band B-MD2 <span class="green-text">₦${tariffs['Band B-MD2']}</span>  &nbsp &nbsp
  Band C-Non MD - <span class="green-text">₦${tariffs['Band C-Non MD']}</span> &nbsp &nbsp   
  Band C-MD1- <span class="green-text">₦${tariffs['Band C-MD1']}</span> &nbsp &nbsp   
  Band C-MD2 - <span class="green-text">₦${tariffs['Band C-MD2']}</span> &nbsp &nbsp   
  Band D-Non MD - <span class="green-text">₦${tariffs['Band D-Non MD']}</span>  &nbsp &nbsp
  Band D-MD1 - <span class="green-text">₦${tariffs['Band D-MD1']}</span>  &nbsp &nbsp
  Band D-MD2 - <span class="green-text">₦${tariffs['Band D-MD2']}</span>  &nbsp &nbsp
  Band E-Non MD - <span class="green-text">₦${tariffs['Band E-Non MD']}</span> &nbsp &nbsp | &nbsp 
  Band E-MD1 - <span class="green-text">₦${tariffs['Band E-MD1']}</span> &nbsp &nbsp | &nbsp 
  Band E-MD2 - <span class="green-text">₦${tariffs['Band E-MD2']}</span> &nbsp &nbsp | &nbsp 
  Designed by: Obot Akpan &nbsp`;

// Select the container div by its class
const container = document.querySelector('.logo');
container.style.overflow = 'hidden'; // Ensure overflow content is not visible
container.style.position = 'relative'; // Needed for absolute positioning of children

// Create a ticker container with a new unique ID
const tickerContainer = document.createElement('div');
tickerContainer.id = 'tariffScroll';
tickerContainer.style.position = 'absolute';
tickerContainer.style.boxShadow = '5px 2px 6px rgba(0, 0, 0, 0.2)';

tickerContainer.style.bottom = '0';
tickerContainer.style.left = '0';
tickerContainer.style.whiteSpace = 'nowrap';
tickerContainer.innerHTML = news;

// Append the ticker container to the selected container div
container.appendChild(tickerContainer);

// Animate the ticker
let position = container.offsetWidth; // Use the container's width for initial position
let tickerPaused = false; // A flag to determine if the ticker is paused

function scrollTicker() {
  if (!tickerPaused) {
    position--;
    // Reset position based on the container's width
    if (position < -tickerContainer.offsetWidth) {
      position = container.offsetWidth;
    }
    tickerContainer.style.transform = 'translateX(' + position + 'px)';
  }
  requestAnimationFrame(scrollTicker);
}

// Event listener to pause the ticker on mouse enter
tickerContainer.addEventListener('mouseenter', () => {
  tickerPaused = true;
});

// Event listener to resume the ticker on mouse leave
tickerContainer.addEventListener('mouseleave', () => {
  tickerPaused = false;
});

// Start the scrolling
scrollTicker();




