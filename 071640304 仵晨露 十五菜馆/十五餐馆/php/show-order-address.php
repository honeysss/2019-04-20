<?php
require_once ("connect.php");
$userName = $_POST['userName'];
$sql = "select * from userinfo where userName = '$userName'order by userinfoId asc;";
$query = mysqli_query($con,$sql);
if($query && mysqli_num_rows($query)) {
    while ($result = mysqli_fetch_assoc($query)) {
        $data[] = $result;
    }
}
        $i =0;
            if(!empty($data)){
                foreach ($data as $value){

                    ?>

                    <ul>
                        <li class="<?php echo $i;?>" onclick="showAddress(<?php echo $i;?>)" onmouseover="over(<?php echo $i;?>)" onmouseout="out(<?php echo $i;?>)">
                            <span class="order-page-id" style="display: none"><?php echo $value['userinfoId']; ?></span>
                            <span class="order-page-userName" style="display: none"><?php echo $value['userName']; ?></span>
                            <p class="order-page-addr"><?php echo $value['addr']; ?></p>
                            <p class="order-page-info">
                                <span class="order-page-loginName"><?php echo $value['loginName']; ?></span>
                                <span>
                (
            <span class="order-page-gender"><?php echo $value['gender']; ?></span>
                )
            </span>
                                <span class="order-page-tel"><?php echo $value['tel']; ?></span>
                            </p>
                        </li>
                        <img src="img/删除图标.png" title="删除地址" class="delete-icon" onclick="orderDeleteAdd(<?php echo $value['userinfoId']; ?>)" id="<?php echo $i;?>" name="delete-add"/>
                        <img  src="img/编辑.png" title="修改地址" name="modify-add" onclick="orderModifyAdd(<?php echo $i;?>)"/>

                    </ul>
                    <?php
                    $i++;
                }
            }else{
                ?>

                <p class="no-address1">您还没有地址喔，快去添加地址吧~</p>

                <?php
            }
        ?>

