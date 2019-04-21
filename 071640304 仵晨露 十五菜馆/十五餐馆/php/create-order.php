<?php
    require_once ("connect.php");
    session_start();
    $loginName = $_POST['loginName'];
    $address = $_POST['address'];
    $tel = $_POST['tel'];
    $gender = $_POST['gender'];
    $userName = $_POST['userName'];
    $buyTime = $_POST['buyTime'];
    $arriveTime = $_POST['arriveTime'];
    $remark = $_POST['remark'];
    $totalPrice = $_POST['totalPrice'];
    $rePrice = $_POST['rePrice'];
    $payPrice = $_POST['payPrice'];
    $payMethod = $_POST['payMethod'];

    if($remark == ""){
        $remark = "无备注信息";
    }

$sql2 = "SELECT * from orderinfo ORDER BY orderId DESC limit 0,1;";
$query2 = mysqli_query($con,$sql2);
if($query2 && mysqli_num_rows($query2)){
   $result = mysqli_fetch_assoc($query2);
    $orderId = $result['orderId'];

}
if($orderId == ""){
    $orderId = 1102958934;
}

    $sql1 = "insert into orderinfo VALUES ($orderId+1,'$userName','$loginName','$buyTime','$arriveTime','$remark','$totalPrice','$rePrice','$payPrice',1,'$payMethod','$gender','$tel','$address');";



//    为orderinfo表中插入信息
    if(mysqli_query($con,$sql1)) {

        if(!empty($_SESSION['orderNum'])){
            for($i = 0;$i < sizeof($_SESSION['orderNum']);$i ++){
                $sql3 = "insert into orderr VALUES ($orderId+1,'".$_SESSION['foodName'][$i]."','".$_SESSION['orderNum'][$i]."',
                '".$_SESSION['perPrice'][$i]."','".$_SESSION['img1'][$i]."');";
                mysqli_query($con,$sql3);
            }
        }
        echo $orderId+1;

    }else{
        echo "false";
    }


?>