<?php
require_once ("connect.php");
$userName = $_POST['userName'];
$sql = "select * from userinfo where userName = '$userName' order by userinfoId asc;";
$query = mysqli_query($con,$sql);
if($query && mysqli_num_rows($query)){
    while($result= mysqli_fetch_assoc($query)){
        $data[] = $result;
    }
}
$i =0;
if(!empty($data)){
    foreach ($data as $value){

        ?>

        <li>
            <span class="ul-id" style="display: none"><?php echo $value['userinfoId']; ?></span>
            <p class="ul-add"><?php echo $value['addr']; ?></p>
            <p class="ul-info">
                <span class="ul-name"><?php echo $value['loginName']; ?></span>
                <span>
                    (
                <span class="ul-sex"><?php echo $value['gender']; ?></span>
                    )
                </span>
                <span class="ul-tel"><?php echo $value['tel']; ?></span>
            </p>
            <img src="img/删除图标.png" title="删除地址" class="delete-icon" onclick="deleteAdd(<?php echo $value['userinfoId']; ?>)" id="<?php echo $i;?>" name="delete-add"/>
            <img  src="img/编辑.png" title="修改地址" name="modify-add" onclick="modifyAdd(<?php echo $i;?>)"/>
        </li>

        <?php
        $i++;
    }
}else{
    ?>

    <p class="no-address">您还没有地址喔，快去添加地址吧~</p>

    <?php
}
?>
