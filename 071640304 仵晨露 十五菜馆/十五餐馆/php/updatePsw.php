<?php
    require_once ("connect.php");
    $name = $_POST['name'];
    $oldPsw = $_POST['oldPsw'];
    $newPsw = $_POST['newPsw'];
    $newPsw1 = $_POST['newPsw1'];

    $sql = "select * from userr where userName = '$name';";
    $query = mysqli_query($con,$sql);
    $sql1 = "update userr set psw = '$newPsw'where userName = '$name';";
    if($query && mysqli_num_rows($query)){
        $result = mysqli_fetch_assoc($query);
        $i = $result['psw'];
//    旧密码对
            if($i == $oldPsw){
//                旧密码和新密码不同
                if($oldPsw != $newPsw){
                    if($query1 = mysqli_query($con,$sql1)){
                        echo "success";
                    }
//                    旧密码和新密码相同
                }else{
                    echo "false";
                }
            } else{
                echo "wrong";
            }
    }else{
        echo "12";
    }
?>