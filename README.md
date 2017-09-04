# Javascript Tristate Toggle-button Pair
A pair of toggling buttons, with additional third null state.

Version: 1.0.0

## Usage

1. Include the script in the HTML head, and create a callback for it (optional). See example/example.html.
1. Make a DIV element with class *tristate-button*.
1. Place two input buttons in that DIV with classes *tristate-btn-yes* and *tristate-btn-no*, respectively.
1. You can pre-activate one of the buttons by adding the class *tristate-btn-active* to it.

The callback will be executed with the following argument values:
- -1 (neither button active)
- 0 (no button active)
- 1 (yes button active)

## Requirements
- JQuery