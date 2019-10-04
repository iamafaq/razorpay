const express = require('express')
var path=require('path');
var request = require('request');

const capturePaymentFor = function capturePaymentFor(payement_id,_amount) {
	request({  
		method: 'POST'
		,  url: 'https://rzp_test_3j6lF9doGAqOSg:19kiQWhyewaGgV5CjBelXuCa@api.razorpay.com/v1/payments/'+payement_id+'/capture'
		,  form: {    amount: _amount  }}
		, function (error, response, body) {  
			console.log('Status:', response.statusCode);  
			console.log('Headers:', JSON.stringify(response.headers)); 
			console.log('Response:', body);
	});		

}

const app = express()
const port = 3000


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
  }
)

app.post('/success', (req, res) => {
   console.log('success')
    res.sendFile(path.join(__dirname, '/', 'success.html'));

  }
)





app.listen(port, () => console.log(`Example app listening on port ${port}!`))