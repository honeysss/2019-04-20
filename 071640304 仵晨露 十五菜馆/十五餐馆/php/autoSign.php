<?php
//    require_once ("connect.php");
//    date_default_timezone_set('prc');
//    ignore_user_abort();
//    set_time_limit();
//while(true){
//    $sql = "select orderId,arriveTime,state from orderinfo;";
//    $query = mysqli_query($con,$sql);
//    if($query && mysqli_num_rows($query)){
//        while($result = mysqli_fetch_assoc($query)){
//            $data[] = $result;
//        }
//    }
//    if(!empty($data)){
//        foreach ($data as $value){
//
////        如果此时的状态为正在送餐 比较一下当前时间和送达时间 如果当前时间大于等于送达时间 把送餐状态改为2
//            if($value['state'] == 1){
//                $date1 = date('Y-m-d H:i:s');
//                $date2 = $value['arriveTime'];
//                if($date2 <= $date1){
//                    $orderId = $value['orderId'];
//                    $sql1 = "update orderinfo set state = 2 where orderId = $orderId;";
//                    mysqli_query($con,$sql1);
//                }
//            }
//        }
//    }
//sleep(10);
//}
//
//?>