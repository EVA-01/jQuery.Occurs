jQuery.Occurs
=============

Find the number of occurrences of something within HTML elements.

## Usage

    $('#element').occurs();
    $('#element').occurs("cat");
    $('#element').occurs(5);
    $('#element').occurs($('b'));
    $('#element').occurs(/(cat|dog) fur/gi);
    $('#element').occurs(['a', 'b', 'c', ' ']);
    $('#element, #tnemele, a').occurs("cat");
    
Except for the first and fourth options above, all of these search the `innerText` (ex: `$('#element').text()`).
Each bullet point below explains the respective line from the above example.

* Returns the amount of occurrences of the element(s).
* Performs a RegExp of `"cat"` (case-insensitive, escapes special RegExp characters) and returns the amount of matches.
* Same as above but with the number `"5"`.
* Finds the occurrences of bold elements within the element(s). Will also check if the selected elements (here, `$('#element')`) contain a bold element and includes that in the result.
* Performs the RegExp expression on the element.
* Searches for each string array element. Returns something like: `{ a:5, b:1, c:3, " ":20 }`.
* All options search through all of the matched elements.

## License: Public Domain
Please don't rename it or change credit away from me, James Anthony Bruno, because that would make me sad. It is fine, however, to make changes to Occurs's core to suit your needs for use in your products (whether commercial, personal, or non-profit). If you believe you've found a better way for Occurs to work, go ahead and message me and let me know! I would love to implement your fix. 
