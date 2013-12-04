# Resource Timing & User Timing

Chrome 25から使える。

## Resource Timingの例

```javascript
var resEntries = [].slice.call(performance.webkitGetEntriesByType('resource'));

resEntries.filter(function (entry) {
    return entry.initiatorType === 'css'; // CSSから読み込んだリソースに限定
}).forEach(function (entry) {
    console.log(entry.requestStart - entry.fetchStart); // リクエストまでにかかった時間
});
```

### initiator types

 `css`, `embed`, `img`, `link`, `object`, `script`, `subdocument`, `svg`, `xmlhttprequest`

### one-liner

```javascript
(function(initiator){[].slice.call(performance.webkitGetEntriesByType('resource')).filter(function (e) { return e.initiatorType === initiator }).forEach(function (e) { console.log(e.name) })}('css'));
```

## User Timingの例

### マーク

```javascript
performance.webkitMark('markone');
performance.webkitMark('markanother');

var markEntries = [].slice.call(performance.webkitGetEntriesByType('mark'));
markEntries.forEach(function (entry) {
    console.dir(entry);
});
```

### 計測

```javascript
performance.webkitMeasure('markone', 'markanother');

var measureEntries = [].slice.call(performance.webkitGetEntriesByType('measure'));
measureEntries.forEach(function (entry) {
    console.log(entry.duration);
});
```