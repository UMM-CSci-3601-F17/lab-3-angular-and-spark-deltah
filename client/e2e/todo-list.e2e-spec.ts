import {TodoPage} from './todo-list.po';
import {browser, protractor} from 'protractor';

let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
browser.driver.controlFlow().execute = function () {
    let args = arguments;

    // queue 100ms wait between test
    //This delay is only put here so that you can watch the browser do its' thing.
    //If you're tired of it taking long you can remove this call
    //origFn.call(browser.driver.controlFlow(), function () {
    //  return protractor.promise.delayed(1);
    //});

    return origFn.apply(browser.driver.controlFlow(), args);
};

describe('angular-spark-lab', () => {
    let page: TodoPage;

    beforeEach(() => {
        page = new TodoPage();
    });

    it('should get and highlight Todo Name attribute ', () => {
        page.navigateTo();
        expect(page.getTodoTitle()).toEqual('Todo Owner');
    });

    it('should type something in filter name box and check that it returned correct element', () => {
        page.navigateTo();
        page.typeTodoOwner("Fry");
        expect(page.getFirstTodo()).toContain("Fry");
        expect(page.getFirstTodo()).not.toContain("Blanche")
        expect(page.getFirstTodo()).not.toContain("Workman")
        expect(page.getFirstTodo()).not.toContain("Barry")
        expect(page.getFirstTodo()).not.toContain("Dawn")
    });

    it("should type something unique in filter content box and check that it returned the correct element", () =>{
        page.navigateTo()
        page.typeTodoContent("Dolor Nostrud")
        expect(page.getFirstTodo()).toContain("Dawn");
        page.navigateTo()
        page.typeTodoContent(" Dolor Nostrud Amet");
        expect(page.getFirstTodo()).toContain("Roberta");
        page.navigateTo()
        page.typeTodoContent("I'm a lumberjack");
        expect(page.getIfNoTodos());
    });

    it("should type a valid and then an invalid category and see the correct responses", () =>{
        page.navigateTo();
        page.typeTodoCategory("homework");
        expect(page.getFirstTodo()).toContain("Ullamco irure laborum");
        page.navigateTo();
        page.typeTodoCategory("invalid");
        expect(page.getIfNoTodos());
    });

/*  it('should click on the age 27 times and return 3 elements then ', () => {
        page.navigateTo();
        page.getTodoByAge();
        for (let i = 0; i < 27; i++) {
            page.selectUpKey();
        }

        expect(page.getFirstTodo()).toEqual("Stokes Clayton is 27 years old");

        page.typeAName("Merrill");

        expect(page.getFirstTodo()).toEqual("Merrill Parker is 27 years old");
    });
*/
});
