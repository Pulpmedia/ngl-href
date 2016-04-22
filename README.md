nglHref is a directive to use $location inside a template. this way, it doesn't matter, if you're using the html5Mode or not.

### Installing nglHref

#### 1.1 Bower

```bower install nglHref ```

#### 2. Download
Download the Package from https://github.com/Pulpmedia/ngl-href/archive/master.zip


### Using nglHref

+ Include the libraries

```html
<script src="https://code.angularjs.org/1.3.4/angular.js"></script>
<script src="nglHref/dist/ngl-href.min.js"></script>
```
+ Inject the Module into your application


``` JavaScript
angular.module('myApp', ['nglHref']);

```
+ Use the directive in your html

``` html
<a ngl-href="/home"></a>
```
results in

``` html
<a href="/home"></a>
```

clicking the link will trigger ```$location.path()``` instead, wich makes it independent from the environment.
