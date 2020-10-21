const express = require("express");
var cors = require("cors");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  console.log("Time.....:", Date.now());
  next();
});





app.get("/allCampaigns", async (req, res) => {
  // get all the campaigns fro DB and send it to front end.
  list_of_objFromDB = await db.getAllCampaigns();
  obj = [{ name: "Ali", age: "123456" }];
  res.json(list_of_objFromDB.rows);
});









// GET THE USER from DB according his id then send it to front end
app.get("/user/:id", async (req, res) => {
  let userId = req.params.id;
  let user = await db.getUserById(userId);

  // make her to wait for 5 seconds before it send the result to the front end
  // TODO (checkparams func will be called here)
  setTimeout(() => {
    res.json(user.rows);
    console.log("from setTimeout...", user.rows);
  }, 4000);
});




// GET data from front end and update the user and send it back to front
app.put("/updateUser/:id", (req, res) => {
  const { id } = req.params;
  const { newUserName, newUserEmail } = req.body;
  let updatedUser = db.updateUser(newUserName, newUserEmail, id);
  res.json(updatedUser);
  console.log(newUserName, newUserEmail, id);
});




app.post("/addUserData", (req, res) => {
  const {
    michel_id,
    michel_name,
    query_position,
    query_volum,
    query_location,
    query_industry,
    max_prospect,
    counter_prospect,
    counter_search_day,
    counter_conexion_day,
    counter_messages_day,
    network_one,
    network_two,
  } = req.body;
  // let userDataAdded = db.addUserDataToDB(
  //   michel_id,
  //   michel_name,
  //   query_position,
  //   query_volum,
  //   query_location,
  //   query_industry,
  //   max_prospect,
  //   counter_prospect,
  //   counter_search_day,
  //   counter_conexion_day,
  //   counter_messages_day,
  //   network_one,
  //   network_two
  // );
  // res.json(userDataAdded);
  console.log(req.body);
});



// TODO adding data of the sixBoxes

app.post('/sixBoxesData', async (req, res) => {

  const { michel_id, michel_name, template_name, template_id, template_body, user_id } = await req.body

  for (let ix = 0; ix < template_body.length; ix++) {

    var box = template_body[ix]
    var squence_id = ix + 1

    await db.addToboxestable(box, michel_id, michel_name, template_name, template_id, squence_id, user_id)
  }
  res.json({ msg: 'added successfully..... to profileTemplate table....' })
})



// TODO getting  
app.get('/dataOfSixBoxes/:id', async (req, res) => {
  // get all data from the boxestable
  let userId = req.params.id;
  let allData = await db.getUserByIdFromBoxesTable(userId);
  res.json(allData.rows) // u have 2 records 
  console.log(allData.rows);

})








const PORT = process.env.PORT || "5000";

app.listen(PORT, () => console.log(`Port is running at ${PORT}`));
