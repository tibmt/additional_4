module.exports = function multiply(first, second) {

    let Arr = [];

    first = first.split('');
    second = second.split('');

    first.reverse();
    second.reverse();

    for(let i = 0; first[i] >= 0; i++) {
        for (let j = 0; second[j] >= 0; j++) {
            if (!Arr[i + j]) Arr[i + j] = 0;
            Arr[i + j] += first[i] * second[j];
        }
    }

    for(let i = 0; Arr[i] >= 0; i++) {
        if (Arr[i] >= 10) {
            if (!Arr[i + 1]) Arr[i + 1] = 0;
            Arr[i + 1] += parseInt(Arr[i] / 10);
            Arr[i] %= 10;
        }
    }

    Arr.reverse();
    return Arr.join('');

}
