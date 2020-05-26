## TypeScript

TypeScript is a superset of JavaScript and extends JavaScript by adding types to the language.
JavaScript is a loosely typed language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned and re-assigned value of all types.
TypeScript is the extra layer on top of JavaScript that check primitive types like string, number, boolean, object, undefined etc. that these are consistently assigned across your whole codebase. TypeScript build a type system which accepts JavaScript code that has types.

[TypeScript lang](https://www.typescriptlang.org/)

TypeScript uses Types by Inference:

```
$ let name = "Ola Normann";
```

Another way is to define the type if not assign yet:

```
$ let name: string";
```

One option to install TypeScript is to use Node Package Manager (NPM):

```
$ npm install -g typescript
```

To check the TypeScript version, use the following command:

```
$ tsc -v
```
