//QUnit.test("prettydate basics", function (assert) {
//    var now = "2008/01/28 22:25:00";
//    assert.equal(prettyDate(now, "2008/01/28 22:24:30"), "just now");
//    assert.equal(prettyDate(now, "2008/01/28 22:23:30"), "1 minute ago");
//    assert.equal(prettyDate(now, "2008/01/28 21:23:30"), "1 hour ago");
//    assert.equal(prettyDate(now, "2008/01/27 22:23:30"), "Yesterday");
//    assert.equal(prettyDate(now, "2008/01/26 22:23:30"), "2 days ago");
//    assert.equal(prettyDate(now, "2007/01/26 22:23:30"), undefined);
//});

//QUnit.test("prettydate basics", function (assert) {
//    function date(then, expected) {
//        assert.equal(prettyDate("2008/01/28 22:25:00", then), expected);
//    }
//    date("2008/01/28 22:24:30", "just now");
//    date("2008/01/28 22:23:30", "1 minute ago");
//    date("2008/01/28 21:23:30", "1 hour ago");
//    date("2008/01/27 22:23:30", "Yesterday");
//    date("2008/01/26 22:23:30", "2 days ago");
//    date("2007/01/26 22:23:30", undefined);
//});

// Synchronous Callbacks : assert.expect(2)
//QUnit.test("a test", function (assert) {
//    assert.expect(2); // 

//    function calc(x, operation) {

//        return operation(x);
//    }

//    var result = calc(2, function (x) {

//        console.log(x);
//        assert.ok(true, "calc() calls operation function");
//        return x * x;
//    });

//    assert.equal(result, 4, "2 square equals 4");
//});

// Asynchronous Callbacks : done = assert.async();
QUnit.test("asynchronous test: async input focus", function (assert) {
    var done = assert.async();
    var input = $("#test-input").focus();
    setTimeout(function () {
        assert.equal(document.activeElement, input[0], "Input was focused");
        done();
    });
});

QUnit.module("group a");
QUnit.test("a basic test example", function (assert) {
    assert.ok(true, "this test is fine");
});
QUnit.test("a basic test example 2", function (assert) {
    assert.ok(true, "this test is fine");
});

QUnit.module("group b");
QUnit.test("a basic test example 3", function (assert) {
    assert.ok(true, "this test is fine");
});
QUnit.test("a basic test example 4", function (assert) {
    assert.ok(true, "this test is fine");
});


QUnit.module("module", {
    beforeEach: function (assert) {
        assert.ok(true, "one extra assert per test");
    }, afterEach: function (assert) {
        assert.ok(true, "and one extra assert after each test");
    }
});

QUnit.test("test with beforeEach and afterEach", function (assert) {
    assert.expect(3);
    assert.ok(true, "this one");
});

QUnit.test("retrieving object keys xxx", function (assert) {
    var objectKeys = Object.keys({ a: 1, b: 2 });
    assert.ok(objectKeys.indexOf("a") > -1, "Object keys");
    assert.ok(objectKeys.indexOf("b") > -1, "Object keys");

    var arrayKeys = Object.keys([1, 2]); 
    console.log(arrayKeys); // >> ["0", "1"]
    console.log(arrayKeys.indexOf("1"));
    assert.ok(arrayKeys.indexOf("1") > -1, "Array keys");
    assert.ok(arrayKeys.indexOf("0") > -1, "Array keys");
});

// Custom Assertions : this.push
QUnit.assert.contains = function (needle, haystack, message) {
    var actual = haystack.indexOf(needle) > -1;
    this.push(actual, actual, needle, message);
};
QUnit.test("retrieving object keys 123", function (assert) {
    var objectKeys = Object.keys({ a: 1, b: 2 });
    assert.contains("a", objectKeys, "Object keys");
    assert.contains("b", objectKeys, "Object keys");

    var arrayKeys = Object.keys([1, 2]);
    assert.contains("1", arrayKeys, "Array keys");
    assert.contains("0", arrayKeys, "Array keys");
});

//QUnit.test("a test", function (assert) {
//    assert.expect(1);

//    var $body = $("body");

//    $body.on("click", function () {
        
//        assert.ok(true, "body was clicked!");
//    });

//    //$("button").trigger("click");

//    $body.trigger("click");

//});

//QUnit.test("keylogger api behavior", function (assert) {
//    var doc = $(document),
//        keys = new KeyLogger(doc);

//    // Trigger the key event
//    doc.trigger($.Event("keydown", { keyCode: 9 }));

//    // Verify expected behavior
//    assert.deepEqual(keys.log, [9], "correct key was logged");
//});