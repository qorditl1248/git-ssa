//& 1. 사람 

// 특성 (속성, 프로퍼티)
// : 이름, 나이, 직업 등

// 기능 (동작, 메서드)
// : 걷다, 말하다, 먹다 등

// 속성을 먼저 정의하고 기능을 정의하는게 좋음 

let person = {
  name: '이승아',
  age: 50,
  job: 'developer',

  walk: function() {
    console.log(`걷기`);
  },
  speak: function() {
    console.log(`말하다`);
  },
  eat: function() {
    console.log(`먹다`);
  }
}

person.walk();
person.speak();
person.eat();

//& 2. 책

// 특성 (속성, 프로퍼티)
// : 책의 제목, 저자, 페이지 수, 출판사 등

// 기능 (동작, 메서드)
// : 책을 읽는 행위, 페이지를 넘기는 행위, 책에 대한 정보를 보여주는 행위 등

function book() {
  this.title = '자바스크립트',
  this.author = '이승아',
  this.pageCount = 150,
  this.publisher = '코리아it아카데미',

  displayInfo = function() {
    console.log(`${this.title}은 ${this.author}에 의해 작성되었습니다.`);
  }

  readPage = function() {
    console.log(`${this.title}은 ${this.pageCount}의 페이지가 있습니다`);
  }
}

let book1 = new book();
let book2 = new book();

console.log(book1.title);
console.log(book2.title);


//& 3. 자동차

// 특성 (속성, 프로퍼티)

// 모델명: "Tesla Model S"
// 색상: "레드"
// 연식: 2020
// 현재 속도: 0

// 기능 (동작, 메서드)

// 가속하기: 현재 속도를 증가시킨다.
// 정지하기: 차량을 정지시킨다.
// 혼을 울리다: 경적을 울린다.

let car = {
  
}

//& 4. 스마트폰

// 특성 (속성, 프로퍼티)

// 제조사: "Apple"
// 모델: "iPhone 12"
// 저장 공간: "128GB"
// 배터리 상태: "85%"

// 기능 (동작, 메서드)

// 전화 걸기: 전화를 건다.
// 앱 실행하기: 앱을 실행한다.
// 사진 찍기: 사진을 찍는다.
