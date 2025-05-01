<!-- LYNX Contact Page with Smart AI Chatbot (Minimal Functional Prototype) --><!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact LYNX</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { lynx: '#4ADE80' },
          fontFamily: { sans: ['Segoe UI', 'sans-serif'] }
        }
      }
    }
  </script>
</head>
<body class="bg-gray-100 font-sans">
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-center mb-4">تماس با تیم لاینکس</h1>
    <p class="text-center text-gray-600 mb-6">برای ارتباط با تیم لاینکس و ارسال هرگونه سوال یا پیشنهاد، لطفاً از یکی از روش‌های زیر استفاده کنید.</p><form class="bg-white shadow-md rounded-lg p-6 space-y-4">
  <input type="text" placeholder="نام" class="w-full border border-gray-300 rounded p-2" required />
  <input type="email" placeholder="ایمیل" class="w-full border border-gray-300 rounded p-2" required />
  <textarea placeholder="پیام شما" class="w-full border border-gray-300 rounded p-2" rows="4" required></textarea>
  <button type="submit" class="bg-lynx text-white px-4 py-2 rounded hover:bg-green-500">ارسال</button>
</form>

<div class="mt-8">
  <h2 class="text-xl font-semibold">اطلاعات تماس</h2>
  <ul class="mt-2 space-y-2 text-gray-700">
    <li>ایمیل: <a href="mailto:lynx.project2025@gmail.com" class="text-blue-600">lynx.project2025@gmail.com</a></li>
    <li>تلگرام: <a href="https://t.me/lynxproject2025" class="text-blue-600">@lynxproject2025</a></li>
    <li>واتساپ: <a href="https://wa.me/1234567890" class="text-blue-600">ارسال پیام در واتساپ</a></li>
  </ul>
</div>

<!-- ChatBot UI -->
<div class="mt-10 p-4 bg-white rounded-lg shadow-md">
  <h2 class="text-xl font-bold mb-2">دستیار هوشمند لاینکس</h2>
  <div id="chatbox" class="h-64 overflow-y-auto border rounded p-3 bg-gray-50 text-sm space-y-2"></div>
  <div class="flex mt-2">
    <input id="userInput" type="text" placeholder="سوال خود را بپرسید..." class="flex-1 border p-2 rounded-l" />
    <button onclick="sendMessage()" class="bg-lynx text-white px-4 rounded-r">ارسال</button>
  </div>
</div>

  </div>  <script>
    const chatbox = document.getElementById('chatbox');
    const input = document.getElementById('userInput');

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;
      appendMessage('شما', text, 'right');
      input.value = '';
      respondToMessage(text);
    }

    function appendMessage(sender, message, align = 'left') {
      const msg = document.createElement('div');
      msg.className = `text-${align === 'right' ? 'right text-blue-700' : 'left text-gray-800'}`;
      msg.textContent = `${sender}: ${message}`;
      chatbox.appendChild(msg);
      chatbox.scrollTop = chatbox.scrollHeight;
    }

    function respondToMessage(msg) {
      let response = '';
      msg = msg.toLowerCase();
      if (msg.includes('تماس') || msg.includes('پشتیبانی')) response = 'برای پشتیبانی، لطفاً از فرم تماس استفاده کنید یا به تلگرام پیام دهید.';
      else if (msg.includes('ایمیل')) response = 'ایمیل رسمی ما: lynx.project2025@gmail.com';
      else if (msg.includes('توکن')) response = 'توکن لاینکس یک توکن غیرمتمرکز روی BNB Chain است. برای اطلاعات بیشتر به صفحه اصلی بروید.';
      else response = 'سوال شما دریافت شد. لطفاً کمی صبر کنید تا بررسی شود یا در صورت فوریت از طریق واتساپ یا تلگرام پیام دهید.';
      appendMessage('لاینکس‌بات', response);
    }
  </script></body>
</html>
