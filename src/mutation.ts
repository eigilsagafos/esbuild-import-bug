import * as FooMutations from "./modules/foo/mutations"
import * as BarMutations from "./modules/foo/mutations"

export const mutation = {
    ...FooMutations,
    ...BarMutations,
}