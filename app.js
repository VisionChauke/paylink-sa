const screenIds = ['home', 'merchant', 'customer', 'processing', 'success'];
let processingTimer = null;
let toastTimer = null;

function show(id) {
  if (!screenIds.includes(id)) return;
  screenIds.forEach((screenId) => {
    const section = document.getElementById(screenId);
    if (section) {
      section.classList.toggle('active', screenId === id);
      section.setAttribute('aria-hidden', screenId === id ? 'false' : 'true');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function notify(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2100);
}

async function copyLink() {
  const linkInput = document.getElementById('link');
  const link = linkInput ? linkInput.value : 'paylink.sa/thandi-spaza';
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(link);
    } else {
      const helper = document.createElement('textarea');
      helper.value = link;
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      const copied = document.execCommand('copy');
      helper.remove();
      if (!copied) throw new Error('Copy unavailable');
    }
    notify('PayLink copied to clipboard');
  } catch (error) {
    notify('Your PayLink: ' + link);
  }
}

function pay(event) {
  if (event) event.preventDefault();
  const amountInput = document.getElementById('amount');
  const descriptionInput = document.getElementById('desc');
  const amount = Number.parseFloat(amountInput.value);

  if (!Number.isFinite(amount) || amount <= 0 || amount > 1000000) {
    amountInput.setCustomValidity('Enter an amount greater than R0 and no more than R1,000,000.');
    amountInput.reportValidity();
    return;
  }
  amountInput.setCustomValidity('');

  const description = descriptionInput.value.trim() || 'Customer payment';
  show('processing');
  clearTimeout(processingTimer);
  processingTimer = setTimeout(() => {
    document.getElementById('paid').textContent = formatRand(amount);
    document.getElementById('ref').textContent = 'PL-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('receipt-desc').textContent = description;
    addTransaction(amount, description);
    show('success');
  }, 1100);
}

function formatRand(value) {
  return 'R' + value.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function addTransaction(amount, description) {
  const transactionList = document.getElementById('tx');
  const transaction = document.createElement('div');
  transaction.className = 'tx';

  const mark = document.createElement('span');
  mark.className = 'tx-mark';
  mark.textContent = '✓';

  const main = document.createElement('div');
  main.className = 'tx-main';
  const value = document.createElement('b');
  value.textContent = formatRand(amount);
  const detail = document.createElement('small');
  detail.textContent = description + ' · just now';
  main.append(value, detail);

  const status = document.createElement('i');
  status.textContent = 'Paid';
  transaction.append(mark, main, status);
  transactionList.prepend(transaction);

  const total = document.getElementById('total');
  const count = document.getElementById('count');
  const currentTotal = Number.parseFloat(total.textContent.replace(/[^\d.]/g, '')) || 0;
  total.textContent = formatRand(currentTotal + amount);
  count.textContent = String((Number.parseInt(count.textContent, 10) || 0) + 1);
}

document.getElementById('payment-form').addEventListener('submit', pay);
show('home');
