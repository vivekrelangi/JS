function testVar() {
    if (10 == 10) {
        let flag = "true";
    }
    // console.log(flag); //Uncaught ReferenceError: flag is not defined
}
testVar();
