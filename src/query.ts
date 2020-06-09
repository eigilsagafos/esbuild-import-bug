import * as FooQueries from "./modules/foo/queries"
import * as BarQueries from "./modules/bar/queries"

export const query = {
    ...FooQueries,
    ...BarQueries,
}