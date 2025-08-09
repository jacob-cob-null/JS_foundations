// Object with a method that needs a bound 'this'
const buttonHandler = {
    name: "Button Handler Object",
    clickCount: 0,
    handleClick(message) {
        this.clickCount++;
        console.log(`${message} from ${this.name} (Total clicks: ${this.clickCount})`);
    }
};

// ✅ Starter: Bind functions here
const boundFn1 = buttonHandler.handleClick.bind(buttonHandler, 'Hello')
const boundFn2 = buttonHandler.handleClick.bind(buttonHandler, 'Goodbye')

// ✅ Starter: Add event listeners here
document.getElementById("btn1").addEventListener("click", boundFn1);
document.getElementById("btn2").addEventListener("click", boundFn2);
