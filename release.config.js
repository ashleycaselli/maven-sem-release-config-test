let config = require('semantic-release-preconfigured-conventional-commits');
config.tagFormat = 'custom-tag-${version}'
config.branches = ["master", "main"];
config.plugins.push(
  [
    "@terrestris/maven-semantic-release",
    {
      "mavenTarget": "package jib:build",
      "settingsPath": "./settings.xml",
      "updateSnapshotVersion": true,
      "mvnw": true
    }
  ],
  "@semantic-release/github",
  "@semantic-release/git"
)
module.exports = config