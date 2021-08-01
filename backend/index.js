/**used https://www.npmjs.com/package/date-holidays to get the list of holidays */
const express = require("express");
const app = express();

var Holidays = require('date-holidays')
var hd = new Holidays('US', 'la', 'no');
var list = hd.getHolidays(2021);
var filteredList=list.map((obj) => (
    {
        name: obj.name,
        date:obj.date
    }
)
);

app.get("/",(req,res) => {
    res.send(filteredList);
});

const PORT = process.env.PORT || 8000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));