const pluse = document.querySelector('.inc');
const minus = document.querySelector('.dec');
const count = document.querySelector('.result');
const changeBy = document.querySelector('.changeBy');
const resetBtn = document.querySelector('.reset-btn');

pluse.addEventListener('click', () => {
    const countValue = parseInt(count.innerHTML);
    const changeByVal = parseInt(changeBy.value);
    count.innerHTML = countValue + changeByVal;
});

minus.addEventListener('click', () => {
    const countValue = parseInt(count.innerHTML);
    const changeByVal = parseInt(changeBy.value);
    count.innerHTML = countValue - changeByVal;
});

resetBtn.addEventListener('click', () => {
    count.innerHTML = 0;
})