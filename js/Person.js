class Person extends React.Component{ // 1. 使用 class 建立類別
    constructor(name) { // 2. 使用 constructor 定義建構子
      this.name = name;
    }
  
    speak() {
      console.log('My name is ' + this.name);
    }
    
    render() {
        const jason = new Person('Jason Chung');
        jason.speak(); // My name is Jason Chung      
        return <div>jason.speak()</div>;
      }  
  }
  

  
  window.App.TodoApp = TodoApp;
