1.  Question: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Answer
    . getElementById() → একটি নির্দিষ্ট id দ্বারা কেবল একটি element সিলেক্ট করে।
    . getElementsByClassName() → নির্দিষ্ট class নামের সব element সিলেক্ট করে এবং একটি live HTMLCollection রিটার্ন করে (DOM পরিবর্তন হলে এটি আপডেট হয়)।
    . querySelector() → CSS selector অনুযায়ী প্রথম মেলানো element সিলেক্ট করে।
    . querySelectorAll() → সব মেলানো element সিলেক্ট করে এবং একটি static NodeList রিটার্ন করে (DOM পরিবর্তন হলেও আপডেট হয় না)।
    <!-- End the ans. of Question no.-1 -->

2.  Question: How do you create and insert a new element into the DOM?
    Answer:
        DOM-এ নতুন একটি element তৈরি ও যুক্ত করা
        . let myText = document.createElement("h1");  
        . myText.innerText = "This my DOM example";  
        . document.body.appendChild(myText);
        <!-- === এই লেখা দেখা যাবে: "This my DOM example" -->
        <!-- End the ans. of Question no.-2 -->

3.  Question: What is Event Bubbling and how does it work?
    Answer: 
        Event Bubbling
        Event Bubbling মানে হলো, যখন কোনো event একটি child element-এ ঘটে, সেটি ধাপে ধাপে তার parent elements পর্যন্ত উপরের দিকে ছড়িয়ে যায়।

        উদাহরণ: যদি একটি <div> এর ভিতরে একটি <button> থাকে এবং যদি ঐ <button> এ ক্লিক করা হয়, তবে প্রথমে button-এর event ট্রিগার হবে, তারপর div-এর event, এরপর ধাপে ধাপে DOM tree-এর উপরের দিকে যাবে।
        <!-- End the ans. of Question no.-3 -->

4.  Question: What is Event Delegation in JavaScript? Why is it useful?
    Answer: 
        
        Event Delegation
        Event Delegation হলো একটি টেকনিক যেখানে প্রতিটি child element-এ আলাদা event listener যোগ করার বদলে, parent element-এ একটি event listener বসানো হয়। যখন event bubbling হয়, parent সেই event ধরে এবং event.target দেখে কোন child element থেকে ইভেন্ট এসেছে তা চিনে নেয়।
        <!-- End the ans. of Question no.-4 -->

5.  Question: What is the difference between preventDefault() and stopPropagation() methods?
    Answer:
    . preventDefault() → কোনো element-এর default action বন্ধ করে। উদাহরণ: form submission বন্ধ করা বা link থেকে page navigation বন্ধ করা।
    . stopPropagation() → event-এর bubbling বন্ধ করে, যাতে event parent elements-এ পৌঁছায় না।
    <!-- End the ans. of Question no.-5 -->