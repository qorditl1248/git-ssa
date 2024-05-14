//! 비동기 프로그래밍

// 비동기
// : 아닐 비, 같은 동, 시기 기: 시간이 같지 않음

// 동기
// : 같은 동, 시기 기: 같은 기간, 같은 주기

//! 1. 비동기 프로그래밍이란?
// : 특정 코드의 실행 완료를 기다리지 않고 다음 코드를 실행하는 프로그래밍 방식

// : 프로그램의 실행 흐름을 차단(block)하지 않고, '시간이 오래 소요'되는 작업을 처리하는 데 유용

// : 네트워크 요청(서버와의 통신), 파일 I/O 등에 주로 사용

//! 2. 비동기 VS 동기 프로그래밍의 차이점
//? 비동기 프로그래밍(Asynchronous)
// - 작업이 백그라운드에서 실행: 주 실행 흐름을 차단하지 않고, 작업 완료 여부와 상관없이 다음 코드가 진행
// - 동시에 여러 작업을 처리 가능: 작업 완료 시 콜백 함수나 프로미스를 통해 결과를 처리

//? 동기 프로그래밍(Synchronous)
// - 작업들이 순차적으로 실행: 한 작업이 완료된 후에 다음 작업이 시작
// - 실행 순서가 보장, 한 작업이 끝나야 다음 작업을 수행할 로직 구현이 가능

// 단점)
// 작업이 완료될 때까지 다음 작업이 중지 상태가 되기 때문에 작업 속도가 미뤄짐
// : 기다리는 과정에서 다른 함수 호출 불가

//& 동기 프로그래밍 예시
//* ---------------------------------------//
console.log('=========동기 구현===========');

function work() {
  
}


//* ---------------------------------------//
console.log('=========비동기 구현===========');
function anotherWork() {
  
}



// setTimeout 함수는 첫번째 파라미터에 넣는 함수를 두번째 파라미터에 넣은 시간(ms 단위)이 흐른 후 호출

// 결과물을 보면, 작업이 시작 되고 나서, for 루프가 돌아가는 동안 다음 작업도 실행되고, for 루프가 끝나고 나서 몇 ms 걸렸는지 나타남
// >> 만약에 anotherWork 함수가 끝난 다음에 어떤 작업을 처리하고 싶다면, 콜백 함수를 파라미터로 전달

// 콜백 함수
// : 함수 타입의 값을 파라미터로 넘겨줘서, 파라미터로 받은 함수를 특정 작업이 끝나고 호출을 해주는 것

//* ---------------------------------------//
function callbackWork() {

}


// 다음과 같은 작업들은 주로 비동기적으로 처리

//* ---------------------------------------//

// Ajax Web API 요청: 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리

// 파일 읽기: 주로 서버 쪽에서 파일을 읽어야 하는 상황에는 비동기적으로 처리

// 암호화/복호화: 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리

// 작업 예약: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리

// 비동기 작업을 다룰 때에는 callback 함수 외에도 Promise, 그리고 async/await 라는 문법을 사용하여 처리 가능

// 콜백을 쓰는 궁극적인 이유는 함수 간의 실행 순서를 잡아주는 것
// :  A 함수가 실행되고 결과가 나오면 그걸 B에게 받아 처리하게 끔 순서를 선정
//    >> 비동기를 처리

//! 3. 자바스크립트에서의 비동기 프로그래밍 구현(3가지 구현 방법)
// : 콜백 함수 / 프로미스(Promise) / Async,Await
