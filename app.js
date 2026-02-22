async function myFunction() {
  try {
    const result = await Promise.resolve("Async/Await Success!");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();