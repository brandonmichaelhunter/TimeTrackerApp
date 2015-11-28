/* Provision Projects table. */
var schemaBuilder = lf.schema.create('TimerTrackerDB', 1);
/* reach if we can prevent the table provisioned everytime we run our app. */
try {
  schemaBuilder.createTable('Projects').
    addColumn('id',lf.Type.INTEGER).
    addColumn('name',lf.Type.STRING).
    addColumn('isBillable',lf.Type.BOOLEAN).
    addColumn('rate', lf.Type.NUMBER).
    addColumn('isActive', lf.Type.BOOLEAN).
    addPrimaryKey(['id']).
    addIndex('idxName', ['name'], false, lf.Order.DESC);
    console.log("Projects table was created. Yeah!!!!")
}
catch(err) {
  //document.getElementById("demo").innerHTML = err.message;
  console.log('Oh no, an error has occur: '+err.message+'');
}
