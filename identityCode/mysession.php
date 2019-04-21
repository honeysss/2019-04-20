<?php
session_start();
$image = imagecreatetruecolor(100,30);
$bgColor = imagecolorallocate($image, 255,255,255);
imagefill($image,0, 0, $bgColor);


$content = "ABDEFGHIJLQRTabdefghijrt345678";
$identifyCode = '';

for($i = 0;$i < 4;$i ++){
    $fontSize = 10;
    $fontColor = imagecolorallocate($image,mt_rand(0,120), mt_rand(0,120), mt_rand(0,120));
    $fontContent = substr($content,mt_rand(0,strlen($content)-1),1);

    $identifyCode .= $fontContent;

    $x = ($i*(100/4))+rand(5,10);
    $y = rand(5,10);

    imagestring($image,$fontSize,$x,$y,$fontContent,$fontColor);

}
$_SESSION['identifyCode'] = $identifyCode;
for($i = 0;$i<200;$i++){
    $pointColor = imagecolorallocate($image,mt_rand(50,200),mt_rand(50,200),mt_rand(50,200));
    imagesetpixel($image,mt_rand(1,99),mt_rand(1,29),$pointColor);
}

for($i = 0;$i<3;$i++){
    $lineColor = imagecolorallocate($image,mt_rand(50,200),mt_rand(50,200),mt_rand(50,200));
    imageline($image,mt_rand(1,99),mt_rand(1,29),mt_rand(1,99),mt_rand(1,29),$lineColor);
}


header('Content-Type:image/png');
imagepng($image);
imagedestroy($image);

?>