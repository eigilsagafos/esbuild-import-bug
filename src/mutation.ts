import * as FooMutations from "./modules/foo/mutations"
import * as BarMutations from "./modules/bar/mutations"

export const mutation = {
    ...FooMutations,
    ...BarMutations,
}