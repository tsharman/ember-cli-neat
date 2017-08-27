# ember-cli-neat

Include neat in an ember-cli app.

When the addon is installed, it will add neat 2.1.0 as an npm dependency.

## Dependencies

Your project should already be set up to handle sass/scss builds. If you're not, do so by running:

    ember install ember-cli-sass
## Usage

In your ember-cli (>= 0.1.1) project, run:

    ember install ember-cli-neat

The generator will create an `app.scss` with the sole contents being:

    @import "bourbon";
    @import "neat";

If you already have content in your `app.scss`, you can just choose "n" and add that
line to the top of `app.scss` yourself.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-neat`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Credit

Inspired by the [ember-cli-bourbon](https://github.com/yapplabs/ember-cli-bourbon) addon made by the good folks at Yapp.
