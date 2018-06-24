// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by remote-configs.js.
import { name as packageName } from "meteor/kingjuli:remote-configs";

// Write your tests here!
// Here is an example.
Tinytest.add('remote-configs - example', function (test) {
  test.equal(packageName, "remote-configs");
});
