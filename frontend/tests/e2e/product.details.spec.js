describe('angularjs homepage todo list', function() {

    beforeEach(function () {
        browser.get('http://localhost:3000/#/product/98');
    });

    it('Should have a title', function () {
        // expect(browser.getTitle()).toEqual('Rockstars | Icon Tee 98');
    });

    it('Should have a heading', function () {
        var title = element(by.css('h1'));
        expect(title.getText()).toEqual("Icon Tee 98");
    });

    it('Should add to basket', function () {
        var form = element(by.id('form-add-to-bag'));
        var button = form.element(by.css('button'));
        button.click();
        
    });

  it('should add a todo', function() {
    // browser.get('https://angularjs.org');

    // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    // element(by.css('[value="add"]')).click();

    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
    
    browser.get('http://localhost:3000/#/product/98');

    //console.log(element);
    var skuInput = element(by.model('sku'));
    var qtyInput = element(by.model('qty'));
    var form = element(by.id('form-add-to-bag'));
    var button = element(by.css('button'));
    
    //button.click();

    expect(true).toBe(true);

  });
});