const driver = 'bob';

function logReturner() {
  console.log(`this code was called`);
  console.log(`${driver}`);
  console.log(`${driver}`, `is the driver variable name`);

}

logReturner();
