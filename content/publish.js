// 챗봇 위젯 - DOM 준비 후 삽입
function initChatbot() {
  // 이미 삽입된 경우 중복 방지
  if (document.getElementById('chat-widget')) return;

  const chatWidgetHTML = `
<div id="chat-widget">
  <div id="chat-tooltip">
    AI 기술지원 챗봇입니다<br>
    도움이 필요하신가요?
  </div>
  <button id="chat-btn">🤖</button>
</div>
<div id="chatbot-modal">
  <div id="chatbot-overlay"></div>
  <div id="chatbot-container">
    <div id="chatbot-header">
      <span>다빛솔루션 AI 챗봇</span>
      <button id="chatbot-close">✕</button>
    </div>
    <iframe
      id="chatbot-iframe"
      src="about:blank"
      allow="clipboard-write"
    ></iframe>
  </div>
</div>
`;

  document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);

  function toggleChatbot() {
    const modal = document.getElementById('chatbot-modal');
    const iframe = document.getElementById('chatbot-iframe');

    if (modal.style.display === 'none' || modal.style.display === '') {
      if (iframe.src === 'about:blank' || iframe.src === '') {
        iframe.src = 'https://chatbot.dabit.synology.me';
      }
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  document.getElementById('chat-btn').addEventListener('click', toggleChatbot);
  document.getElementById('chatbot-overlay').addEventListener('click', toggleChatbot);
  document.getElementById('chatbot-close').addEventListener('click', toggleChatbot);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modal = document.getElementById('chatbot-modal');
      if (modal && modal.style.display === 'block') {
        toggleChatbot();
      }
    }
  });
}

// DOM 상태에 따라 적절한 시점에 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatbot);
} else {
  initChatbot();
}
