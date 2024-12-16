import random
class AIService:
    def call_example_ai(input_context: str) -> str:

        # similate return from AI model SDK
        return {
            "response_model": 'demo-model',
            "response_author": 'assistant',
            "response_content": random_response()
        }
    
    def call_openai_api(input_context: str) -> str:
        return "Future Use: OpenAI response"
    
    def call_claude_ai(input_context: str) -> str:
        return "Future Use: Claude AI response"
    
# random responses for demonstration purpose
def random_response():
    responses = [
        # Response 1
        "## Welcome to the Random Chatbot!\n\nHere, I can assist you with many things! Whether you're looking for coding help, a friendly conversation, or instructions on various topics, you're in the right place. Let's dive into some examples!\n\n- I can help with **Python** and **JavaScript**.\n- Need help with a song? Let me know!\n- Or simply want some cool facts? I'm your chatbot!",
        
        # Response 2
        "### Python Example\nHere's a simple Python script that calculates the factorial of a number:\n```python\ndef factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nprint(factorial(5))  # Output: 120\n```",
        
        # Response 3
        "#### Random Thoughts\n- **Coding can be fun** if you break it down step by step.\n- The world is like a giant **algorithm**, constantly evolving.\n- Try learning a new **language**, it could be programming or human!",
        
        # Response 4
        "## Coding Challenge\nCan you solve this? Try writing a Python function that reverses a string without using the `[::-1]` slicing trick. I'll give you the solution in the next message if you need help!",
        
        # Response 5
        "### JavaScript Example\nHere’s a quick JavaScript snippet to get the current date and time:\n```javascript\nfunction getCurrentTime() {\n    let date = new Date();\n    return date.toLocaleString();\n}\nconsole.log(getCurrentTime());  // Example Output: 12/15/2024, 4:30 PM\n```",
        
        # Response 6
        "## Did You Know?\n- **Bananas are berries**, but strawberries aren’t!\n- **Honey never spoils** – Archaeologists have found pots of honey in ancient tombs that are still edible.\n- **Octopuses have three hearts**.",
        
        # Response 7
        "### Instruction: Making a Simple Web Page\nIf you want to create a simple HTML page, use this basic structure:\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>My Simple Page</title>\n</head>\n<body>\n    <h1>Welcome to My Website!</h1>\n    <p>This is a basic web page.</p>\n</body>\n</html>\n```",
        
        # Response 8
        "### Here's a Song Lyric\nIf you love **classical music**, you'll enjoy this beautiful piece by Beethoven. Here's an excerpt from *Ode to Joy*:\n\n```text\nO friends, no more of these sounds!\nLet us sing more cheerful songs,\nMore full of joy!\n```",
        
        # Response 9
        "## Motivation\n- **Believe in yourself**, and you can achieve anything.\n- **Failure is just another step** towards success.\n- Every small action brings you closer to your goal.",
        
        # Response 10
        "### Python Code to Calculate Fibonacci Sequence\nHere’s a Python function that calculates Fibonacci numbers up to a given number:\n```python\ndef fibonacci(n):\n    sequence = [0, 1]\n    while len(sequence) < n:\n        sequence.append(sequence[-1] + sequence[-2])\n    return sequence\n\nprint(fibonacci(10))  # Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\n```",
        
        # Response 11
        "### Quick Tip for Better Coding\n**Comment your code** – Writing clear comments in your code helps not just others, but also yourself when you return to it later.\n\nExample:\n```python\n# This function calculates the factorial of a number\ndef factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n```",
        
        # Response 12
        "## How to Make a JavaScript Function\nLet’s create a function that checks if a number is prime:\n```javascript\nfunction isPrime(n) {\n    if (n <= 1) return false;\n    for (let i = 2; i < n; i++) {\n        if (n % i === 0) return false;\n    }\n    return true;\n}\nconsole.log(isPrime(7));  // Output: true\n```",
        
        # Response 13
        "### Random Code Debugging\nHere’s a buggy Python function for you. Can you find the mistake?\n```python\ndef calculate_sum(numbers):\n    total = 0\n    for number in numbers:\n        total =+ number  # Bug here!\n    return total\nprint(calculate_sum([1, 2, 3]))  # Expected Output: 6\n```",
        
        # Response 14
        "## Fun Fact\nThe **longest time between two twins being born** is 87 days. A pair of twins was born prematurely, and the second twin stayed in the mother's womb for a few months before being delivered!",
        
        # Response 15
        "### Song Recommendation\nIf you like **acoustic music**, check out 'The Sound of Silence' by Simon & Garfunkel. It has some deep lyrics and a calm melody that will make you think.\n\n*Here's a short part of the lyric*: `Hello darkness, my old friend, I've come to talk with you again.`",
        
        # Response 16
        "#### JavaScript Syntax Tip\nDid you know that **JavaScript is case-sensitive**? This means `myVar` and `myvar` are treated as two different variables.\n\n```javascript\nlet myVar = 10;\nlet myvar = 20;\nconsole.log(myVar);  // Output: 10\nconsole.log(myvar);  // Output: 20\n```",
        
        # Response 17
        "### How to Create a Python List\nIn Python, you can create a list like this:\n```python\nfruits = ['apple', 'banana', 'cherry']\nprint(fruits)\n```",
        
        # Response 18
        "## Fun Code Challenge\nWrite a Python function that returns **True** if a number is even, and **False** if it’s odd. Here's a little hint: You can check if the number is divisible by 2.",
        
        # Response 19
        "### Instructions: How to Make a Simple Calculator in JavaScript\nHere's how you can create a basic calculator that adds two numbers:\n```javascript\nfunction addNumbers(a, b) {\n    return a + b;\n}\nconsole.log(addNumbers(5, 3));  // Output: 8\n```",
        
        # Response 20
        "### A Cool Python Trick\nYou can swap values in Python without a temporary variable. Try this:\n```python\nx, y = 10, 20\nx, y = y, x\nprint(x)  # Output: 20\nprint(y)  # Output: 10\n```",
        
        # Response 21
        "## A Quick Song Suggestion\nIf you love **indie music**, check out 'Dog Days Are Over' by Florence + The Machine. It’s uplifting and has an infectious rhythm.\n\n*Lyric sample*: `Happiness hit her like a train on a track.`",
        
        # Response 22
        "### Python Code for Sorting a List\nHere’s a simple Python function that sorts a list in ascending order:\n```python\nnumbers = [5, 2, 9, 1, 5, 6]\nnumbers.sort()\nprint(numbers)  # Output: [1, 2, 5, 5, 6, 9]\n```",
        
        # Response 23
        "#### Things You Can Do in JavaScript\n1. **Create dynamic web pages**\n2. **Handle events** (click, hover, etc.)\n3. **Interact with APIs** to fetch data\n4. **Create games**\n5. **Manipulate HTML and CSS**",
        
        # Response 24
        "## JavaScript Loop Example\nA quick example of how you can use a `for` loop in JavaScript to print numbers from 1 to 5:\n```javascript\nfor (let i = 1; i <= 5; i++) {\n    console.log(i);\n}\n```",
        
        # Response 25
        "### Fun Fact about Programming\nDid you know the first **high-level programming language** was *Fortran* (1957)? It was mainly used for **scientific computing**!",
        
        # Response 26
        "#### Try This Code\nHere’s a JavaScript code snippet to check if a number is even or odd:\n```javascript\nfunction isEven(n) {\n    return n % 2 === 0;\n}\nconsole.log(isEven(4));  // Output: true\nconsole.log(isEven(5));  // Output: false\n```",
        
        # Response 27
        "### Instruction: Set Up a Simple HTML Form\nTo create a basic HTML form with input fields, you can use the following code:\n```html\n<form action='/submit' method='post'>\n    <label for='name'>Name:</label>\n    <input type='text' id='name' name='name'>\n    <input type='submit' value='Submit'>\n</form>\n```",
        
        # Response 28
        "## Python List Comprehension Example\nIf you want to create a list of squares of numbers, here’s a cool way to do it using list comprehension:\n```python\nnumbers = [1, 2, 3, 4, 5]\nsquares = [n**2 for n in numbers]\nprint(squares)  # Output: [1, 4, 9, 16, 25]\n```",
        
        # Response 29
        "### Random Trivia\n**Hummingbirds are the only birds** that can fly backward.\nThey can also beat their wings up to **80 times per second**!",
        
        # Response 30
        "## Quick Programming Tip\n**Always test your code** – Small bugs are often the most frustrating, but by testing frequently, you can catch issues early and keep your codebase clean!",
        
        # Response 31
        "### Here’s a Python Code Snippet\nThe following Python code checks if a string is a palindrome:\n```python\ndef is_palindrome(s):\n    return s == s[::-1]\n\nprint(is_palindrome('madam'))  # Output: True\nprint(is_palindrome('hello'))  # Output: False\n```",
        
        # Response 32
        "### Song Excerpt\nThis one’s for **rock fans**! Here’s an iconic line from Queen’s *We Will Rock You*:\n\n```text\nWe will, we will rock you!\nWe will, we will rock you!\n```",
        
        # Response 33
        "## How to Make a Random Number Generator in Python\nHere’s a Python script that generates a random number between 1 and 100:\n```python\nimport random\nrandom_number = random.randint(1, 100)\nprint(random_number)\n```",
        
        # Response 34
        "### Instruction: Create a Button in HTML\nHere’s how to create a simple button in HTML:\n```html\n<button onclick='alert(\"Hello, World!\")'>Click Me</button>\n```",
        
        # Response 35
        "### Fun Fact\nThe **smallest bone in your body** is the stapes bone in your ear. It’s about the size of a grain of rice!",
        
        # Response 36
        "## Random Python Challenge\nWrite a function that takes a string and returns the number of vowels in it. Here’s a hint: You can use the `in` keyword to check if a character is a vowel!",
        
        # Response 37
        "### Song for the Soul\nIf you’re in the mood for something relaxing, check out *Imagine* by John Lennon. The lyrics are so profound and peaceful.\n*Example Lyric*: `Imagine all the people, living life in peace.`",
        
        # Response 38
        "## Here’s a Helpful Python Tip\nIn Python, you can use `zip` to combine two lists together into pairs:\n```python\nnames = ['Alice', 'Bob', 'Charlie']\nages = [25, 30, 35]\ncombined = list(zip(names, ages))\nprint(combined)  # Output: [('Alice', 25), ('Bob', 30), ('Charlie', 35)]\n```",
        
        # Response 39
        "### Fun JavaScript Code\nHere’s a JavaScript function that adds two numbers together:\n```javascript\nfunction add(a, b) {\n    return a + b;\n}\nconsole.log(add(3, 4));  // Output: 7\n```",
        
        # Response 40
        "#### Motivational Quote\n`The best way to predict the future is to create it.` – Abraham Lincoln",
        
        # Response 41
        "## A Quick Introduction to Markdown\nHere’s how you can use markdown syntax:\n\n1. **Bold text**: `**bold**`\n2. *Italic text*: `*italic*`\n3. Links: `[OpenAI](https://www.openai.com)`",
        
        # Response 42
        "### Cool HTML Code for a Navigation Bar\nHere’s how you can create a simple navigation bar:\n```html\n<nav>\n    <ul>\n        <li><a href='#home'>Home</a></li>\n        <li><a href='#about'>About</a></li>\n        <li><a href='#contact'>Contact</a></li>\n    </ul>\n</nav>\n```",
        
        # Response 43
        "## Need Some Motivation?\n**You can achieve greatness**. Take small steps every day, and soon enough, you’ll look back and see how far you've come.",
        
        # Response 44
        "### Song to Relax\nTry listening to *Clair de Lune* by Claude Debussy. It’s one of the most soothing classical pieces.",
        
        # Response 45
        "## Cool JavaScript Trick\nYou can use `Math.random()` to generate a random number between 0 and 1. Here's an example:\n```javascript\nconsole.log(Math.random());  // Output: Random number between 0 and 1\n```",
        
        # Response 46
        "### Python Code for Basic Calculator\nHere’s a simple Python calculator that adds, subtracts, multiplies, and divides two numbers:\n```python\ndef calculator(a, b, operation):\n    if operation == 'add':\n        return a + b\n    elif operation == 'subtract':\n        return a - b\n    elif operation == 'multiply':\n        return a * b\n    elif operation == 'divide':\n        return a / b\n\nprint(calculator(10, 5, 'add'))  # Output: 15\n```",
        
        # Response 47
        "## Fun Programming Tip\n**Break big problems into smaller chunks**. This makes them more manageable and helps you avoid feeling overwhelmed.",
        
        # Response 48
        "### Python for Data Science\nPython is great for data analysis. Here's an example of how you can use **Pandas** to load a CSV file:\n```python\nimport pandas as pd\ndata = pd.read_csv('data.csv')\nprint(data.head())  # Prints first five rows of the dataset\n```",
        
        # Response 49
        "### JavaScript Quiz\nTest your skills: What is the result of this JavaScript expression?\n```javascript\nconsole.log(10 + '5');  // What do you think will happen?\n```",
        
        # Response 50
        "#### Python Trick\nTo **swap two variables** in Python without using a third variable, try this:\n```python\nx, y = 10, 20\nx, y = y, x\nprint(x)  # Output: 20\nprint(y)  # Output: 10\n```"
    ]
    return random.choice(responses)
