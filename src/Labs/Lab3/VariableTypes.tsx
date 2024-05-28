export default function VariableTypes() {
    let numberVariable: number = 123;
    let floatingPointNumber = 234.345;
    let stringVariable: string = 'Hello World!';
    let booleanVariable: boolean = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;

    return (
        <div id="wd-variable-types">
            <h4>Variables Types</h4>
            numberVariable = {numberVariable}<br />
            floatingPointNumber = {floatingPointNumber}<br />
            stringVariable = {stringVariable}<br />
            booleanVariable = {booleanVariable + ""}<br />
            isNumber = {isNumber}<br />
            isString = {isString}<br />
            isBoolean = {isBoolean}<br />
            <hr />
        </div>
    );
}
