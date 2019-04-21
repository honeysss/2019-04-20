<?php
require_once ("connect.php");

$sql2 = "select id from messageboard order by id DESC limit 0,1;";
$query2 = mysqli_query($con,$sql2);
if($query2 && mysqli_num_rows($query2)){
    $result2 = mysqli_fetch_assoc($query2);
}
$id = $result2['id'];
$img = $_POST['img'];
$sql = "INSERT into messageBoard VALUES ($id + 1, '师成杰的白月光','img/鲸鱼.png',null,'$img',now());";
mysqli_query($con,$sql);

$sql1 = "select * from messageboard order by id DESC ;";
$query1 = mysqli_query($con,$sql1);
if($query1 && mysqli_num_rows($query1)){
    while($result = mysqli_fetch_assoc($query1)){
        $data[] = $result;
    }
}


if(!empty($data)){
    foreach ($data as $value){

        ?>

        <ul class="messageUl">
            <img src="<?php echo $value['img'];?>" class="messageImg"/>
            <li class="messageLi">
                <p class="name"><?php echo $value['name'];?></p>
                <p class="rank">第<?php echo $value['id'];?>楼</p>
                <p class="content"><?php echo $value['content'];?></p> <?php
                if($value['imgContent'] != null){

                    ?>
                    <img src = "<?php echo $value['imgContent'];?>"  class="imgContent"/>
                    <?php

                }
                ?>
                <p class="date"><?php echo $value['DATE'];?></p>
            </li>
            <div class="img4"></div>
        </ul>

        <?php

    }
}
?>