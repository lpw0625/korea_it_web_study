// 자바스크립트 객체 형태 = {key: value, key: value}
// 자료형이 없으므로 오버라이딩이 안된다.

let student = {
    name: "이평원",
    age: 30
    // 이 형태를 제일 많이 쓰인다.
}

console.log(student);
console.log(typeof(student));
console.log(student.name);

//클래스 생성 

class Student {
    name;
    age;

    // 생성자 , 매개변수는 앞에 변수를 붙이지 않는다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
        

    }

}

let s = new Student();
s.name = "이평이";
s.age = 29;
console.log(s);

class User {
    #username;
    password;

    set username(username) {
        this.#username = username;
    }

    get username() {
        return this.#username;

    }

}

let user = new User();
user.setUsername = "lpw";
console.log(user.username); 

let dataMap = new Map();
dataMap.set("username", "lpw");
dataMap.set("password", "1234");

console.log(dataMap)
console.log(dataMap.get("password"));
// 자바의 HeshMap


// 맴버 변수 앞에 #을 붙이면 private 이 뜬다.
//  privat 