<?php
require_once ("connect.php");
session_start();
$userName = $_SESSION['userName'];
$id = $_POST['orderId'];

$sql = "delete from comments where orderId = $id ;";
$sql2 = "delete from upordown where orderId = $id;";
if(mysqli_query($con,$sql)){
if(mysqli_query($con,$sql2)){
    //某个人的评论
    $sql13 = "select * from comments where userName = '$userName' order by coDate desc";
    $query13 = mysqli_query($con,$sql13);
    if($query13 && mysqli_num_rows($query13)){
        while($result13 = mysqli_fetch_assoc($query13)){
            $data13[] = $result13;
        }
    }
}
}else{
    echo "false";
}

$i=0;
if(!empty($data13)){
    foreach ($data13 as $value13){

        ?>
        <ul class="comment-area-ul">

            <img src="<?php echo $value13['headImg'];?>" class="headIcon"/>
            <li class="comment-area-li">
                <p class="userName de-userName"><?php echo $value13['userName'];?></p>
                <p class="star-img-p">
                    <img src="<?php echo $value13['starImg'];?>" class="star-img"/>
                </p>
                <p class="goodCo"><?php echo $value13['coState'];?></p>
                <p class="coDate de-coDate"><?php echo $value13['coDate'];?></p>
                <p class="coContent de-coContent"><?php echo $value13['comments'];?></p>
                <img  title="删除评论" src="img/删除图标.png" class="delete-comment" onclick="deleteComment(<?php echo $value13['orderId'];?>)" id="<?php echo $i;?>"/>
            </li>


        </ul>
        <?php
        $i++;
    }
}else{
    ?>
    <p class="no-comment">您还没有发布过任评论喔，快去点餐进行评价吧~</p>

    <?php
}
?>
