nglHref is a directive to use $location inside a template. this way, it doesn't matter, if you're using the html5Mode or not.

### Using nglHref

```
<a ngl-href="/home"></a>
```
results in

```
<a href="/home"></a>
```

clicking the link will trigger ```$location.path()``` instead, wich makes it independent from the environment.
