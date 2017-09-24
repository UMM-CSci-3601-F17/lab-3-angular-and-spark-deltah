import {browser, element, by, Key} from 'protractor';

export class TodoPage {
    navigateTo() {
        return browser.get('/todos');
    }

    //http://www.assertselenium.com/protractor/highlight-elements-during-your-protractor-test-run/
    highlightElement(byObject) {
        function setStyle(element, style) {
            const previous = element.getAttribute('style');
            element.setAttribute('style', style);
            setTimeout(() => {
               element.setAttribute('style', previous);
           }, 200);
            return "highlighted";
        }

        return browser.executeScript(setStyle, element(byObject).getWebElement(), 'color: red; background-color: yellow;');
    }

    getTodoTitle() {
        let title = element(by.id('title')).getText();
        this.highlightElement(by.id('title'));

        return title;
    }

    typeTodoOwner(name: string) {
        let input = element(by.id('filterOwnerField'));
        input.click();
        input.sendKeys(name);
    }

    typeTodoCategory(category: string) {
        let input = element(by.id('filterCategoryField'));
        input.click();
        input.sendKeys(category);
    }

    selectUpKey() {
        browser.actions().sendKeys(Key.ARROW_UP).perform();
    }

    typeTodoContent(term: string) {
        let input = element(by.id('filterContentField'));
        input.click();
        input.sendKeys(term);
    }

    getFirstTodo() {
        let todo = element(by.id('todos')).getText();
        this.highlightElement(by.id('todos'));
        return todo;
    }

    getIfNoTodos(){
        if (element(by.id('todos')) == null) {
            return false;
        } else {
            return true;
        }

    }
/*
doe not yet work
    getNthTodo(nth: number){
        let todo = element.all(by.className("todos")).get(nth);
        this.highlightElement(todo);
        return todo;
    }

    */
}
