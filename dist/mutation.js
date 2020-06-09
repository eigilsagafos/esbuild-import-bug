let __defineProperty = Object.defineProperty;
let __markAsModule = (target) => {
  return __defineProperty(target, "__esModule", {value: true});
};
let __export = (target, all) => {
  __markAsModule(target);
  for (let name in all)
    __defineProperty(target, name, {get: all[name], enumerable: true});
};

// src/modules/foo/mutations.ts
const mutations_exports = {};
__export(mutations_exports, {
  FooMutation1: () => FooMutation1,
  FooMutation2: () => FooMutation2,
  FooMutation3: () => FooMutation3,
  FooMutation4: () => FooMutation4
});
const FooMutation1 = {};
const FooMutation2 = {};
const FooMutation3 = {};
const FooMutation4 = {};

// src/modules/bar/mutations.ts
const mutations_exports = {};
__export(mutations_exports, {
  BarMutation1: () => BarMutation1,
  BarMutation2: () => BarMutation2,
  BarMutation3: () => BarMutation3,
  BarMutation4: () => BarMutation4
});
const BarMutation1 = {};
const BarMutation2 = {};
const BarMutation3 = {};
const BarMutation4 = {};

// src/mutation.ts
__export(exports, {
  mutation: () => mutation
});
const mutation = {
  ...mutations_exports,
  ...mutations_exports
};
