const nameInput = document.getElementById('nameInput')! as HTMLInputElement;
const result = document.getElementById('result')!;
const resultName = document.getElementById('resultName')!;
const resultValue = document.getElementById('resultValue')!;
const cover = document.getElementById('cover')!;

result.style.display = 'none';
cover.style.width = '100%';

function openingResult() {
    cover.style.width = `${cover.clientWidth - 1}px`;
}

const results = [
    '-1万円',
    '-1000円',
    '-100円',
    '-10円',
    '-1円',
    '0円',
    '1円',
    '5円',
    '10円',
    '50円',
    '100円',
    '500円',
    '1000円',
    '2000円',
    '5000円',
    '1万円',
    '10万円',
    '100万円',
    '1000万円',
    '1億円',
    '10億円',
    '100億円',
    '1000億円',
    '1兆円',
    '10兆円',
    '100兆円',
    '1000兆円',
    '1京円'
]

let intervalID: NodeJS.Timeout | null = null;
async function start() {
    cover.style.width = '100%';
    if (intervalID !== null) clearInterval(intervalID);
    result.style.display = 'block';
    resultName.textContent = `${nameInput.value}さんの金運は！？`;
    const encoder = new TextEncoder();
    const data = encoder.encode(nameInput.value);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = new Uint32Array(hashBuffer);
    const hash = hashArray[0];
    const i = hash % results.length;
    resultValue.textContent = results[i];
    intervalID = setInterval(openingResult, 1);
}

const startButton = document.getElementById('startButton')!;
startButton.addEventListener('click', start);