// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import Home from "./Home";
import Social_Links from "./Social_Links";
import Contact from "./Contact";
import Team_Home from "./Team_Home";
import Team from "./Team";
import Disclaimer from "./Disclaimer";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "Belliforum",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([Home, Team_Home, Team, Contact, Social_Links, Disclaimer]),
});
