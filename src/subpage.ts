import {A} from './components/hello';
const a = new A();
const user = { firstName: "Zhantao", lastName: "Chen" };
document.body.innerHTML = a.greeter(user);