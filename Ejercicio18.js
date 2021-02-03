function argumentTest(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
    console.log(arguments);
};

argumentTest();
argumentTest("Hola");
argumentTest("uno", "dos", "tres");