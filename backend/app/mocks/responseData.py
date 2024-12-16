import random

# random responses for demonstration purpose
def random_response():
    responses = [
        'The data suggests a detailed breakdown of age demographics in Saskatchewan based on the 2021 Census. Here\'s a helpful bar chart to visualize the distribution by broad age groups and gender: [DYNAMIC_COMPONENT_BEGIN]<BarChart width={600} height={400} data={[{ageGroup: \'0 to 14\', total: 19.7, men: 20.3, women: 19.1}, {ageGroup: \'15 to 64\', total: 62.8, men: 63.4, women: 62.2}, {ageGroup: \'65+\', total: 17.5, men: 16.3, women: 18.7}]} margin={{top: 20, right: 30, left: 20, bottom: 5}}><XAxis dataKey="ageGroup" /><YAxis /><Tooltip /><Legend /><Bar dataKey="total" fill="#8884d8" name="Total" /><Bar dataKey="men" fill="#82ca9d" name="Men" /><Bar dataKey="women" fill="#ffc658" name="Women" /></BarChart>[DYNAMIC_COMPONENT_END]',
        "### Python Example\nHere's a simple Python script that calculates the factorial of a number:\n```python\ndef factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nprint(factorial(5))  # Output: 120\n```",
        "#### Random Thoughts\n- **Coding can be fun** if you break it down step by step.\n- The world is like a giant **algorithm**, constantly evolving.\n- Try learning a new **language**, it could be programming or human!",
        "### JavaScript Example\nHere’s a quick JavaScript snippet to get the current date and time:\n```javascript\nfunction getCurrentTime() {\n    let date = new Date();\n    return date.toLocaleString();\n}\nconsole.log(getCurrentTime());  // Example Output: 12/15/2024, 4:30 PM\n```",
        "### Instruction: Making a Simple Web Page\nIf you want to create a simple HTML page, use this basic structure:\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>My Simple Page</title>\n</head>\n<body>\n    <h1>Welcome to My Website!</h1>\n    <p>This is a basic web page.</p>\n</body>\n</html>\n```",
    ]
    return random.choice(responses)
