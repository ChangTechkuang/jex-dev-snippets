# Indicator

## Overview

The Jex Indicator plugin is used to show a loading indicator on the screen.

## Indicator object creation

The basic indicator object may be created in the following format:

When the basic indicator is used, the form of indicator image provided by Jex is displayed.

```
var jexIndicator = jexjs.plugin("indicator");
```

If the design is to be changed separately for a given task, modify the css option in line with the project so that the image can be used for the indicator.

```
var jexIndicatorWithOptions = jexjs.plugin("indicator", {  
    modal: false,
    scopeWindow: top,
    css: {
        wrapper: "",
        bg: "jexjs-indicator",        // background class
        imgBg: "jexjs-indicator-bg",  // image background class  
        img: "jexjs-indicator-img",   // image class 
        modal: "modal",               // modal class
        active: "active"              // It is possible to set whether the indicator is displayed or not depending on whether the corresponding class exists.
    },
    target: null
});
```

## Options

When a plugin is created, additional options may be designated.

| Option        | Type          | Default       | Description                                                                                                                       |
|---------------|---------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------|
| modal         | Boolean       | false         | Whether to display a gray background overlay when the indicator is created                                                        |
| scopeWindow   | Window        | top window    | The window object where the indicator will be created                                                                             |
| css           | JSONObject    | -             | Custom CSS classes for styling the indicator                                                                                      |
| target        | String        | -             | Element ID where indicator should be appended. If null/undefined, adds to document body. If specified, appends to target element  |

## Example1

The indicator may be activated or deactivated by using the show/hide function.

[indicator] The indicator disappears in 1 second.

```
<button class="btn btn-primary" id="sampleIndicator">Indicator</button>
<script type="text/javascript">
$("#sampleIndicator").on("click", function() {
    var jexIndicator = jexjs.plugin("indicator");
    jexIndicator.show();

    setTimeout( function() {
        jexIndicator.hide();
    }, 1000);
});
</script>
```

## Example2

If the modal option is set to true, the background-color is displayed.

[indicator + modal] The indicator + modal will disappear in 1 second.

```
<button class="btn btn-primary" id="sampleIndicatorModal">Indicator + modal</button>
<script type="text/javascript">
$("#sampleIndicatorModal").on("click", function() {
    var jexIndicator = jexjs.plugin("indicator", { modal: true });
    jexIndicator.show();

    setTimeout( function() {
        jexIndicator.hide();
    }, 1000);
});
</script>
```

## Example3

If the target option is set (activated), the indicator element is added to the Element area. If the indicator is hidden in the target area only, you may modify ‘css’ accordingly.

(This is the set area of the target id.)

[indicator + target] The indicator + modal will disappear in 1 second.

```
<div id="indicatorTarget">
    This is the set area of the target id.
</div>
<button class="btn btn-primary">Indicator + target</button> The indicator disappears in 1 second.
<script type="text/javascript">
$("#sampleIndicatorTarget").on("click", function() {
    var jexIndicator = jexjs.plugin('indicator', { 
        modal: true,
        target : "indicatorTarget"
    });
    jexIndicator.show();

    setTimeout( function() {
        jexIndicator.hide();
    }, 1000);
});
</script>
```
 
## Reference

[Jex Indicator](https://studio30.jexframe.com/markdown/JEX_SCRIPT_INDICATOR/index.html)