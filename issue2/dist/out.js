let __defineProperty = Object.defineProperty;
let __markAsModule = (target) => {
  return __defineProperty(target, "__esModule", {value: true});
};
let __export = (target, all) => {
  __markAsModule(target);
  for (let name in all)
    __defineProperty(target, name, {get: all[name], enumerable: true});
};

// issue2/src/folders/child/foo.ts

// issue2/src/folders/child/index.ts

// issue2/src/folders/index.ts
const index_exports3 = {};
__export(index_exports3, {
  foo: () => foo
});

// issue2/src/index.ts
console.log(JSON.stringify(index_exports3));
