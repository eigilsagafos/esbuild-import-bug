let __defineProperty = Object.defineProperty;
let __markAsModule = (target) => {
  return __defineProperty(target, "__esModule", {value: true});
};
let __export = (target, all) => {
  __markAsModule(target);
  for (let name in all)
    __defineProperty(target, name, {get: all[name], enumerable: true});
};

// src/modules/foo/queries.ts
const queries_exports = {};
__export(queries_exports, {
  FooQuery1: () => FooQuery1,
  FooQuery2: () => FooQuery2,
  FooQuery3: () => FooQuery3,
  FooQuery4: () => FooQuery4
});
const FooQuery1 = {};
const FooQuery2 = {};
const FooQuery3 = {};
const FooQuery4 = {};

// src/modules/bar/queries.ts
const queries_exports = {};
__export(queries_exports, {
  BarQuery1: () => BarQuery1,
  BarQuery2: () => BarQuery2,
  BarQuery3: () => BarQuery3,
  BarQuery4: () => BarQuery4
});
const BarQuery1 = {};
const BarQuery2 = {};
const BarQuery3 = {};
const BarQuery4 = {};

// src/query.ts
const query = {
  ...queries_exports,
  ...queries_exports
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

// src/mutation.ts
const mutation = {
  ...mutations_exports,
  ...mutations_exports
};

// src/schema.ts
const schema = {
  query,
  mutation
};
