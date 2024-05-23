// Logic Test Multiple 3 and 5
var solution = function (number) {
    let result = 0;
    for (let i = 0; i < number; i++) {
        if (i % 5 == 0 || i % 3 == 0) {
            result = result + i;
        }
    }
    
    return result;
}

// hasil penjumlahan dari kelipatan 3 dan 5
solution(10) // 23 = 3 + 5 + 6 + 9
solution(20) // 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18


