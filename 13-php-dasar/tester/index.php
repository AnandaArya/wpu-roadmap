<?php 
// $str = "The rain in SPAIN falls mainly on the plains.";
// $pattern = "/ain/";
// echo preg_match_all($pattern, $str);

// $arr1 = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ];

// function diagonalDifference($arr) {
//     $first = 0; $second = 0; $count = count($arr);
//     for($i = 0, $j = ($count - 1); $i < $count; $i++, $j--) {
//         $first += $arr[$i][$i];
//         $second += $arr[$i][$j];
//     }

//     echo abs($first - $second);
// }

// diagonalDifference($arr1);

// $a = [17, 28, 30];
// $b = [99, 16, 8];

// function compareTriplets($a, $b) {
//     $c = 0; $d = 0;
//     for($i = 0; $i < 3; $i++) {
//         if($a[$i] > $b[$i]) {
//             $c++;
//         } else if($a[$i] < $b[$i]) {
//             $d++;
//         }
//     }
//     return [$c, $d];
// }

// $tes =  compareTriplets($a, $b);
// print_r($tes);


// $ar = [1, 2, 3, 4, 10, 11];
// function simpleArraySum($ar) {
//     $output = 0;
//     for($i = 0; $i < count($ar); $i++) {
//         $output += $ar[$i];
//     }

//     return $output;
// }

// $tampil = simpleArraySum($ar);
// echo $tampil;

$arr4 = [-4 , 3, -9, 0, 4, 1];
function plusMinus($arr) {
    $count = $count($arr);
    $results = ['pos' => 0, 'neg' => 0, 'zero' => 0];
    for($i = 0; $i < $count; $i++) {
        $val = $arr[$i];
        if($val < 0) {
            $result['neg']++;
        } else if($val > 0) {
            $results['zero']++;
        } else {
            $results['zero']++;
        }
    }

    foreach($result as $res) {
        echo ($res / $count) ."\n";
    }
}

$tampil4 = plusMinus($arr4);
echo $tampil4;
?>