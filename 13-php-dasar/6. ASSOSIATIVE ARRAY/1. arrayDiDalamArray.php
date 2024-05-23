<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .kotak {
            width: 30px;
            height: 30px;
            background-color: lime;
            text-align: center;
            line-height: 30px;
            margin: 3px;
            float: left;
            transition: 0.5s;
        }

        .kotak:hover {
            tansform: rotate(360deg);
            border-radius: 50%;
        }

        .clear {
            clear: both;
        }
    </style>
</head>
<body>
<?php 
$angkaBanyak = [
    [1,2,3],
    [4,5,6],
    [7,8,9]];
?>

<?php foreach($angkaBanyak as $angka) : ?>
    <?php foreach($angka as $a ) : ?>
    <div class="kotak"><?= $a?></div>
    <?php endforeach; ?>
    <div class="clear"></div>
<?php endforeach; ?>
</body>
</html>