
console.log("Script loaded successfully ");

function test() {
    console.log("Hooking");
    var myClass = Java.use("com.example.frida_v1.MainActivity");

    myClass.test.implementation = hooked;

}

function hooked() {
    console.log("Hooked into test()...");
    return false;
};

Java.perform(test);