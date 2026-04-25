function injectButtonForSite(selector, siteName) {
  const interval = setInterval(() => {
    const inputBox = document.querySelector(selector);
    if (inputBox && !document.querySelector(`#prompt-box-btn-${siteName}`)) {
      const button = document.createElement('button');
      button.id = `prompt-box-btn-${siteName}`;
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 1024 1024"><path d="M860.16 323.584c-8.192-16.384-24.576-28.672-40.96-40.96l-253.952-147.456c-16.384-8.192-32.768-12.288-53.248-12.288s-36.864 4.096-53.248 16.384L200.704 282.624c-16.384 8.192-28.672 24.576-40.96 40.96-8.192 16.384-12.288 36.864-12.288 53.248v290.816c0 20.48 4.096 36.864 16.384 53.248 8.192 16.384 24.576 28.672 40.96 40.96l253.952 147.456c16.384 8.192 36.864 16.384 53.248 16.384s36.864-4.096 53.248-16.384l253.952-147.456c16.384-8.192 28.672-24.576 40.96-40.96 8.192-16.384 16.384-36.864 16.384-53.248V376.832c0-16.384-4.096-36.864-16.384-53.248z m-385.024 512l-237.568-135.168-12.288-12.288c-4.096-4.096-4.096-12.288-4.096-16.384V401.408l253.952 143.36v290.816zM258.048 335.872l237.568-135.168c4.096-4.096 12.288-4.096 16.384-4.096s12.288 0 16.384 4.096l237.568 135.168-253.952 147.456-253.952-147.456z m544.768 335.872c0 8.192 0 12.288-4.096 16.384l-12.288 12.288-237.568 135.168v-290.816l253.952-143.36v270.336z" fill="currentColor"></path></svg>`;
      button.style.position = 'absolute';
      button.style.right = '10px';
      button.style.bottom = '10px';
      button.style.border = 'none';
      button.style.background = 'transparent';
      button.style.cursor = 'pointer';
      button.title = 'Open Prompt Box';

      // When clicked, open your popup
      button.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'openPopup' });
      });

      inputBox.parentElement.appendChild(button);
      clearInterval(interval);
    }
  }, 1000);
}

// Different AI platform text area selectors
injectButtonForSite('textarea[placeholder*="Ask anything"]', 'chatgpt');
injectButtonForSite('textarea[aria-label*="Ask Gemini"]', 'gemini');
injectButtonForSite('textarea[placeholder*="Ask Deepseek"]', 'deepseek');
injectButtonForSite('textarea[placeholder*="Ask Grok"]', 'grok');
