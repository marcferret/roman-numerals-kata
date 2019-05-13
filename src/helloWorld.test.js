import HelloWorld from './helloWorld'

const helloWorld = new HelloWorld();

test('get Hello World string', () => {
    expect(helloWorld.getHelloWorld()).toEqual('Hello World');
});
