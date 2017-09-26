import {TodoPage} from './todo-list.po';
import {browser, protractor} from 'protractor';

// let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/

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
});
